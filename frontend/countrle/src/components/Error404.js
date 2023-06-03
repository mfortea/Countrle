// Error404.js
import React from 'react';

function Error404() {
    return (


        <div>
            <br></br>
            <div className="container animacion-carga">
                <div className="jumbotron">
                    <div>
                        <p className="error_emoji">😬</p>
                        <h1 className="error">Error 404</h1>
                        <h3>¡Ups! No encontramos la página que estás buscando</h3>
                        <a className="btn btn-large btn-primary" href="/">Volver a Inicio</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error404;
