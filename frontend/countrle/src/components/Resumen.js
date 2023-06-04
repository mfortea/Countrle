import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import axios from "axios";
import "./Resumen.css";
import LoadingGif from "../assets/cargando.gif";

const Resumen = () => {
  const juegoData = JSON.parse(localStorage.getItem("juegoData"));
  const tiempo = parseInt(juegoData.tiempoTranscurrido);
  const pistaUsada = juegoData.pistaUsada;
  const usuarioActual = localStorage.getItem("usuarioActual");
  const [isLoading, setIsLoading] = useState(true);

  const obtenerPuntos = async (usuarioActual) => {
    try {
      const response = await axios.get(
        `https://countrle-api.onrender.com/api/score?username=${usuarioActual}`
      );
      return response.data.score;
    } catch (error) {
      console.error("Error al obtener la puntuación:", error);
      return 0;
    }
  };

  const actualizarPuntos = async (usuarioActual, newScore) => {
    try {
      const response = await axios.put(
        `https://countrle-api.onrender.com/api/score?username=${usuarioActual}&score=${newScore}&time=0&totalWords=0`
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar la puntuación:", error);
    }
  };

  const actualizarEstadisticas = async () => {
    const puntuacionActual = await obtenerPuntos(usuarioActual);
    const nuevaPuntuacion = puntuacionActual + juegoData.puntos;
    await actualizarPuntos(usuarioActual, nuevaPuntuacion);
    localStorage.setItem("puntosActuales", nuevaPuntuacion);
    setIsLoading(false);
  };

  useEffect(() => {
    actualizarEstadisticas();
  }, []);

  useEffect(() => {
    if (juegoData.ganador && isLoading==false) {
      confetti({
        particleCount: 220,
        spread: 150,
        origin: { x: 0.5 },
      });
    }
  });

  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
      {isLoading ? (
          <div className="jumbotron">
            <img className="cargandoRanking" src={LoadingGif} alt="Cargando..." />
          </div>
        ) : (
          <div className="jumbotron">
          <h1>📝 Resumen de la partida</h1>
          <br></br>
          <h2>Juego "{juegoData.tipoJuego}"</h2>
          <h3>
            {juegoData.ganador ? "¡Enhorabuena! 🎉" : "Sigue intentándolo 💪"}
          </h3>
          <br></br>
          <h2>{juegoData.palabraObjetivo}</h2>
          <div>
            {juegoData.tableroResumen.map((fila, index) => (
              <div key={index}>{fila.join(" ")}</div>
            ))}
          </div>
          <br></br>
          <br></br>
          <h3>
            Has conseguido{" "}
            <strong className="puntos">{juegoData.puntos} puntos </strong> en
            esta partida
          </h3>
          <h3>
            <i>
              {pistaUsada ? "Has usado la pista 😒" : "No has usado pistas 👍 "}
            </i>
          </h3>
          <br></br>
          <div className="tiempo">
            <i className="fa-sharp fa-solid fa-clock"></i>&nbsp;
            {tiempo < 60
              ? ` Tiempo empleado: ${tiempo.toFixed(0)} segundos`
              : ` Tiempo empleado: ${Math.floor(tiempo / 60)} ${
                  Math.floor(tiempo / 60) === 1 ? "minuto" : "minutos"
                } y ${(tiempo % 60).toFixed(0).padStart(2, "0")} segundos`}
          </div>
          <br></br>
          <div className="contenedor_ranking">
            <a className="boton-nuevaP" href="/juego">
              {" "}
              <i className="fa-solid fa-gamepad"></i>
              &nbsp;Nueva partida
            </a>
            <a className="boton-ranking" href="/ranking">
              {" "}
              <i className="fa-solid fa-trophy"></i>
              &nbsp;Ver el ranking
            </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Resumen;
