import React from "react";
import { Link } from "react-router-dom";
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
                    <li><a>CELULARES</a></li>
                    <li><a>TABLETS</a></li>
                    <li><a>ACCESORIOS</a></li>
                </ul>
            </div>
            <div className="cart-widget-container">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar
