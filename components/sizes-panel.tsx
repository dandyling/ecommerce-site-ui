import { Color } from "../pages/api/products";
import Circle from "./circle";

interface Props {
  sizes: string[];
  selected: number;
}

export const SizesPanel = (props: Props) => {
  const { sizes, selected } = props;
  return (
    <ul style={{ display: "flex", alignItems: "center", listStyle: "none" }}>
      {sizes.map((c, i) => {
        const color = selected === i ? Color.Brand : Color.Black;
        return (
          <li style={{ marginLeft: 8 }}>
            <Circle borderColor={color} radius={12} color={Color.Panel}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color,
                }}
              >
                {c}
              </p>
            </Circle>
          </li>
        );
      })}
    </ul>
  );
};

export default SizesPanel;
