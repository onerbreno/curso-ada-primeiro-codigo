const form = document.forms["product-form"]
const addProductButton = form.querySelector(".add-product-button")
const productList = document.querySelector('.task-list')

const API_URL = "http://127.0.0.1:3000"

async function addNewProduct(product) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })

  await fetchProducts()
}

async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`)

  const data = await response.json()

  productList.innerHTML = ""

  data.forEach(product => {
    createProductElement(product.title)
  })
}

function createProductElement(productTitle) {
  const product = document.createElement("li")
  
  const productText = document.createElement("p")
  productText.innerHTML = productTitle
  
  product.append(productText)
  
  updateProductList(product)
}

function updateProductList(product) {
  productList.append(product)
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  addProductButton.disabled = true
  
  const productTitle = form.elements["product-name"].value 
  
  const product = {
    id: Date.now(),
    title: productTitle
  }
  
  await addNewProduct(product)
  addProductButton.disabled = false
})


window.addEventListener("load", fetchProducts)
