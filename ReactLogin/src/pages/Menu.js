import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../pages/Cards';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('primer_apellido', {path: "/"});
        cookies.remove('segundo_apellido', {path: "/"});
        cookies.remove('primer_nombre', {path: "/"});
        cookies.remove('segundo_nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('primer_apellido: '+cookies.get('primer_apellido'));
        console.log('segundo_apellido: '+cookies.get('segundo_apellido'));
        console.log('primer_nombre: '+cookies.get('primer_nombre'));
        console.log('segundo_nombre: '+cookies.get('segundo_nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <div className=''>
                
                <nav class="navbar navbar-expand-sm bg-light">

                <div class="container-fluid">
                    
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <h4>Curso Online</h4>
                    </li>
                   </ul>
                   
                </div>
                <h6>{cookies.get('primer_apellido')}, {cookies.get('primer_nombre')}</h6>
                 <ul>
                        <button className='cerrarSesion' onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </ul>
               
                

                </nav>
                <br />
                <Cards/>
            </div>
        );
    }
}

export default Menu;