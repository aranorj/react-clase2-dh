import { Component } from "react";

class Contador extends Component {
    constructor(){
        super();
        this.state = {
            valor: 0
        }
    }
    incrementarValor = ()=>{
        this.setState({
            valor: this.state.valor + 1
        })
    }
    componentDidMount(){
        // alert("empieza a recolectar MGs")
    }

    componentDidUpdate(){
        alert("Alquien ha puesto un MG, tienes "+ this.state.valor + " MGs")
    }



    render() {
        return (
            <>
                <h1>Tienes {this.state.valor} MG</h1>
                <button onClick={this.incrementarValor}>MG</button>
            </>

        )
    }
}

export default Contador;