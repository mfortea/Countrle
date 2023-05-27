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
                    <br></br>
                    <h2>Código de colores</h2>
                    <div className="color-descripcion">
                        <span className="verde-r">V</span>
                        <p>La letra está en la posición correcta.</p>
                    </div>
                    <div className="color-descripcion">
                        <span className="amarillo-r">A</span>
                        <p>La letra está en la palabra pero no en la posición correcta.</p>
                    </div>
                    <div className="color-descripcion">
                        <span className="gris-r">G</span>
                        <p>La letra no está en la palabra.</p>
                    </div>
                    <br></br>
                    <h2>Tutorial</h2>
                    <p>1. Escribe una palabra de 5 letras en el tablero, letra por letra, seleccionándolas del teclado virtual.</p>
                    <p>2. Una vez que hayas escrito una palabra, pulsa el botón "Comprobar" para ver si has adivinado la palabra correcta.</p>
                    <p>3. Las letras de tu intento se colorearán de acuerdo con las reglas de color explicadas anteriormente.</p>
                    <p>4. Tienes 6 intentos para adivinar la palabra correcta.</p>
                    <p>5. ¡Buena suerte!</p>
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
