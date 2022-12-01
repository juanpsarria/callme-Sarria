import React, {Component} from 'react';
//SE IMPORTAN LOS COMPONENTES NavBar E ItemListContainer PARA SER RENDERIZADOS POSTERIORMENTE
import NavBar from './components/NavBar.js';
import ItemlistContainer from './components/ItemListContainer'
import './App.css';

//SE CREAR LA CLASS Display PARA RENDERIZAR LOS DIFERENTES COMPONENTES
class Display extends Component{
    render(){
        return (
            <div>
                <NavBar/>
                <ItemlistContainer greetings="Bienvenid@s a call me!"  />
            </div>
        )
    }
};

export default Display
