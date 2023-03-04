import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async() =>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=> {
           return response.data;
        } )
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('primer_apellido', respuesta.primer_apellido, {path: "/"});
                cookies.set('segundo_apellido', respuesta.segundo_apellido, {path: "/"});
                cookies.set('primer_nombre', respuesta.primer_nombre, {path: "/"});
                cookies.set('segundo_nombre', respuesta.segundo_nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                //alert(`Bienvenido ${respuesta.primer_apellido} ${respuesta.segundo_apellido} ${respuesta.primer_nombre} ${respuesta.segundo_nombre}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
            alert('No está conectado al Api de usuarios');
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
        <header className="head-form">
            <h2>Log In Cursos Online</h2>
            <p>Ingrese su usuario y contraseña!</p>
        </header>
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contrasena: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
                
            <br />
           
            <button className='iniciarSesion' onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
          <div className="other">
                <button className="btn submits frgt-pass">Forgot Password</button>
                <button className="btn submits sign-up">Sign Up 
                <i className="fa fa-user-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
      </div>
        );
        //prueba Nicolas
    }
}

export default Login;