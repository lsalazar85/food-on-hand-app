import { Transition } from 'react-transition-group';
import { ModalProps } from '../../../interfaces';

const Modal = ({ title, show, onClose, content }: ModalProps) => (
  <Transition in={show} timeout={500} unmountOnExit mountOnEnter>
    <div className="modalWrapper">
      <div className="modalOverlay" />
      <div className="mainModal">
        <div className="modalHeader">
          <h3>{title}</h3>
        </div>
        <button
          type="button"
          className="closeIcon"
          onClick={onClose}
          data-testid="close-modal"
        >
          X
        </button>
        <div className="modalContent">{content}</div>
      </div>
    </div>
  </Transition>
);

export default Modal;
