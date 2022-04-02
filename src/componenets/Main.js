import data from "./data.json";
import React, { Component } from "react";
import Eleccion from "./Eleccion";
import Historial from "./Historial";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state ={
            contador: 0,
            historial:[],
            eleccionAnterior: ""
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.contador !== prevState.contador) {
            this.state.historial.push(this.state.eleccionAnterior);
        }
    }

    manejadorClick = (e) => {
        const eleccionActual = e.target.id;
        if (this.state.contador >= 7) {
        alert("Fin.");
        } else if (eleccionActual === "A" && this.state.eleccionAnterior !== "A") {
            this.setState({
                contador: this.state.contador + 1,
                eleccionAnterior: "A",
            });
        } else if (eleccionActual === "A" && this.state.eleccionAnterior === "A") {
            this.setState({
                contador: this.state.contador + 2,
            });
        } else if (eleccionActual === "B" && this.state.eleccionAnterior === "A") {
            this.setState({
                contador: this.state.contador + 3,
                eleccionAnterior: "B",
            });
        } else if (eleccionActual === "B") {
            this.setState({
                contador: this.state.contador + 2,
                eleccionAnterior: "B",
            });
        }
    };

    render(){
        return(
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Eleccion 
                    manejadorClick={this.manejadorClick}
                    opcionA ={data[this.state.contador].opciones.a}
                    opcionB = {data[this.state.contador].opciones.b}
                    />
                <Historial
                    eleccionAnterior={this.state.eleccionAnterior}
                    listaElecciones={this.state.historial.map(
                        (eleccion,index) => (
                            <li key={index}>{eleccion}</li>
                        ),
                        data[this.state.contador].id
                    )}
                />
            </div>
        );
    }
}

export default Main;