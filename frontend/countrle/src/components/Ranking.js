import React from "react";
import "./Ranking.css";

const Ranking = () => {
  // Aquí irán tus datos reales. Estos son solo de prueba.
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
      <div class="container animacion-carga">
        <div class="jumbotron">
          <div className="estadisticas">
            <div className="usuario-actual">
              <h1>👤 {usuarioActual.nombre}</h1>
              <h3>Puntuación: <strong class="puntos">{usuarioActual.puntuacion} puntos</strong></h3>
              <h4>Estás el {usuarioActual.posicion}º en la tabla</h4>
            </div>
            <div className="ranking">
              <h2>🏆 Ranking Global</h2>
              <div className="contenedor_ranking">
                {ranking.slice(0, 10).map((usuario, index) => (
                  <div class={`fila_ranking posicion_${index + 1}`} key={index}>
                    <span class="posicion">{index + 1}º</span>
                    <div className="datos_ranking">
                      <p>{usuario.nombre} - {usuario.puntuacion} puntos</p>
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
