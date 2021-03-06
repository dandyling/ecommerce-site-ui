import styles from "./tabbar.module.scss";

interface Props {
  selected: number;
  tabs: string[];
  onChange(index: number): void;
}

export const TabBar = (props: Props) => {
  const { selected, tabs, onChange } = props;
  return (
    <ul className={styles.tabs}>
      {tabs.map((t, i) => {
        const isSelected = selected === i;
        return (
          <li
            onClick={() => onChange(i)}
            className={styles.tabs__item}
            key={`${i}-${t}`}
          >
            <h2 className={styles.tabs__name}>{t}</h2>
            {isSelected && <div className={styles.tabs__underline} />}
          </li>
        );
      })}
    </ul>
  );
};

export default TabBar;
