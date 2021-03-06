import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./modal.module.scss";
import Overlay from "./overlay";

interface Props {
  width: number | string;
  height: number | string;
  onClose(): void;
  children?: any;
}

export const Modal = (props: Props) => {
  const { width, height, onClose, children } = props;

  return (
    <Overlay onClickOutside={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        style={{ width, height }}
      >
        <button onClick={onClose} className={styles.modal__button}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
