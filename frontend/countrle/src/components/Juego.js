import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import sonidoConffeti from "../assets/sonidoConffeti.mp3";
import "./Juego.css";
import logo from "../logo.png";
import Modal from "./Modal";
import Resumen from "./Resumen";

const Juego = () => {
  const navigate = useNavigate();
  const [palabra, setPalabra] = useState("");
  const [tipoJuego, setTipoJuego] = useState("");
  const palabraObjetivo = palabra.toUpperCase();
  const [intento, setIntento] = useState(Array(5).fill(""));
  const [intentos, setIntentos] = useState(
    Array(6).fill(Array(5).fill({ letra: "", color: "" }))
  );
  const [indice, setIndice] = useState(0);
  const [ganador, setGanador] = useState(false);
  const [letrasUsadas, setLetrasUsadas] = useState({});
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [tiempoInicio, setTiempoInicio] = useState(null);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const tecladoQWERTY = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
  const [showModalLose, setShowModalLose] = useState(false);
  const [showModalWin, setShowModalWin] = useState(false);
  const [showModalTipoJuego, setShowModalTipoJuego] = useState(true);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const [tableroResumen, setTableroResumen] = useState(
    Array(6).fill(Array(5).fill("⬜️"))
  );

  const datosResumen = () => {
    localStorage.setItem(
      "juegoData",
      JSON.stringify({
        palabraObjetivo,
        tipoJuego,
        tiempoTranscurrido,
        tableroResumen,
      })
    );
  };

  const handleCloseLose = () => {
    setShowModalLose(false);
    navigate("/resumen");
    datosResumen();
  };

  const handleCloseWin = () => {
    setShowModalWin(false);
    navigate("/resumen");
    datosResumen();
  };

  const handleCloseTipoJuego = () => {
    setShowModalWin(false);
    navigate("/");
  };

  const palabra_dia = () => {
    setPalabra("mango");
    setTipoJuego("Palabra del día");
    setShowModalTipoJuego(false);
    setTiempoInicio(Date.now());
  };

  const palabra_aleatoria = () => {
    setPalabra("tigre");
    setTipoJuego("Palabra Aleatoria");
    setShowModalTipoJuego(false);
    setTiempoInicio(Date.now());
  };

  const contarLetras = (palabra) => {
    const conteo = {};
    palabra.forEach((letra) => {
      if (!conteo[letra]) {
        conteo[letra] = 1;
      } else {
        conteo[letra] += 1;
      }
    });
    return conteo;
  };

  useEffect(() => {
    if (ganador) {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Reproduce el sonido sólo si el navegador no es Safari.
      if (!isSafari) {
        const audio = new Audio(sonidoConffeti);
        audio.onloadeddata = () => {
          audio.play();
        };
      }
    }
  }, [ganador]);

  const manejarClick = (letra) => {
    if (intento.indexOf("") === -1 && indice < 6) {
      if (indice === 0) {
        setTiempoInicio(Date.now());
      }
    }
    if (intento.indexOf("") !== -1) {
      let nuevoIntento = [...intento];
      nuevoIntento[intento.indexOf("")] = letra;
      setIndiceActivo(indiceActivo);
      setIntento(nuevoIntento);
      let nuevosIntentos = [...intentos];
      nuevosIntentos[indice] = nuevoIntento.map((letra) => ({
        letra: letra,
        color: "",
      }));
      setIntentos(nuevosIntentos);
      setIndiceActivo(nuevoIntento.indexOf(""));
    }
  };

  const comprobar = () => {
    if (intento.indexOf("") === -1 && indice < 6) {
      const conteoObjetivo = contarLetras(palabraObjetivo.split(""));
      const conteoIntento = contarLetras(intento);

      const nuevoIntento = intento.map((letra, i) => {
        let color = "";
        if (letra === palabraObjetivo[i]) {
          color = "verde";
        } else if (
          palabraObjetivo.includes(letra) &&
          (!conteoIntento[letra] ||
            conteoIntento[letra] <= conteoObjetivo[letra])
        ) {
          color = "amarillo";
          conteoIntento[letra] -= 1;
        } else {
          color = "gris";
        }

        return { letra: letra, color: color };
      });

      let nuevosIntentos = [...intentos];
      nuevosIntentos[indice] = nuevoIntento;

      setIntentos(nuevosIntentos);

      // Actualizamos los colores de las letras en el teclado
      const letrasUsadasActuales = { ...letrasUsadas };
      nuevoIntento.forEach((item) => {
        letrasUsadasActuales[item.letra] = item.color;
      });
      setLetrasUsadas(letrasUsadasActuales);

      if (nuevoIntento.every((item) => item.color === "verde")) {
        setGanador(true);
        const tiempoActual = (Date.now() - tiempoInicio) / 1000;
        setShowModalWin(true);
      } else if (indice < 5) {
        setIndice(indice + 1);
        setIntento(Array(5).fill(""));
        setIndiceActivo(0);
      } else {
        setShowModalLose(true);
      }

      // Actualizamos el tablero de resumen con los emojis
      const tableroEmoji = nuevoIntento.map((item) => {
        if (item.color === "verde") {
          return "🟩";
        } else if (item.color === "amarillo") {
          return "🟨";
        } else {
          return "⬜️";
        }
      });

      let nuevoTableroResumen = [...tableroResumen];
      nuevoTableroResumen[indice] = tableroEmoji;
      setTableroResumen(nuevoTableroResumen);
    }
  };

  useEffect(() => {
    if (tiempoInicio) {
      const interval = setInterval(() => {
        const tiempoActual = ((Date.now() - tiempoInicio) / 1000).toFixed(2);
        setTiempoTranscurrido(tiempoActual);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [tiempoInicio]);

  const borrar = () => {
    let nuevoIntento = [...intento];
    const ultimoIndiceNoVacio = nuevoIntento.reduce(
      (acc, cur, i) => (cur !== "" ? i : acc),
      -1
    );
    if (ultimoIndiceNoVacio !== -1) {
      nuevoIntento[ultimoIndiceNoVacio] = "";
      setIntento(nuevoIntento);

      // Mover el índice activo a la última letra no vacía
      const indiceActividadAjustado = ultimoIndiceNoVacio;
      setIndiceActivo(
        indiceActividadAjustado >= 0 ? indiceActividadAjustado : 0
      );

      let nuevosIntentos = [...intentos];
      nuevosIntentos[indice] = nuevoIntento.map((letra) => ({
        letra: letra,
        color: "",
      }));
      setIntentos(nuevosIntentos); // Actualizamos la matriz de intentos
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const letra = event.key.toUpperCase();
      if (tecladoQWERTY.includes(letra)) {
        manejarClick(letra);
      } else if (event.key === "Enter") {
        comprobar();
      } else if (event.key === "Backspace") {
        borrar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [manejarClick, comprobar, borrar]);

  return (
    <div>
      <Modal show={showModalTipoJuego} handleClose={handleCloseTipoJuego}>
        <img id="logo-acercade" src={logo} alt="Logo" />
        <h2>Selecciona el tipo de juego:</h2>
        <button class="tipoJuego btn-primary" onClick={palabra_dia}>
          Palabra del día ☀️
        </button>
        <button class="tipoJuego btn-primary" onClick={palabra_aleatoria}>
          Palabra aleatoria 🎲
        </button>
        <br></br> <br></br>
      </Modal>
      <Modal show={showModalLose} handleClose={handleCloseLose}>
        <h1>😭</h1>
        <p>¡Has perdido!</p>
        <p>La palabra correcta era "{palabraObjetivo}"</p>
      </Modal>

      <Modal show={showModalWin} handleClose={handleCloseWin}>
        <h1>🥳</h1>
        <p>¡Has acertado! ¡Felicidades!</p>
      </Modal>
      <br></br>
      <div class="container animacion-carga">
        <div class="jumbotron">
          <div className="juego">
            <h2>{tipoJuego}</h2>
            <div className="tablero">
              {intentos.map((intento, index) => (
                <div key={index} className="fila">
                  {intento.map((item, i) => (
                    <div
                      key={i}
                      className={`casilla ${item.color} ${
                        index === indice && i === indiceActivo ? "activo" : ""
                      }`}
                    >
                      {item.letra}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="teclado">
              {tecladoQWERTY.split("").map((letra, index) => (
                <button
                  key={index}
                  className={letrasUsadas[letra] || ""}
                  onClick={() => manejarClick(letra)}
                >
                  {letra}
                </button>
              ))}
            </div>
            <div className="botones">
              <button id="bComprobar" onClick={comprobar}>
                Comprobar ✅
              </button>
              <button id="bBorrar" onClick={borrar}>
                Borrar 🗑️
              </button>
            </div>
            <div class="tiempo">
              🕒 Tiempo transcurrido: {Math.floor(tiempoTranscurrido / 60)}:
              {(tiempoTranscurrido % 60).toFixed(0).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juego;
