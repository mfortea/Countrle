import React from 'react';
import './Modal.css'; 

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className="cerrar" onClick={handleClose}>Cerrar</button>
            </section>
        </div>
    );
};

export default Modal;
