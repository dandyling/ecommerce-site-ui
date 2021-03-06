import { Coupon } from "../pages/api/coupons";
import styles from "./coupons-panel.module.scss";
import Badge from "./badge";
import { Color } from "../pages/api/products";

interface Props {
  coupons: Coupon[];
}

export const CouponsPanel = ({ coupons }: Props) => {
  return (
    <ul className={styles.container}>
      {coupons.map((p, i) => {
        return (
          <li className={styles.coupon} key={`${i}-${p.code}`}>
            <Badge width="100%" height={120} color={Color.White}>
              <div className={styles.coupon__left}>
                <p className={styles.coupon__name}>{p.name}</p>
                <p className={styles.coupon__code}>{p.code}</p>
              </div>
              <div className={styles.coupon__right}>
                <div className={styles.coupon__discount}>
                  {p.discount * 100}%
                </div>
                <div>Off</div>
              </div>
            </Badge>
          </li>
        );
      })}
    </ul>
  );
};

export default CouponsPanel;
