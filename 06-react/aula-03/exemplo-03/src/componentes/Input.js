import { Component } from "react";

class Input extends Component {

    render() {
        console.log(this.props.value)
        return(
            <>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input type="number" name={this.props.label} value={this.props.value} onChange={this.props.handleChange}/>
            </>
        )
    }    
}

export default Input;