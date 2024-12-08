import '../styles/Modal.css'; // Asegúrate de incluir el archivo de estilos

// eslint-disable-next-line react/prop-types
const ConfirmModal = ({ show, message, onConfirm, onCancel, className }) => {
  if (!show) return null; // Si show es falso, no muestra el modal.

  return (
    <div className={`modal-backdrop ${className || ""}`}> {/* Clase dinámica */}
      <div className={`modal-content ${className || ""}`}> {/* También puedes agregar aquí */}
        <h2 className="text">{message}</h2>
        <div className="modal-buttons">
          <button className="modal-button confirm" onClick={onConfirm}>
            Sí
          </button>
          <button className="modal-button cancel" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
