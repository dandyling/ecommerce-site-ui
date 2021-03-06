import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./icon-button.module.scss";

interface Props {
  onClick(): void;
  icon: any;
}

export const IconButton = (props: Props) => {
  const { icon, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
