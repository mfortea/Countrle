import React from "react";
import "./Reglas.css";
import metodos_entrada from "../assets/metodos_entrada.png";

const Reglas = () => {
  return (
    <div>
      <br></br>
      <div class="container animacion-carga">
        <div class="jumbotron reglas">
          <h1 class="centrar">Reglas de Countrle</h1>
          <br></br>
          <br></br>
          <h2>🎯 ¿Cuál es el objetivo?</h2>
          <p>
            Tienes que intentar adivinar la palabra de 5 letras seleccionando
            las letras del teclado que aparece en pantalla.
          </p>
          <p>
            La palabra a adivinar está relacionada con el país que se muestra
            sobre el tablero.
          </p>
          <p>
            En el caso de no saber la palabra durante el último intento, puedes
            solicitar una pista.
          </p>
          <br></br>
          <br></br>
          <h2>Código de colores</h2>
          <div className="color-descripcion">
            <span className="verde-r"></span>
            <p>La letra está en la posición correcta.</p>
          </div>
          <div className="color-descripcion">
            <span className="amarillo-r"></span>
            <p>La letra está en la palabra pero no en la posición correcta.</p>
          </div>
          <div className="color-descripcion">
            <span className="gris-r"></span>
            <p>La letra no está en la palabra.</p>
          </div>
          <br></br>
          <br></br>
          <h2>👨🏻‍🏫 Tutorial</h2>
          <p>Para jugar sigue los pasos siguientes:</p>

          <p>
            <strong>Selecciona el tipo de Juego:</strong> Para comenzar,
            selecciona un modo de juego: "Palabra del día" o "Palabra
            aleatoria".
          </p>

          <p>
            <strong>Selecciona tus Letras:</strong> Tienes un teclado virtual
            del que puedes seleccionar letras para formar una palabra. Escoge y
            escribe una palabra de 5 letras en el tablero, letra por letra.
          </p>

          <p>
            <strong>Comprueba tu Palabra:</strong> Una vez que hayas
            seleccionado tus letras y formado una palabra de 5 letras, haz clic
            en el botón "Comprobar". Esto te dirá si has acertado la palabra o
            no.
          </p>

          <p>
            <strong>Usa tus Intentos:</strong> Tienes un total de 6 intentos
            para adivinar la palabra correcta. Usa tus intentos sabiamente.
          </p>

          <p>
            <strong>Pide una Pista:</strong> Si te quedas atascado, puedes pedir
            una pista. Esta función te dará una letra correcta en su posición
            correcta. Usa esta función con cuidado, ya que te penaliza su uso.
          </p>

          <p>¡Buena suerte y disfruta del juego!</p>

          <br></br>
          <br></br>
          <h2>🏆 Reglas de puntuación</h2>
          <p>
            En cada partida conseguirás una puntuación que podrás sumar a tu
            total para competir con el resto de jugadores del Ranking Global.
          </p>
          <p>Se siguen las siguientes reglas:</p>
          <p class="lis">
            - Letra nueva acertada en la posición correcta: +10 puntos.
          </p>
          <p class="lis">
            - Letra nueva acertada pero en la posición incorrecta: +5 puntos.
          </p>
          <p class="lis">
            - Completado en menos de 1 minuto: + 20 puntos adicionales.
          </p>
          <p class="lis">
            - Completado en menos de 30 segundos: + 40 puntos adicionales.
          </p>
          <p class="lis">
            - Completado en menos de 15 segundos: + 60 puntos adicionales.
          </p>
          <p class="lis">
            - ¡Ojo! Si solicitas la pista tendrás una penalización de 20 puntos.
          </p>
          <br></br>
          <br></br>
          <h2>📱 Dispositivos</h2>
          <p>
            Countrle es compatible con cualquier tipo de dispositivo que
            disponga de un navegador web moderno.
          </p>
          <p>
            Compatible con entrada táctil y física tanto en smartphones como
            equipos de escritorio.
          </p>
          <img
            class="imagen"
            alt="Teclado, ratón y entrada táctil"
            src={metodos_entrada}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Reglas;
