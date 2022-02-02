import React from "react";
import './../CardWidget.css';
import ImagenCarrito from './../imagenes/carritoCompras.jpg';



export default function CardWidget () {
    return (
        <div className="imgContainer">
            <button><img src={ImagenCarrito} alt="carrito logo" />
            <p>2</p></button>
        </div>
    )
}