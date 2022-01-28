import React from 'react';
import { Navbar } from 'react-bootstrap';

const divStyle = {
    backgroundColor: 'cornflowerblue',
    whidth : '100%',
    heigth : 'auto',

}
const links = {
    backgroundColor : 'cornflowerblue',
    width : '100%',
    heigth : 'auto',
    float : 'inline-end',
}

const lista = {
    display: 'flex',
    justifyContent: 'space-around',
    float: 'inline-end',
    width: '40%',

}

export default function NavBar(){
    return (
        <div style={divStyle}>
            <nav className='barraNavegacion' >
                <div className='contenedorLogo' style={links}>
                <h2>LUMINA</h2>
                    <ul style={lista}>
                        <li> <a href="#">Inicio</a> </li>
                        <li> <a href="#">Servicios</a> </li>
                        <li> <a href="#">Contacto</a> </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}