import React from 'react';
import { Navbar } from 'react-bootstrap';

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
            </nav>
        </div>
    )
}