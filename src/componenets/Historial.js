import React, { Component } from "react";

class Historial extends Component {
    render() {
        return(
        <div className="recordatorio">
            <h3> Eleccion anterior: {this.props.eleccionAnterior}</h3>
            <h4> Historial de elecciones elegidas: </h4>
            <ul>{this.props.listaElecciones}</ul>
        </div>
        );
    }
}


export default Historial;