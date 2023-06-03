import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../components/AuthContext'; // importa AuthContext

function Logout() {
  let navigate = useNavigate();

  const { setAuth } = useContext(AuthContext); // usa useContext para acceder a setAuth

  useEffect(() => {
    setAuth(false); // cambia el estado de autenticación
    navigate('/');
  }, []);

  return null;
}

export default Logout;
