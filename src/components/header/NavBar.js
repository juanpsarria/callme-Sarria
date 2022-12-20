import React from "react";
import { Link, NavLink } from "react-router-dom";
//SE IMPORTA LOGO
import logo from "./img/logo.png";
//SE IMPORTA COMPONENTE
import CartWidget from "./CartWidget";
import "./style.css";


//SE CREA COMPONENTE NavBar, IMPORTADO EN App.js
const NavBar = () => {
    return (
        <header className="app-header">
            <div>
                <Link to='/'><img src={logo} className="app-logo" alt="logo"/></Link>
            </div>
            <div>
                <ul className="nav-list">
                    <li><NavLink to='/category/cellphone'>CELULARES</NavLink></li>
                    <li><NavLink to='/category/tablet'>TABLETS</NavLink></li>
                    <li><NavLink to='/category/wearable'>ACCESORIOS</NavLink></li>
                </ul>
            </div>
            <div className="cart-widget-container">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar
