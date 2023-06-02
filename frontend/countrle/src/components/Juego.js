import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Juego.css";
import logo from "../logo.png";
import cargando from "../assets/cargando.gif";
import Modal from "./Modal";
import Resumen from "./Resumen";

const Juego = () => {
  const navigate = useNavigate();
  const [palabra, setPalabra] = useState("");
  const [mostrarPista, setMostrarPista] = useState(false);
  const [bandera, setBandera] = useState("");
  const [pistaUsada, setPistaUsada] = useState(false);
  const [puntos, setPuntos] = useState(0);
  const [tipoJuego, setTipoJuego] = useState("");
  const palabraObjetivo = palabra.toUpperCase();
  const [intento, setIntento] = useState(Array(5).fill(""));
  const [intentos, setIntentos] = useState(
    Array(6).fill(Array(5).fill({ letra: "", color: "" }))
  );
  const api_url = process.env.REACT_APP_API_URL;
  const [indice, setIndice] = useState(0);
  const [ganador, setGanador] = useState(false);
  const [letrasUsadas, setLetrasUsadas] = useState({});
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [tiempoInicio, setTiempoInicio] = useState(null);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [penalizacionPorPistaAplicada, setPenalizacionPorPistaAplicada] =
    useState(false);
  const tecladoQWERTY = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
  const [showModalLose, setShowModalLose] = useState(false);
  const [showModalWin, setShowModalWin] = useState(false);
  const [showModalTipoJuego, setShowModalTipoJuego] = useState(true);
  const [showModalPista, setModalPista] = useState(false);
  const [showModalError, setModalError] = useState(false);
  const [showModalCargando, setShowModalCargando] = useState(false);
  const [pista, setPista] = useState("");
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
        pistaUsada,
        ganador,
        pista,
        puntos: puntos < 0 ? 0 : puntos, // garantiza que los puntos no sean negativos
      })
    );
  };

  const handleCloseLose = () => {
    setShowModalLose(false);
    navigate("/resumen");
    if (puntos < 0) {
      setPuntos(0); // asegura que los puntos no son negativos
    }
    datosResumen();
  };

  const handleCloseWin = () => {
    setShowModalWin(false);
    navigate("/resumen");
    if (puntos < 0) {
      setPuntos(0); // asegura que los puntos no son negativos
    }
    datosResumen();
  };

  const handleCloseTipoJuego = () => {
    setShowModalWin(false);
    navigate("/");
  };

  const handleClosePista = () => {
    setModalPista(false);
  };

  const handleCloseError = () => {
    setModalPista(false);
    setModalError(false);
    navigate("/");
  };

  const palabra_dia = async () => {
    setShowModalTipoJuego(false);
    setShowModalCargando(true);
    try {
      const response = await fetch(api_url + "words");
      console.log(response);
      if (!response.ok) {
        setModalError(true);
      }
      const data = await response.json();
      setPalabra(data.Word);
      setPista(data.Clue);
      setTipoJuego("Palabra del Día");
      setBandera(data.Country);
      setTiempoInicio(Date.now());
    } catch (error) {
      console.error("Fetch failed:", error);
      setModalError(true);
    } finally {
      setShowModalCargando(false);
    }
  };


  const palabra_aleatoria = async () => {
    setShowModalTipoJuego(false);
    setShowModalCargando(true);
    try {
      const response = await fetch(api_url + "random");
      console.log(response);
      if (!response.ok) {
        setModalError(true);
      }
      const data = await response.json();
      setPalabra(data.Word);
      setPista(data.Clue);
      setTipoJuego("Palabra Aleatoria");
      setBandera(data.Country);
      setTiempoInicio(Date.now());
    } catch (error) {
      console.error("Fetch failed:", error);
      setModalError(true);
    } finally {
      setShowModalCargando(false);
    }
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

      let puntosPorIntento = 0;
      const nuevoIntento = intento.map((letra, i) => {
        let color = "";
        if (letra === palabraObjetivo[i]) {
          color = "verde";
          if (!letrasUsadas[letra] || letrasUsadas[letra] !== "verde") {
            puntosPorIntento += 10; // añadir puntos por letra correcta en la posición correcta
          }
        } else if (
          palabraObjetivo.includes(letra) &&
          (!conteoIntento[letra] ||
            conteoIntento[letra] <= conteoObjetivo[letra])
        ) {
          color = "amarillo";
          if (!letrasUsadas[letra]) {
            puntosPorIntento += 5; // añadir puntos por letra correcta en la posición incorrecta
          }
          conteoIntento[letra] -= 1;
        } else {
          color = "gris";
        }

        return { letra: letra, color: color };
      });

      setPuntos((puntosPrevios) => puntosPrevios + puntosPorIntento); // actualizar los puntos totales

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
        // bonificaciones por tiempo
        if (tiempoTranscurrido <= 15) {
          setPuntos((prevPuntos) => prevPuntos + 60);
        } else if (tiempoTranscurrido <= 30) {
          setPuntos((prevPuntos) => prevPuntos + 40);
        } else if (tiempoTranscurrido <= 60) {
          setPuntos((prevPuntos) => prevPuntos + 20);
        }
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
      <Modal show={showModalCargando}>
        <img src={cargando}></img>
      </Modal>
      <Modal show={showModalError} handleClose={handleCloseError}>
        <h2 className="errorApi">Error</h2>
        <h2>🫣 Ups!</h2>
        <h3>No hemos podido recuperar la palabra</h3>
        <p className="detalles">
          Detalles: No se ha podido contactar con la API
        </p>
      </Modal>
      <Modal show={showModalPista} handleClose={handleClosePista}>
        <h2>👀 Pista</h2>
        <p className="textoPista">{pista}</p>
      </Modal>
      <Modal show={showModalTipoJuego} handleClose={handleCloseTipoJuego}>
        <img id="logoTipoJuego" src={logo} alt="Logo" />
        <h2>Selecciona el tipo de juego:</h2>
        <button className="tipoJuego btn-primary" onClick={palabra_dia}>
          Palabra del día ☀️
        </button>
        <button className="tipoJuego btn-primary" onClick={palabra_aleatoria}>
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
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div className="juego">
            <h2>{tipoJuego}</h2>
            <p id="bandera" dangerouslySetInnerHTML={{ __html: bandera }}></p>
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
            {indice === 5 && (
              <div>
                <br></br>
                <button
                  className="bPista"
                  onClick={() => {
                    setModalPista(true);
                    setMostrarPista(!mostrarPista);
                    setPistaUsada(true);
                    // Sólo aplica la penalización si no se ha aplicado antes
                    if (!penalizacionPorPistaAplicada) {
                      setPuntos((prevPuntos) => prevPuntos - 20);
                      setPenalizacionPorPistaAplicada(true); // Actualizamos la variable para indicar que ya se aplicó la penalización
                    }
                  }}
                >
                  🔍 Ver pista
                </button>
              </div>
            )}

            <div className="botones">
              <button id="bComprobar" onClick={comprobar}>
                Comprobar ✅
              </button>
              <button id="bBorrar" onClick={borrar}>
                Borrar 🗑️
              </button>
            </div>
            <div className="tiempo">
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
