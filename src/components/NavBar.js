import React from 'react';
import CardWidget from './CardWidget.js';
import './../NavBar.css';


export default function NavBar(){
    return (
        <div>
            <nav className='barraNavegacion' >
                <div className='contenedorLogo'>
                    <h1>LUMINA</h1>
                </div>
                <div className='contenedorLista'>
                    <ul className='lista'>
                        <li> <a href="#">Inicio</a> </li>
                        <li> <a href="#">Servicios</a> </li>
                        <li> <a href="#">Contacto</a> </li>
                        <li> <CardWidget/> </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}