import React from 'react';
import './Footer.css';

const Footer = () => {
  const anoActual = new Date().getFullYear(); // obtiene el año actual
  const copyrightText = `Countrle © ${anoActual}`; // usa una template string para insertar el año

  return (
    <footer className="footer">
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
