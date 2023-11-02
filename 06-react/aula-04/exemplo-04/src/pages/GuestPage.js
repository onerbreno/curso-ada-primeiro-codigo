
import { useOutletContext } from "react-router-dom";
import Input from "../componentes/Input";
import { Link } from "react-router-dom";

const GuestPage = () => {

    const [data, setData] = useOutletContext();

    const handleWeightChange = (e) => {
        setData({ ...data, peso: e.target.value});
    }

    const handleHeightChange = (e) =>{
        setData({...data, altura: e.target.value});
    }

    const handleCalculate = () => {
        const peso = parseFloat(data.peso);
        const altura = parseFloat(data.altura)/100;
        const imc = peso / (altura*altura);

        setData({...data, resultado: imc.toFixed(2)});
    }

    return(
        <>
            <Input label=" Peso(kg): " value={data.peso} handleChange={handleWeightChange} />  
            <Input label=" Altura(cm): " value={data.altura}  handleChange={handleHeightChange} />  
            <Link to="/resultado">
                <button onClick={handleCalculate}> Calcular </button>
            </Link>
        </>
    )
}
export default GuestPage;