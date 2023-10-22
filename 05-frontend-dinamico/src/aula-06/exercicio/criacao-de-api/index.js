const express = require("express");
const { object, number, string, date, ValidationError, boolean } = require("yup");
const port = 3000;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productSchema = object({
  id: number().required("id é necessário").positive(),
  title: string().required("Título do pedido é obrigatório"),
});

const products = []

app.post("/products", async (req, res) => {
  try {
    const isValidProduct = await productSchema.validate(req.body);

    if (isValidProduct) {
      products.push(req.body)

      return res.status(201).json({});
    }

    return res.status(400).json(isValidProduct);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        msg: error.message,
      });
    }
    return res.status(500).json(error);
  }
});

app.get("/products", async (req, res) => {
  return res.status(200).json(products);
});

app.listen(port, () => {
  console.log("Servidor no ar");
});
