import { Link, useOutletContext } from "react-router-dom";

function ResultPage() {
    
    const [data] = useOutletContext();

    return(
        <>
            <p>Seu IMC é: {data.resultado} kg/m2</p>
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </>
    )
}

export default ResultPage;