import { Component } from "react";
import Input from "./Input";

class  Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            peso: 0,
            altura: 0,
            resultado : null
        }
   
    }
    getIMC = () => {
        const peso = parseFloat(this.state.peso);
        const altura = parseFloat(this.state.altura)/100;
        const imc = peso / (altura*altura)
        return imc.toFixed(2);
    }
    
    handleWeightChange = (e) => {
        this.setState({ ...this.state, peso: parseFloat(e.target.value)});
    }

    handleHeightChange = (e) => {
        this.setState({ ...this.state, altura: parseFloat(e.target.value)});
    }

    handleClick = () => {
        this.setState({...this.state, resultado :  <p>Seu IMC é: {this.getIMC()} kg/m2</p>})
    }
    render(){
        return(     
            <>
                <Input label=" Peso(kg): " id="peso" value={this.state.peso} handleChange={this.handleWeightChange}/>  
                <Input label=" Altura(cm): " id="altura" value={this.state.value} handleChange={this.handleHeightChange} />  
                <button 
                    disabled={!this.state.peso && !this.state.altura} 
                    onClick={this.handleClick}>
                    Calcular
                </button>
                {this.state.resultado}
            </>
        )
    }
}

export default Calculator;