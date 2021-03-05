import { Color } from "../pages/api/products";
import Circle from "./circle";

interface Props {
  colors: string[];
  selected: number;
}

export const ColorsPanel = (props: Props) => {
  const { colors, selected } = props;
  return (
    <ul style={{ display: "flex", alignItems: "center", listStyle: "none" }}>
      {colors.map((c, i) => {
        return (
          <li style={{ marginRight: 16 }}>
            <Circle
              borderColor={selected === i ? Color.Gray : null}
              radius={selected === i ? 9.5 : 8}
              color={c}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ColorsPanel;
