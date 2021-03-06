import { Color } from "../pages/api/products";
import Circle from "./circle";

interface Props {
  sizes: string[];
  selected: number;
  radius?: number;
  fontSize?: number;
  spacing?: number;
  onClick?(index: number): void;
}

export const SizesPanel = (props: Props) => {
  const {
    sizes,
    selected,
    radius = 12,
    fontSize = 10,
    spacing = 8,
    onClick,
  } = props;

  const handleClick = (i: number) => {
    onClick && onClick(i);
  };

  return (
    <ul style={{ display: "flex", alignItems: "center", listStyle: "none" }}>
      {sizes.map((s, i) => {
        const color = selected === i ? Color.Brand : Color.Black;
        const margin = i !== sizes.length ? spacing : 0;
        return (
          <li
            onClick={() => handleClick(i)}
            style={{
              marginRight: margin,
              cursor: onClick ? "pointer" : "default",
            }}
            key={`${i}-${s}`}
          >
            <Circle borderColor={color} radius={radius} color={Color.Panel}>
              <p
                style={{
                  fontSize,
                  fontWeight: 700,
                  color,
                }}
              >
                {s}
              </p>
            </Circle>
          </li>
        );
      })}
    </ul>
  );
};

export default SizesPanel;
