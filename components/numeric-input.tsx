import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./icon-button";
import styles from "./numeric-input.module.scss";

interface Props {
  value: number;
  onChange(e: any): void;
  onIncrement(): void;
  onDecrement(): void;
}

export const NumericInput = (props: Props) => {
  const { value, onChange, onIncrement, onDecrement } = props;

  return (
    <div className={styles.input}>
      <input step={1} min={1} type="number" value={value} onChange={onChange} />
      <IconButton icon={faPlus} onClick={onIncrement} />
      <IconButton icon={faMinus} onClick={onDecrement} />
    </div>
  );
};
