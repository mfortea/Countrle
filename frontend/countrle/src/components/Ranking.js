import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Ranking.css";
import { AuthContext } from "../components/AuthContext";
import LoadingGif from "../assets/cargando.gif"; 

const Ranking = () => {
  const { auth } = useContext(AuthContext);
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para la carga de datos
  const api_url_ranking = "https://countrle-api.onrender.com/api/ranking";
  const api_url_score = "https://countrle-api.onrender.com/api/score";
  const usuarioActual = localStorage.getItem('usuarioActual');
  const [puntosActuales, setPuntosActuales] = useState(0); // Nuevo estado para los puntos
  const [posicion, setPosicion] = useState(0); // Nuevo estado para guardar la posición del usuario

  useEffect(() => {
    const fetchRanking = async () => {
      setIsLoading(true);
      try {
        const responseRanking = await axios.get(api_url_ranking);
        setRanking(responseRanking.data);

        // Buscar la posición del usuario en el ranking
        const posicionUsuario = responseRanking.data.findIndex(usuario => usuario.user === usuarioActual);
        // El index de findIndex comienza desde 0, por lo que debemos sumar 1 para obtener la posición real
        setPosicion(posicionUsuario + 1);
        
        // Obtener la puntuación del usuario actual
        const responseScore = await axios.get(`${api_url_score}?username=${usuarioActual}`);
        setPuntosActuales(responseScore.data.score);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRanking();
  }, []);

  return (
    <div>
      <br></br>
      <div className="container animacion-carga">
        <div className="jumbotron">
          <div className="estadisticas">
            {auth && (
              <>
                <div className="usuario-actual">
                  {isLoading ? (
                    <div className="loading-container">
                      <img className="cargandoRanking" src={LoadingGif} alt="Loading..." />
                    </div>
                  ) : (
                    <>
                      <h1>{usuarioActual}</h1>
                      <h3>
                        Puntuación:{" "}
                        <strong className="puntos">
                          {puntosActuales} puntos
                        </strong>
                      </h3>
                      <h4>Estás el {posicion}º en la tabla</h4>
                    </>
                  )}
                </div>
              </>
            )}
            <div className="ranking">
              <br></br>
              <h2>
                <i className="fa-solid fa-trophy"></i>
                &nbsp; Ranking Global
              </h2>
              <br></br>
              {isLoading ? (
                <div className="loading-container">
                  <img src={LoadingGif} alt="Loading..." />
                </div>
              ) : (
                <div className="contenedor_ranking">
                  {ranking.slice(0, Math.min(10, ranking.length)).map((usuario, index) => (
                    <div
                      className={`fila_ranking posicion_${index + 1}`}
                      key={index}
                    >
                      <span className="posicion">{index + 1}º</span>
                      <div className="datos_ranking">
                        <p>
                          {usuario.user} - {usuario.score} puntos
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
