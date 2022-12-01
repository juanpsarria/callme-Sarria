import React from "react";
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
                <img src={logo} className="app-logo" alt="logo"/>
            </div>
            <div>
                <ul className="nav-list">
                    <li><a href="">CELULARES</a></li>
                    <li><a href="">TABLETS</a></li>
                    <li><a href="">ACCESORIOS</a></li>
                </ul>
            </div>
            <div className="cart-widget-container">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar
