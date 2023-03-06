import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';


const cookies = new Cookies();

class MenuPrincipal extends Component {
    iniciarSesion=()=>{
        window.location.href='./login';
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
                   <ul>
                        <a class="" href="./">Inicio</a>

                   </ul>
                </div>

                 <ul>
                        <button className='iniciarSesion' onClick={()=>this.iniciarSesion()}>Iniciar Sesión</button>
                </ul>
    
                </nav>
            </div>
        );
    }
}

export default MenuPrincipal;