import React from 'react';
import CardWidget from './CardWidget';
import './NavBar.css';
import {GiQueenCrown} from 'react-icons/gi';





export default function NavBar(){
    return (
        <div>
            <nav className='barraNavegacion' >
                <div className='contenedorLogo'>
                    <GiQueenCrown fontSize="30px"/>
                </div>
                <h1>LUMINA</h1>
                <div className='contenedorLista'>
                    <ul className='lista'>
                        <li> <a href="#">Inicio</a> </li>
                        <li> <a href="#">Servicios</a> </li>
                        <li> <a href="#">Contacto</a> </li>
                        <li> <CardWidget /> </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}