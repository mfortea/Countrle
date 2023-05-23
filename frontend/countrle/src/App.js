import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import Juego from './components/Juego';
import Reglas from './components/Reglas';
import logo from './logo.png';

function App() {
  const [componenteActivo, setComponenteActivo] = useState('inicio');

  const renderComponenteActivo = () => {
    switch (componenteActivo) {
      case 'inicio':
        return <Inicio setComponenteActivo={setComponenteActivo} />;
      case 'acercaDe':
        return <AcercaDe />;
      case 'juego':
        return <Juego />;
      case 'reglas':
          return <Reglas />;
      default:
        return null;
    }
  };
  const handleClick = (component) => {
    setComponenteActivo(component);

    // Cerramos el menú al hacer clic en una opción
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (!navbarToggler.classList.contains('collapsed')) {
      navbarToggler.click();
    }
};

  useEffect(() => {
    document.title = `Countrle - ${componenteActivo.charAt(0).toUpperCase() + componenteActivo.slice(1)}`;
  }, [componenteActivo]);

  return (
    <div id='contenedor'>
      <div id='menu'>
        <nav id="barra-menu" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" onClick={() => handleClick('inicio')} href="#">
              <img id="logo" src={logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className={`nav-link ${componenteActivo === 'inicio' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleClick('inicio')}
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${componenteActivo === 'reglas' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleClick('reglas')}
                  >
                    Reglas
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${componenteActivo === 'acercaDe' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleClick('acercaDe')}
                  >
                    Acerca de
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${componenteActivo === 'juego' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleClick('juego')}
                  >
                    Juego
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {renderComponenteActivo()}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
