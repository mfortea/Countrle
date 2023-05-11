import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import logo from './logo.png';

function App() {
  const [componenteActivo, setComponenteActivo] = useState('inicio');

  const renderComponenteActivo = () => {
    switch (componenteActivo) {
      case 'inicio':
        return <Inicio />;
      case 'acercaDe':
        return <AcercaDe />;
      default:
        return null;
    }
  };

  useEffect(() => {
    document.title = `Countrle - ${componenteActivo === 'inicio' ? 'Inicio' : 'Acerca de'}`;
  }, [componenteActivo]);

  return (
    <div id='contenedor'>
      <div id='menu'>
        <nav id="barra-menu" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" onClick={() => setComponenteActivo('inicio')} href="#">
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
                    onClick={() => setComponenteActivo('inicio')}
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${componenteActivo === 'inicio' ? 'active' : ''}`}
                    href="#"
                    onClick={() => setComponenteActivo('inicio')}
                  >
                    Reglas
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${componenteActivo === 'acercaDe' ? 'active' : ''}`}
                    href="#"
                    onClick={() => setComponenteActivo('acercaDe')}
                  >
                    Acerca de
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
