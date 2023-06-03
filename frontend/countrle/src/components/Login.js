import React, { useState, useContext } from "react";
import axios from "axios";
import "./Login.css";
import Modal from "./Modal";
import logo_login from "../assets/logo_login.png";
import cargando from "../assets/cargando.gif";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showModalError, setModalError] = useState(false);
  const [showModalCargando, setShowModalCargando] = useState(false);

  const api_url = process.env.REACT_APP_API_URL;
  const api_user = process.env.REACT_APP_API_USER;
  const api_pass = process.env.REACT_APP_API_PASS;

  const { setAuth } = useContext(AuthContext); // usa useContext para acceder a setAuth

  const handleCloseError = () => {
    setModalError(false);
    navigate("/login");
  };

  const handleCloseCargando = () => {
    setShowModalCargando(false);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authString = `${api_user}:${api_pass}`;
    const headers = {
      Authorization: `Basic ${btoa(authString)}`,
      "Content-Type": "application/json",
    };

    try {
      setShowModalCargando(true);
      const response = await axios.post(
        api_url + "user?username=" + username + "&password=" + password,
        {
          username,
          password,
        },
        { headers }
      );

      if (response.status === 200) {
        setShowModalCargando(false);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("usuarioActual", username);
        localStorage.setItem("isAuthenticated", "true"); // guardar la autenticación en el almacenamiento local
        setAuth(true);
        navigate("/juego");
      }
    } catch (error) {
      setShowModalCargando(false);
      console.error("Error:", error);
      setModalError(true);
    }
  };
  return (
    <div>
      <Modal show={showModalCargando} handleClose={handleCloseCargando}>
        <img className="cargando" src={cargando}></img>
        <h2>Iniciando sesión...</h2>
        <br></br>
      </Modal>
      <Modal show={showModalError} handleClose={handleCloseError}>
        <h2 className="errorApi">😬</h2>
        <h3>No se ha podido iniciar sesión</h3>
        <h4>Comprueba tus credenciales</h4>
        <br></br>
      </Modal>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div className="formulario">
            <form onSubmit={handleSubmit}>
              <img id="logo_login" src={logo_login} alt="Logo Countrle Login" />
              <br></br>
              <br></br>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  <i className="fa-solid fa-user"></i> Nombre de usuario
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  name="username" // agregar atributo name
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  <i className="fa-solid fa-lock"></i> Contraseña
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  name="password" // agregar atributo name
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center"></div>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                <i className="fa-solid fa-right-to-bracket"></i>&nbsp; Iniciar
                Sesión
              </button>

              <div className="text-center">
                <p>
                  ¿No estás registrado? <a href="/registro">Registrarse</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
