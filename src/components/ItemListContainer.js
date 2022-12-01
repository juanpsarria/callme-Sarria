import React from "react";
import "./style.css";

//SE CREA COMPONENTE CON PROP GREETINGS, QUE SE IMPORTA EN App.js
const ItemListContainer = ({greetings}) =>{
    return(
    <>
    <h1 style={{textAlign: 'center', fontSize: '3em', color: '#01111d', backgroundColor: '#f5fff9', padding: '10'}}>{greetings}</h1>
    </>
    )
}

export default ItemListContainer