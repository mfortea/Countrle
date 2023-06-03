import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './components/AuthContext'; // Asegúrate de que la ruta es correcta

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
