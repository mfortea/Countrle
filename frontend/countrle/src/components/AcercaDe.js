import React from 'react';
import './AcercaDe.css';
import logo from '../logo.png';
import django_logo from '../assets/django_logo.png';
import react_logo from '../assets/react_logo.png';
import mongo_logo from '../assets/mongo_logo.png';
const AcercaDe = () => {


  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <img id="logo-acercade" src={logo} alt="Logo" />
          <h1>Acerca de Countrle</h1>
          <p>Countrle es un proyecto para la asignatura de Ingeniería Web del 3er Curso de Ingeniería Informática de la Universidad de Córdoba</p>
          <p>Los alumnos que han participado en este proyecto son:</p>
          <p className="nombres">Mateo Fortea Dugo (Frontend)</p>
          <p className="nombres">Jesús Escribano Serena (BackEnd)</p>
          <p className="nombres">Maria Lenzano Álvarez (Diseño y Modelado)</p>
          <p className="nombres">Antonio Díaz Pérez (Base de Datos)</p>
          <p className="nombres">Natalia Jiménez Aranda (Pruebas)</p>
          <p className="nombres">Juan Higuera Mohedano (Scrum Master)</p>
          <br></br>
          <h4>Tecnologías utilizadas:</h4>
          <img className="logos" alt="Logo de React"  src={react_logo}></img>
          <img className="logos" alt="Logo de Django" src={django_logo}></img>
          <img className="logos" alt="Logo de MongoDB" src={mongo_logo}></img>
        </div>

      </div>

    </div>
  );
};

export default AcercaDe;
