import React from 'react';
import './Reglas.css';
import metodos_entrada from '../assets/metodos_entrada.png';

const Reglas = () => {
    return (
        <div>
            <br></br>
            <div class="container animacion-carga">
                <div class="jumbotron reglas">
                    <h1 class="centrar">Reglas de Countrle</h1>
                    <br></br>
                    <h2>¿Cómo se juega?</h2>
                    <p>Tienes que intentar adivinar la palabra de 5 letras seleccionando las letras del teclado que aparece en pantalla.</p>
                    <p>La palabra a adivinar está relacionada con el país que se muestra sobre el tablero</p>
                    <p>En el caso de no saber la palabra durante el 6º y último intento, puedes solicitar una pista</p>
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
                    <h2>Tutorial</h2>
                    <p>Para jugar sigue los pasos siguientes</p>
                    <p class="lis">- Escribe una palabra de 5 letras en el tablero, letra por letra, seleccionándolas del teclado virtual.</p>
                    <p class="lis">- Una vez que hayas escrito una palabra, pulsa el botón "Comprobar" para ver si has adivinado la palabra correcta.</p>
                    <p class="lis">- Las letras de tu intento se colorearán de acuerdo con las reglas de color explicadas anteriormente.</p>
                    <p class="lis">- Tienes 6 intentos para adivinar la palabra correcta.</p>
                    <p class="lis">- Puedes solicitar una pista si lo deseas</p>
                    <p class="lis">- ¡Buena suerte!</p>
                    <br></br>
                    <h2>Reglas de puntuación</h2>
                    <p>En cada partida conseguirás una puntuación que podrás sumar a tu total para competir con el resto de jugadores del Ranking Global.</p>
                    <p>Se siguen las siguientes reglas:</p>
                    <p class="lis">- Letra nueva acertada en la posición correcta: +10 puntos.</p>
                    <p class="lis">- Letra nueva acertada pero en la posición incorrecta: +5 puntos.</p>
                    <p class="lis">- Completado en menos de 1 minuto: + 20 puntos adicionales</p>
                    <p class="lis">- Completado en menos de 30 segundos: + 40 puntos adicionales</p>
                    <p class="lis">- Completado en menos de 15 segundos: + 60 puntos adicionales</p>
                    <p class="lis">- ¡Ojo! Si solicitas la pista tendrás una penalización de 20 puntos</p>

                    <br></br>
                    <h2>Dispositivos</h2>
                    <p>Countrle es compatible con cualquier tipo de dispositivo que disponga de un navegador web moderno.</p>
                    <p>Compatible con entrada táctil y física tanto en smartphones como equipos de escritorio.</p>
                    <img class="imagen" alt="Teclado, ratón y entrada táctil" src={metodos_entrada}></img>
                </div>
            </div>
        </div>
    );
};

export default Reglas;
