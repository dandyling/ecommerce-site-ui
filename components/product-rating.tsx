import styles from "./product-rating.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

interface Props {
  value: number;
}

export const ProductRating = (props: Props) => {
  const { value } = props;
  return (
    <div className={styles.rating}>
      <FontAwesomeIcon className={styles.rating__icon} icon={faStar} />
      <p className={styles.rating__value}>{value}</p>
    </div>
  );
};

export default ProductRating;
