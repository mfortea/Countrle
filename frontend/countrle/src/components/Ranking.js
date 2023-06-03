import React, { useContext, useRef } from "react";
import "./Ranking.css";
import { AuthContext } from "../components/AuthContext";

const Ranking = () => {
  const { auth } = useContext(AuthContext);
  const usuarioActual = { nombre: "Usuario6", puntuacion: 150, posicion: 6 };
  const ranking = [
    { nombre: "Usuario1", puntuacion: 1000 },
    { nombre: "Usuario2", puntuacion: 900 },
    { nombre: "Usuario3", puntuacion: 800 },
    { nombre: "Usuario4", puntuacion: 700 },
    { nombre: "Usuario5", puntuacion: 600 },
    { nombre: "Usuario6", puntuacion: 500 },
    { nombre: "Usuario7", puntuacion: 400 },
    { nombre: "Usuario8", puntuacion: 300 },
    { nombre: "Usuario9", puntuacion: 200 },
    { nombre: "Usuario10", puntuacion: 100 },
  ];

  const formatTime = (segundos) => {
    if (segundos < 60) {
      return `${segundos} segundos`;
    }

    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos} min ${segundosRestantes} seg`;
  };

  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div className="estadisticas">
            {auth && (
              <>
                <div className="usuario-actual">
                  <h1>{usuarioActual.nombre}</h1>
                  <h3>
                    Puntuación:{" "}
                    <strong className="puntos">
                      {usuarioActual.puntuacion} puntos
                    </strong>
                  </h3>
                  <h4>Estás el {usuarioActual.posicion}º en la tabla</h4>
                </div>
              </>
            )}
            <div className="ranking">
              <br></br>
              <h2>
                <i className="fa-solid fa-trophy"></i>
                &nbsp; Ranking Global
              </h2>
              <br></br>
              <div className="contenedor_ranking">
                {ranking.slice(0, 10).map((usuario, index) => (
                  <div
                    className={`fila_ranking posicion_${index + 1}`}
                    key={index}
                  >
                    <span className="posicion">{index + 1}º</span>
                    <div className="datos_ranking">
                      <p>
                        {usuario.nombre} - {usuario.puntuacion} puntos
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
