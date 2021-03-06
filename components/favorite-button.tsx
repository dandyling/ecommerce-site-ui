import { Color } from "../pages/api/products";
import Circle from "./circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { CSSProperties } from "react";
import styles from "./favorite-button.module.scss";

interface Props {
  style?: CSSProperties;
  onClick(): void;
}

export const FavoriteButton = (props: Props) => {
  const { style, onClick } = props;
  return (
    <button onClick={onClick} className={styles.button}>
      <Circle
        color={Color.White}
        radius={20}
        style={{
          boxShadow: "4px 2px 5px 5px rgba(0, 0, 0, 0.05)",
          ...style,
        }}
      >
        <FontAwesomeIcon style={{ fontSize: 24 }} icon={faHeart} />
      </Circle>
    </button>
  );
};
