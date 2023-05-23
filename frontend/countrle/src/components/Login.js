import React from 'react';
import './Login.css';
import logo_login from '../assets/logo_login.png';

const Login = () => {


  return (
    <div>
      <br></br>
      <div class="container animacion-carga">
        <div class="jumbotron">
          <div class="formulario">
            <form>
            <img id="logo_login" src={logo_login} alt="Logo Countrle Login" />
             <br></br><br></br>
             <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">Correo electrónico</label>
                <input type="email" id="form2Example1" class="form-control" />
              </div>


              <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">Contraseña</label>
                <input type="password" id="form2Example2" class="form-control" />
              </div>


              <div class="row mb-4">
                <div class="col d-flex justify-content-center">

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> Recuérdame </label>
                  </div>
                </div>

                <div class="col">

                  <a href="#!">He olvidado mi contraseña</a>
                </div>
              </div>


              <button type="button" class="btn btn-primary btn-block mb-4">Iniciar Sesión</button>


              <div class="text-center">
                <p>¿No estás registrado? <a href="#!">Registrarse</a></p>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>

  );
};

export default Login;
