import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from '../App';
import Inicio from '../pages/Inicio';
import Menu from '../pages/Menu';
import MenuPrincipal from '../pages/MenuPrincipal';
import Login from '../pages/Login';
import Curso from '../pages/Curso';

function Routes() {
  return (
    <BrowserRouter>
        <Route exact path="/"component = {Inicio }/>
        <Route exact path="/menu"component = {Menu }/>
        <Route exact path="/formulario"component= { App }/>
        <Route exact path="/menuPrincipal"component = {MenuPrincipal }/>
        <Route exact path="/login"component = {Login }/>
        <Route exact path="/curso"component = {Curso }/>
    </BrowserRouter>
  );
}

export default Routes;
