import React from 'react';
import './Estadisticas.css';

const Estadisticas = () => {
    // Aquí irán tus datos reales. Estos son solo de prueba.
    const usuarioActual = { nombre: 'Usuario6', puntuacion: 150, posicion: 5 };
    const ranking = [
        { nombre: 'Usuario1', puntuacion: 1000, mejor_tiempo: 10 },
        { nombre: 'Usuario2', puntuacion: 900 , mejor_tiempo: 20 },
        { nombre: 'Usuario3', puntuacion: 800 , mejor_tiempo: 30 },
        { nombre: 'Usuario4', puntuacion: 700 , mejor_tiempo: 40 },
        { nombre: 'Usuario5', puntuacion: 600 , mejor_tiempo: 50 },
        { nombre: 'Usuario6', puntuacion: 500 , mejor_tiempo: 60 },
        { nombre: 'Usuario7', puntuacion: 400 , mejor_tiempo: 70 },
        { nombre: 'Usuario8', puntuacion: 300 , mejor_tiempo: 80 },
        { nombre: 'Usuario9', puntuacion: 200 , mejor_tiempo: 90 },
        { nombre: 'Usuario10', puntuacion: 100 , mejor_tiempo: 100 },
    ];

    const formatTime = (segundos) => {
        if (segundos < 60) {
            return `${segundos} segundos`;
        }

        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos} min ${segundosRestantes} seg`;
    };

    return (
        <div>
            <br></br>
            <div class="container animacion-carga">
                <div class="jumbotron">
                    <div className="estadisticas">
                        <div className="usuario-actual">
                            <h2>{usuarioActual.nombre}</h2>
                            <h4>Puntuación: {usuarioActual.puntuacion} puntos</h4>
                            <p>Estás el {usuarioActual.posicion}º en la tabla</p>
                        </div>
                        <div className="ranking">
                            <h2>Ranking Global</h2>
                            <div className="contenedor_ranking">
                                {ranking.slice(0, 6).map((usuario, index) => (
                                    <div class={`fila_ranking posicion_${index + 1}`} key={index}>
                                        <span class="posicion">{index + 1}º</span>
                                        <div className="datos_ranking">
                                            <p>{usuario.nombre}</p> 
                                            <p>{usuario.puntuacion} puntos </p>
                                            <p>Récord: {formatTime(usuario.mejor_tiempo)}</p> 
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estadisticas;
