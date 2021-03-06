import { CSSProperties } from "react";
import styles from "./price.module.scss";

interface Props {
  value: number;
  variant?: "primary" | "strikethrough";
  style?: CSSProperties;
}

export const Price = (props: Props) => {
  const { value, variant = "primary", style } = props;
  const defaultStyle =
    variant === "primary" ? styles.primary : styles.strikethrough;
  return (
    <p style={style} className={defaultStyle}>
      $ {value}
    </p>
  );
};

export default Price;
