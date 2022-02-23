import React from 'react';
import CardWidget from './CardWidget';
import './NavBar.css';
import {GiQueenCrown} from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';





export default function NavBar(){
    return (
        <div>
            <nav className='barraNavegacion' >
                <Link to={'/'}>
                    <div className='contenedorLogo'>
                        <GiQueenCrown fontSize="30px"/>
                    </div>
                    <h1 className='h1'>LUMINA</h1>
                </Link>
                <div className='contenedorLista'>
                    <ul className='lista'>
                        <li> <NavLink to={'/category/ropa'}> Ropa </NavLink> </li>
                        <li> <NavLink to={'/category/zapatillas'}> Zapatillas </NavLink> </li>
                        <li> <NavLink to={'/category/locales'}> Locales </NavLink> </li>
                        <li> <NavLink to={'/category/contacto'}> Contacto </NavLink> </li>
                        <li> <CardWidget /> </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}