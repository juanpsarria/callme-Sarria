import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//SE IMPORTAN LOS COMPONENTES NavBar E ItemListContainer PARA SER RENDERIZADOS POSTERIORMENTE
import NavBar from './components/header/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import './App.css';

//SE CREAR LA CLASS Display PARA RENDERIZAR LOS DIFERENTES COMPONENTES
const Display = () =>{
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:id' element={<ItemListContainer/>}/>
                <Route exact path='/product/:id' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default Display;
