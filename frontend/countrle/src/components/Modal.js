import React from 'react';
import './Modal.css'; 

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button id="cerrar" onClick={handleClose}><i className="fas fa-circle-xmark "></i> Cerrar</button>
            </section>
        </div>
    );
};

export default Modal;
