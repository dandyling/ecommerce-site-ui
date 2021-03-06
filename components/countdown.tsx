import styles from "./countdown.module.scss";
import Badge from "./badge";
import { Color } from "../pages/api/products";

export const Countdown = () => {
  return (
    <div className={styles.countdown}>
      <Badge
        width={36}
        height={36}
        borderRadius={8}
        color={Color.Brand}
        style={{ marginRight: 8 }}
      >
        <p className={styles.countdown__time}>12</p>
      </Badge>
      <Badge
        width={36}
        height={36}
        borderRadius={8}
        color={Color.Brand}
        style={{ marginRight: 8 }}
      >
        <p className={styles.countdown__time}>00</p>
      </Badge>
      <Badge width={36} height={36} borderRadius={8} color={Color.Brand}>
        <p className={styles.countdown__time}>00</p>
      </Badge>
    </div>
  );
};

export default Badge;
