import React, { useState, useEffect } from "react";
import "./Registro.css";
import Modal from "./Modal";
import cargando from "../assets/cargando.gif";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo_login from "../assets/logo_login.png";

const Registro = () => {
  const api_url = process.env.REACT_APP_API_URL;
  const clave = process.env.REACT_APP_SECRET_KEY;
  const api_user = process.env.REACT_APP_API_USER;
  const api_pass = process.env.REACT_APP_API_PASS;
  const [showModalError, setModalError] = useState(false);
  const [showModalCargando, setShowModalCargando] = useState(false);
  const [showModalRegistrado, setShowModalRegistrado] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  useEffect(() => {
    const validateForm = async () => {
      let isError = false;
      setUsernameError("");
      setEmailError("");
      setPasswordError("");
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("El formato no es correcto");
        isError = true;
      } else {
        isError = false;
      }

      if (password.length < 8) {
        setPasswordError("Contraseña débil");
        isError = true;
      }

      if (isError) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    };

    validateForm();
  }, [username, email, password]);

  const handleCloseError = () => {
    setModalError(false);
    navigate("/");
  };

  const handleCloseRegistrado = () => {
    setModalError(false);
    navigate("/juego");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);

    const authString = `${api_user}:${api_pass}`;
    const headers = {
      Authorization: `Basic ${btoa(authString)}`,
      "Content-Type": "multipart/form-data",
    };

    setShowModalCargando(true);

    try {
      const response = await axios.post(api_url + "users", formData, {
        headers,
      });
      if (response.status === 201) {
        setShowModalCargando(false);
        setShowModalRegistrado(true);
      } else {
        setShowModalCargando(false);
        setModalError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowModalCargando(false);
      setModalError(true);
    }
  };

  return (
    <div>
      <Modal show={showModalRegistrado} handleClose={handleCloseRegistrado}>
        <h2 id="exito">
          <i className="fa-solid fa-circle-check"></i> Usuario Registrado
        </h2>
        <p>Se ha registrado correctamente tu usuario "{username}"</p>
      </Modal>
      <Modal show={showModalCargando}>
        <img className="cargando" src={cargando}></img>
        <br></br>
        <br></br>
      </Modal>
      <Modal show={showModalError} handleClose={handleCloseError}>
        <h2 className="errorApi">Error</h2>
        <h2>🫣 Ups!</h2>
        <h3>No hemos podido registrar el usuario</h3>
        <h4>Inténtalo de nuevo más tarde o prueba con otras credenciales</h4>
        <br></br>
      </Modal>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div className="formulario">
            <form onSubmit={handleFormSubmit}>
              <h1>Nueva cuenta</h1>
              <br></br>
              <br></br>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; Introduce tu correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className="alert alert-error">{emailError}</div>
                )}
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="username">
                  <i className="fa-solid fa-user"></i>
                  &nbsp; Introduce un nombre de usuario
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError && (
                  <div className="alert alert-error">{usernameError}</div>
                )}
                {!usernameError && usernameAvailable && (
                  <div className="alert alert-ok alert-success">
                    Nombre de usuario disponible
                  </div>
                )}
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="clave1">
                  <i className="fa-solid fa-lock"></i>
                  &nbsp; Introduce una contraseña
                </label>
                <input
                  type="password"
                  id="clave1"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <div className="alert alert-error">{passwordError}</div>
                )}
              </div>
              <button
                id="registrarse"
                type="submit"
                className="btn btn-primary btn-block mb-4"
                disabled={isDisabled}
              >
                <i className="fa-solid fa-pen-to-square"></i>
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
