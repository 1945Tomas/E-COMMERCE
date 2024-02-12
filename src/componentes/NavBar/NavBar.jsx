import React from "react";
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
//NavLink nos crea la clase "active", la cual podemos modificar con css.

const NavBar = ()=>{


    return(
        <div className='nav'>
        
            <Link to={'/'}>
            <section className="logo">
            <img src='../public/logo.png' alt="logo" />
            <h2>BUCÉFALO </h2>
            </section>
            </Link>
        
        <div className='anclas'>
        <ul>
            <li>
                <NavLink to={'/'}>Inicio</NavLink>
            </li>
            <li>
                <NavLink to={'/categoria/Fuerza'}>Fuerza</NavLink>
            </li>
            <li>
                <NavLink to={'/categoria/Cardio'}>Cardio</NavLink>
            </li>
        </ul>
        </div>
            <CartWidget/>
        </div>
    )

}

export default  NavBar