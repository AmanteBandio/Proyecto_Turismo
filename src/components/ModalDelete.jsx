import React from 'react';
import '../styles/Modal.css'; // Asegúrate de incluir el archivo de estilos

const ConfirmModal = ({ show, message, onConfirm, onCancel }) => {
  if (!show) {
    return null; // Si show es falso, no mostramos el modal
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{message}</h2>
        <div className="modal-buttons">
          <button className="modal-button confirm" onClick={onConfirm}>Sí</button>
          <button className="modal-button cancel" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;