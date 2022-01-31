import React from 'react';
import CardWidget from './CardWidget';
import ItemListContainer from './ItemListContainer';
import FotoCarrito from './imagenes/carrito.svg';


export default function NavBar(){
    return (
        <div>
            <nav className='barraNavegacion' >
                <div className='contenedorLogo'>
                    <h2>LUMINA</h2>
                </div>
                <div className='contenedorLista'>
                    <ul className='lista'>
                        <li> <a href="#">Inicio</a> </li>
                        <li> <a href="#">Servicios</a> </li>
                        <li> <a href="#">Contacto</a> </li>
                    </ul>
                </div>
                <CardWidget imgSrc = {FotoCarrito} />
            </nav>
            <ItemListContainer />
        </div>
    )
}