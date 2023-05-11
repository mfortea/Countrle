import React from 'react';
import './AcercaDe.css';
import logo from '../logo.png';

const AcercaDe = () => {


  return (
    <div>
      <br></br>
      <div class="container animacion-carga">
        <div class="jumbotron">
          <img id="logo-acercade" src={logo} alt="Logo" />
          <h1>Acerca de Countrle</h1>
          <h2>Proyecto Educativo</h2>
          <p>Countrle es un proyecto para la asignatura de Ingeniería Web del 3er Curso de Ingeniería Informática de la Universidad de Córdoba</p>
          <p>Los alumnos que han participado en este proyecto son:</p>
          <p>Mateo Fortea Dugo (Frontend)</p>
          <p>Jesús Escribano Serena (BackEnd)</p>
          <p>Maria Lenzano Álvarez (Diseño y Modelado)</p>
          <p>Antonio Díaz Pérez (Base de Datos)</p>
          <p>Natalia Jiménez Aranda (Pruebas)</p>
          <p>Juan Higuera Mohedano (Scrum Master)</p>
        </div>

      </div>

    </div>
  );
};

export default AcercaDe;
