import { Color } from "../pages/api/products";
import Circle from "./circle";

interface Props {
  colors: string[];
  selected: number;
  onClick?(index: number): void;
  radius?: number;
  radiusSelected?: number;
}

export const ColorsPanel = (props: Props) => {
  const { colors, selected, onClick, radius = 8, radiusSelected = 9.5 } = props;

  const handleClick = (i: number) => {
    onClick && onClick(i);
  };

  return (
    <ul style={{ display: "flex", alignItems: "center", listStyle: "none" }}>
      {colors.map((c, i) => {
        return (
          <li
            style={{ marginRight: 16, cursor: onClick ? "pointer" : "default" }}
            onClick={() => handleClick(i)}
            key={`${i}-${c}`}
          >
            <Circle
              borderColor={selected === i ? Color.Gray : null}
              radius={selected === i ? radiusSelected : radius}
              color={c}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ColorsPanel;
