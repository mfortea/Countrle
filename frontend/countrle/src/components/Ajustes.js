import React from "react";
import "./Ajustes.css";
function Ajustes() {
  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div>
            <h1>Ajustes</h1>
            <h2>Hola manolo69</h2>
            <h4>Tu puntuación es XX puntos</h4>
            <button className="tipoJuego bAjustes btn-primary">
              <i className="fas fa-lock"></i>
              &nbsp; Cambiar contraseña
            </button>
            <br></br>
            <button className="tipoJuego bAjustes btn-primary">
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
