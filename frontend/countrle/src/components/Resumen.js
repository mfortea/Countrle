import React from "react";
import "./Resumen.css";

const Resumen = () => {
  const juegoData = JSON.parse(localStorage.getItem("juegoData"));
  const tiempo = parseInt(juegoData.tiempoTranscurrido);
  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <h1>📝 Resumen de la partida</h1>
          <br></br>
          <h2>Juego "{juegoData.tipoJuego}"</h2>
          <h2>{juegoData.palabraObjetivo}</h2>
          <div>
            {juegoData.tableroResumen.map((fila, index) => (
              <div key={index}>{fila.join(" ")}</div>
            ))}
          </div>
          <br></br>
          <div className="tiempo">
            {tiempo < 60
              ? `Tiempo empleado: ${tiempo.toFixed(
                  0
                )} segundos`
              : `Tiempo empleado: ${Math.floor(tiempo / 60)} ${
                  Math.floor(tiempo / 60) === 1
                    ? "minuto"
                    : "minutos"
                } y ${(tiempo % 60)
                  .toFixed(0)
                  .padStart(2, "0")} segundos`}
          </div>
          <br></br><br></br>
          <a class="boton-ranking" href="/ranking">🏆 Ver el ranking</a>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
