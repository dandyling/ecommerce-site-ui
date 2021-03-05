import { CSSProperties } from "react";

interface Props {
  radius: number;
  color: string;
  borderColor?: string;
  style?: CSSProperties;
  children?: any;
}

export const Circle = (props: Props) => {
  const { radius, color, borderColor, style = null, children } = props;
  const circleStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
    width: radius * 2,
    height: radius * 2,
    borderRadius: "50%",
    border: borderColor ? `1px solid ${borderColor}` : null,
  };

  const allStyle = { ...circleStyle, ...style };
  return <div style={allStyle}>{children}</div>;
};

export default Circle;
