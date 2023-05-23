import React, { useEffect, useState } from 'react';
import './Inicio.css'; // Importa el archivo de estilos CSS para el Footer
import Login from './Login';
import mundoImage from '../assets/mapa.jpg';

const Inicio = () => {
  const [componenteActivo, setComponenteActivo] = useState('inicio');

  const renderComponenteActivo = () => {
    switch (componenteActivo) {
      case 'login':
        return <Login />;
      default:
        return null;
    }
  };
  return (
    <div>
      <br></br>
      <div class="container animacion-carga">
        <div class="jumbotron">
        <div id="mundo"></div>

          <h1>¡Bienvenido a Countrle!</h1>
          <br></br>
          <p class="lead">Countrle es una emocionante aplicación en la que podrás poner a prueba tus conocimientos sobre países y adivinar palabras relacionadas con ellos. ¿Estás listo para desafiar tu mente y ampliar tus horizontes geográficos?

            El objetivo de Countrle es descubrir la palabra relacionada con un país, donde cada letra acertada te acerca más a la respuesta correcta. Pon a prueba tu habilidad para descifrar palabras y demuestra cuánto sabes sobre geografía.

            ¡Diviértete mientras aprendes y desafías a tus amigos! ¿Serás capaz de adivinar todas las palabras relacionadas con los países correctamente?

            ¡Que comience la aventura en Countrle!.</p>
            <a class="btn btn-large btn-primary" onClick={() => setComponenteActivo('juego')}>Iniciar Sesión</a>
        </div>

      </div>
      
    </div>
  );
};

export default Inicio;
