import React, { useEffect, useState } from 'react';
import './Inicio.css';
import iphone_mockup from '../assets/iphone_mockup.png';
import captura_pwa from '../assets/captura_pwa.png';
import trofeo from '../assets/trofeo.png';

const Inicio = () => {
  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div id="mundo"></div>
          <h1>¡Bienvenido a Countrle!</h1>
          <br></br>
          <p className="lead">Countrle es una emocionante juego en la que podrás poner a prueba tus conocimientos sobre países y adivinar palabras relacionadas con ellos. ¿Estás listo para desafiar tu mente y ampliar tus horizontes geográficos? </p>
          <a className="btn btn-large btn-primary" href="/juego">¡Jugar Ahora!</a>
          <br></br>
          <br></br>
          <div className="container marketing">

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading text-center">Amplía tus horizontes geográficos <span className="text-muted">con Countrle.</span></h2>
                <p className="lead">
                  En cada ronda, te presentaremos una palabra encriptada y tendrás que poner a prueba tu conocimiento y agudeza para descifrarla. Cada letra que aciertes te acercará más a la respuesta correcta y, en el proceso, aprenderás más sobre la geografía, la cultura y las tradiciones del país en cuestión
                  Con Countrle, te enfrentarás a retos cada vez más difíciles, pero el aprendizaje y la diversión están garantizados. No solo tendrás la oportunidad de demostrar cuánto sabes sobre geografía, sino que también podrás expandir tus horizontes y descubrir nuevos lugares y culturas que quizá no conocías.
                </p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" src={iphone_mockup} alt="Captura de pantalla de Countrle en un iPhone"></img>
              </div>
            </div>

            <hr />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading text-center">Aprende mientras te diviertes <span className="text-muted">y reta a tus amigos.</span></h2>
                <p className="lead">
                  Countrle es más que un simple juego; es una herramienta educativa que te ayudará a mejorar tus habilidades lingüísticas y de resolución de problemas, a la vez que te ofrece la oportunidad de sumergirte en la rica diversidad cultural de nuestro planeta.

                  Desafía a tus amigos, sube de nivel y compite en la clasificación global para convertirte en el mayor experto en geografía de Countrle. ¡Sé parte de la comunidad Countrle y comienza a descubrir el mundo de una forma nueva y emocionante hoy mismo!"
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto" src={trofeo} alt="Trofeo y birrete"></img>
              </div>
            </div>

            <hr />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading text-center">Juega a Countrle <span className="text-muted">desde cualquier lugar.</span></h2>
                <p className="lead">
                  Como aplicación progresiva, Countrle ofrece la máxima eficiencia y accesibilidad. Puedes instalarla directamente en tu dispositivo* y usarla como una aplicación nativa. Esto significa que puedes jugar Countrle sin importar si tienes conexión a internet o no, y experimentarás una velocidad y rendimiento óptimos en todo momento. Además, recibirás las actualizaciones tan pronto como estén disponibles, asegurando que siempre tengas la última versión de Countrle.
                  <br /><br />
                </p>
              </div>
              <div className="col-md-5 order-md-2">
                <img className="featurette-image img-fluid mx-auto" src={captura_pwa} alt="Captura de Countrle instalada en un iPhone"></img>
              </div>
            </div>
            <br /><br />
            <p className="aviso">*Las PWA requieren de un dispositivo iOS 11.3, Android 5.0 (Lollipop) o superior y Chrome, Firefox, Safari y Edge actualizados para sistemas de escritorio. </p>

            <hr />

          </div>

        </div>
      </div>
    </div>
  );
};
export default Inicio;