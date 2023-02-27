import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';

function Routes() {
  return (
    <BrowserRouter>
        <Route exact path="/"component = {Login }/>
        <Route exact path="/menu"component = {Menu }/>
    </BrowserRouter>
  );
}

export default Routes;
