import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ajustes.css";

function Ajustes() {

  const navigate = useNavigate();
  const usuarioActual = localStorage.getItem('usuarioActual');

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div>
            <h1>Ajustes</h1>
            <h2>Hola {usuarioActual}</h2>
            <br></br>
            <button className="tipoJuego bAjustes btn-primary">
              <i className="fas fa-lock"></i>
              &nbsp; Cambiar contraseña
            </button>
            <br></br>
            <button 
              className="tipoJuego bAjustes btn-primary" 
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt"></i>
              &nbsp; Cerrar sesión
            </button>
            <br></br>
            <button className="tipoJuego bAjustes btn-danger">
              <i className="fas fa-delete-left"></i>
              &nbsp; Eliminar cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ajustes;
