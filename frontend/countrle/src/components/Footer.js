import React from 'react';
import './Footer.css'; // Importa el archivo de estilos CSS para el Footer

const Footer = () => {
  const anoActual = new Date().getFullYear();
  const copyrightText = 'Countrle © 2023 Todos los derechos reservados';

  return (
    <footer className="footer">
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
