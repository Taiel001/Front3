import React from "react";

const Card = ({cliente}) => {
    return (
        <div>
            <h2 style={{color: 'green'}}>Genial, {cliente.nombre}!</h2>
            <h3>En 30 minutos te llega el pedido a {cliente.direccion}</h3>
        </div>
      );
}

export default Card;