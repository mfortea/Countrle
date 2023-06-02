import React, { useState } from "react";
import "./Registro.css";
import Modal from "./Modal";
import cargando from "../assets/cargando.gif";
import { useNavigate } from "react-router-dom";
import logo_login from "../assets/logo_login.png";

const Registro = () => {
  const api_url = process.env.REACT_APP_API_URL;
  const clave = process.env.REACT_APP_SECRET_KEY;
  const [showModalError, setModalError] = useState(false);
  const [showModalCargando, setShowModalCargando] = useState(false);
  const navigate = useNavigate();

  // Estado para cada campo de entrada
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Controladores de eventos para manejar los cambios en los campos de entrada
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRepeatPasswordChange = (event) =>
    setRepeatPassword(event.target.value);

  const handleCloseError = () => {
    setModalError(false);
    navigate("/");
  };

  // Manejador de envío de formularios
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Comprobación de que las contraseñas coinciden
    if (password !== repeatPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch(api_url + "users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "secret-key": clave,
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error("Respuesta no OK");
        setModalError(true);
      }

      alert("Usuario registrado con éxito");
    } catch (error) {
      console.error("Error:", error);
      console.log("Error al registrar el usuario");
      setModalError(true);
    }
  };

  return (
    <div>
      <Modal show={showModalCargando}>
        <img className="cargando" src={cargando}></img>
        <br></br>
        <br></br>
      </Modal>
      <Modal show={showModalError} handleClose={handleCloseError}>
        <h2 className="errorApi">Error</h2>
        <h2>🫣 Ups!</h2>
        <h3>No hemos podido registrar el usuario</h3>
        <p className="detalles">Inténtalo de nuevo más tarde</p>
      </Modal>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div className="formulario">
            <form>
              <h1>Nueva cuenta</h1>
              <br></br>
              <br></br>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  <i class="fa-solid fa-envelope"></i>
                  &nbsp; Introduce tu correo electrónico
                </label>
                <input type="email" id="email" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="username">
                <i class="fa-solid fa-user"></i>
                  &nbsp; Introduce un nombre de usuario
                </label>
                <input type="text" id="username" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="clave1">
                <i class="fa-solid fa-lock"></i>
                  &nbsp; Introduce una contraseña
                </label>
                <input type="password" id="clave1" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="clave2">
                  Repite la contraseña
                </label>
                <input type="password" id="clave2" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
              <i class="fa-solid fa-pen-to-square"></i>
              &nbsp; Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
