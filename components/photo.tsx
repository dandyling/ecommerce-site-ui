import styles from "./photo.module.scss";
import Image from "next/image";
import { CSSProperties } from "react";

interface Props {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  aspectRatio?: string;
  style?: CSSProperties;
}

export const Photo = (props: Props) => {
  const {
    src,
    alt,
    width,
    height,
    minWidth,
    minHeight,
    aspectRatio,
    style,
  } = props;
  const defaultStyle = { width, height, minWidth, minHeight, aspectRatio };
  const allStyle = { ...defaultStyle, ...style };
  return (
    <div style={allStyle} className={styles.photo}>
      <img className={styles.photo__image} src={src} alt={alt} />
    </div>
  );
};

export default Photo;
