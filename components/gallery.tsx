import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color, Product } from "../pages/api/products";
import Badge from "./badge";
import Circle from "./circle";
import { ColorsPanel } from "./colors-panel";
import styles from "./gallery.module.scss";
import Photo from "./photo";
import Price from "./price";
import ProductRating from "./product-rating";
import SizesPanel from "./sizes-panel";

interface Props {
  products: Product[];
  onClick(product: Product): void;
}

export const Gallery = ({ products, onClick }: Props) => {
  return (
    <ul className={styles.gallery}>
      {products.map((p, i) => {
        return (
          <li
            className={styles.card}
            onClick={() => onClick(p)}
            key={`${i}-${p.name}`}
          >
            <div className={styles.card__photo}>
              <div className={styles.card__image}>
                <Photo
                  aspectRatio="1 / 1"
                  width="100%"
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
                  <Price value={p.price} />
                  <Price value={p.originalPrice} variant="strikethrough" />
                </div>
              </div>
              <div className={styles.card__middle}>
                <ColorsPanel colors={p.colors} selected={p.colorIndex} />
                <SizesPanel sizes={p.sizes} selected={p.sizeIndex} />
              </div>
              <div className={styles.card__bottom}>
                <ProductRating value={p.rating} />
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
