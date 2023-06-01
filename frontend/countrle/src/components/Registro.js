import React from "react";
import "./Login.css";
import logo_login from "../assets/logo_login.png";

const Login = () => {
  return (
    <div>
      <br></br>
      <div class="container animacion-carga">
        <div class="jumbotron">
          <div class="formulario">
            <form>
              <h1>Nueva cuenta</h1>
              <br></br>
              <br></br>
              <div class="form-outline mb-4">
                <label class="form-label" for="email">
                  Introduce tu correo electrónico
                </label>
                <input type="email" id="email" class="form-control" />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="clave1">
                  Introduce una contraseña
                </label>
                <input type="password" id="clave1" class="form-control" />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="clave2">
                  Repite la contraseña
                </label>
                <input type="password" id="clave2" class="form-control" />
              </div>
              <button type="button" class="btn btn-primary btn-block mb-4">
                Registrarse
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
