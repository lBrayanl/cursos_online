import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuPrincipal from '../pages/MenuPrincipal';

class Menu extends Component {
   

    render() {
        
        return(
            <div className='container'>
                <MenuPrincipal/>
            <div class="container px-4 px-lg-5">
            
                <div class="row gx-4 gx-lg-5 align-items-center my-5">
                    <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." /></div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Curso Monitorización</h1>
                        <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                        <a class="btn btn-primary" href="#!">Inscribirse</a>
                    </div>
                </div>
            
            
            <footer class="py-5 bg-dark">
                <div class="container px-4 px-lg-5"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
            </footer>
            </div>
        </div>
        )
        
    }
}

export default Menu;