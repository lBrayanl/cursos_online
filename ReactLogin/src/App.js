import React, {useState} from 'react';
import { Formulario, Label, ContenerTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './pages/Formularios'; 
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './componentes/input';



const App = () => {
  const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
  const [nombre, cambiarNombre] = useState({campo: '', valido: null});
  const [password, cambiarPassword] = useState({campo: '', valido: null});
  const [password2, cambiarPassword2] = useState({campo: '', valido: null});
  const [correo, cambiarCorreo] = useState({campo: '', valido: null});
  const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  const validarPassword2 = () =>{
    if(password.campo.length > 0){
      if(password.campo !== password2.campo){
        cambiarPassword2((prevState) => {
            return {...prevState, valido: 'false'}
        });
      } else {
          cambiarPassword2((prevState) => {
            return {...prevState, valido: 'true'}
          });
        }
    }
      
  }

const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);

}

const onSubmit = (e) => {
    e.preventDefault();

    if(
        usuario.valido === 'true' &&
        nombre.valido === 'true' &&
        password.valido === 'true' &&
        password2.valido === 'true' &&
        correo.valido === 'true' &&
        telefono.valido === 'true' &&
        terminos
      ){
            cambiarFormularioValido(true);
            cambiarUsuario({campo: '', valido: ''});
            cambiarNombre({campo: '', valido: null});
            cambiarPassword({campo: '', valido: null});
            cambiarPassword2({campo: '', valido: 'null'});
            cambiarCorreo({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
            
          }else{
            cambiarFormularioValido(false);
          }
      }



return (
    <main>
      <Formulario action="" onSubmit={onSubmit} >
          <Input
            estado={usuario}
            cambiarEstado={cambiarUsuario}
            tipo="text"
            label="Usuario"
            placeholder="Introduce tu nombre"
            name="usuario"
            leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo"
            expresionRegular={expresiones.usuario}
          />

          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Introduce tu nombre"
            name="nombre1"
            leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo"
            expresionRegular={expresiones.nombre}
          />  

          <Input
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo="password"
            label="Contraseña"
            placeholder="Introduce una contraseña"
            name="password1"
            leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo"
            expresionRegular={expresiones.password}
          />
          
          <Input
            estado={password2}
            cambiarEstado={cambiarPassword2}
            tipo="password"
            label="Repetir contraseña"
            placeholder="Escribe la contraseña"
            name="password2"
            leyendaError="Ambas contraseñas deben coincidir"
            funcion={validarPassword2}
          />

          <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo"
            placeholder="Introduce tu correo"
            name="email"
            leyendaError="Correo invalido"
            expresionRegular={expresiones.correo}
          />
          
          <Input
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="text"
            label="Telefono"
            placeholder="Introduce tu telefono"
            name="telefono"
            leyendaError="Este campo solo debe tener numeros y maximo 10 numeros"
            expresionRegular={expresiones.telefono}
          />
          
        
        <ContenerTerminos>
          <Label>
            <input 
              type="checkbox" 
              name="terminos" 
              id="terminos" 
              checked={terminos}
              onChange={onChangeTerminos}
            />
              Acepto los Terminos y Condiciones
          </Label>  
        </ContenerTerminos>

          {formularioValido === false && <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
          </MensajeError>}

        <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
            {formularioValido === true && <MensajeExito>Formulario enviado exitosamente.</MensajeExito>}
        </ContenedorBotonCentrado>

      </Formulario>
    </main>
 );

}

export default App;