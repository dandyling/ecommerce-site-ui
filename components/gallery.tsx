import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../pages/api/products";
import Badge from "./badge";
import Button from "./button";
import { ColorsPanel } from "./colors-panel";
import { FavoriteButton } from "./favorite-button";
import styles from "./gallery.module.scss";
import Photo from "./photo";
import Price from "./price";
import ProductRating from "./product-rating";
import SizesPanel from "./sizes-panel";
import useStore from "../store/store";

interface Props {
  products: Product[];
  onClick(product: Product): void;
}

export const Gallery = (props: Props) => {
  const { products, onClick } = props;
  const { handleAddCart } = useStore();
  return (
    <ul className={styles.gallery}>
      {products.map((p, i) => {
        return (
          <li className={styles.card} key={`${i}-${p.name}`}>
            <div className={styles.card__photo}>
              <div onClick={() => onClick(p)} className={styles.card__image}>
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
              <FavoriteButton
                onClick={console.log}
                style={{
                  position: "absolute",
                  right: 25,
                  top: 20,
                }}
              />
            </div>
            <div className={styles.card__content}>
              <div onClick={() => onClick(p)} className={styles.card__top}>
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
                <Button variant="text" onClick={() => handleAddCart(p, 1)}>
                  <div className={styles.card__cta}>
                    <p>BUY</p>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={styles.card__add}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
