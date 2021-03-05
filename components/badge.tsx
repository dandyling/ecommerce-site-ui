import { CSSProperties } from "react";
import { Color } from "../pages/api/products";

interface Props {
  width?: number;
  height?: number;
  borderRadius?: number;
  color?: string;
  style?: CSSProperties;
  children?: any;
}

export const Badge = (props: Props) => {
  const {
    width = 60,
    height = 30,
    color = Color.Accent,
    borderRadius = 12,
    style = null,
    children,
  } = props;

  const badgeStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
    width,
    height,
    borderRadius,
  };

  const allStyle = { ...badgeStyle, ...style };
  return <div style={allStyle}>{children}</div>;
};

export default Badge;
