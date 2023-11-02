import { useState } from "react";
import Header from '../componentes/Header';
import { Outlet } from "react-router-dom";

function CalculatorPage() {

    const [data, setData] = useState({
        peso: 0,
        altura: 0,
        resultado : 0
    });

        return(     
            <>
                <Header title="Calculadora de IMC"/>
                <Outlet context={[data, setData]} />
            </>
        )
    }

export default CalculatorPage;