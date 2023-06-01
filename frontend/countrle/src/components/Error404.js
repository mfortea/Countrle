// Error404.js
import React from 'react';

function Error404() {
    return (


        <div>
            <br></br>
            <div class="container animacion-carga">
                <div class="jumbotron">
                    <div>
                        <p class="error_emoji">😬</p>
                        <h1 class="error">Error 404</h1>
                        <h3>¡Ups! No encontramos la página que estás buscando</h3>
                        <a className="btn btn-large btn-primary" href="/">Volver a Inicio</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error404;
