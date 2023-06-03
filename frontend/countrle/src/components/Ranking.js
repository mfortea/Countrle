import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Ranking.css";
import { AuthContext } from "../components/AuthContext";
import LoadingGif from "../assets/cargando.gif"; // Asegúrate de que la ruta a tu gif de carga sea correcta

const Ranking = () => {
  const { auth } = useContext(AuthContext);
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para la carga de datos
  const api_url = "https://countrle-api.onrender.com/api/ranking";
  const usuarioActual = localStorage.getItem('usuarioActual');
  

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await axios.get(api_url);
        setRanking(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false); // Datos cargados
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
                  <h1>{usuarioActual}</h1>
                  <h3>
                    Puntuación:{" "}
                    <strong className="puntos">
                      {usuarioActual.puntuacion} puntos
                    </strong>
                  </h3>
                  <h4>Estás el {usuarioActual.posicion}º en la tabla</h4>
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
