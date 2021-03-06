import styles from "./overlay.module.scss";

interface Props {
  onClickOutside?(): void;
  children?: any;
}

export const Overlay = (props: Props) => {
  const { children, onClickOutside } = props;

  return (
    <div className={styles.overlay} onClick={onClickOutside}>
      {children}
    </div>
  );
};

export default Overlay;
