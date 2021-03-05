import { Color, Product } from "../pages/api/products";
import styles from "./gallery.module.scss";
import Image from "next/image";
import { ColorsPanel } from "./colors-panel";
import SizesPanel from "./sizes-panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Badge from "./badge";
import Circle from "./circle";

interface Props {
  products: Product[];
}

export const Gallery = ({ products }: Props) => {
  return (
    <ul className={styles.gallery}>
      {products.map((p) => {
        return (
          <li className={styles.card}>
            <div className={styles.card__photo}>
              <div className={styles.card__image}>
                <Image
                  objectFit="cover"
                  layout="fill"
                  src={p.images[p.coverIndex]}
                  alt={p.name}
                />
              </div>
              <Badge style={{ position: "absolute", top: 25, left: 30 }}>
                <p className={styles.card__discount}>-{p.discount * 100} %</p>
              </Badge>
              <Circle
                color={Color.White}
                radius={20}
                style={{
                  position: "absolute",
                  right: 25,
                  top: 20,
                  boxShadow: "4px 2px 5px 5px rgba(0, 0, 0, 0.05)",
                }}
              >
                <FontAwesomeIcon
                  className={styles.card__favorite}
                  icon={faHeart}
                />
              </Circle>
            </div>
            <div className={styles.card__content}>
              <div className={styles.card__top}>
                <h3 className={styles.card__description}>{p.name}</h3>
                <div className={styles.card__price}>
                  <p className={styles.card__current}>$ {p.price}</p>
                  <p className={styles.card__original}>$ {p.originalPrice}</p>
                </div>
              </div>
              <div className={styles.card__middle}>
                <ColorsPanel colors={p.colors} selected={p.colorIndex} />
                <SizesPanel sizes={p.sizes} selected={p.sizeIndex} />
              </div>
              <div className={styles.card__bottom}>
                <div className={styles.card__rating}>
                  <FontAwesomeIcon
                    className={styles.card__icon}
                    icon={faStar}
                  />
                  <p className={styles.card__number}>{p.rating}</p>
                </div>
                <div className={styles.card__cta}>
                  BUY
                  <FontAwesomeIcon icon={faPlus} className={styles.card__add} />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
