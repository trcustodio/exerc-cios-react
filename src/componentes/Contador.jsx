import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        // this.state.numero = this.state.numero + 1
    }
    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }
    
    alterarNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca })
    }

    render() {
        return (
            <div>
                <div> Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
            </div>

        )
    }
}

  // Solução 01 - Function Bind() no construtor.
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

//Solução 02 - ArrowFunction no onClick
//<button onClick={() => this.maisUm()}>Incrementar</button>

//Solução 03 - Transformar em ArrowFunction
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }