import { CSSProperties } from "react";
import styles from "./button.module.scss";

interface Props {
  variant?: "primary" | "light" | "text";
  children?: any;
  style?: CSSProperties;
  onClick(): void;
}

export const Button = (props: Props) => {
  const { children, variant = "primary", style, onClick } = props;

  const variantStyle =
    variant === "primary"
      ? styles.button__primary
      : variant === "light"
      ? styles.button__light
      : styles.button__text;
  return (
    <button onClick={onClick} style={style} className={variantStyle}>
      {children}
    </button>
  );
};

export default Button;
