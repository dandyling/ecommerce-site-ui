import { Product } from "../pages/api/products";
import styles from "./gallery.module.scss";
import Image from "next/image";

interface Props {
  products: Product[];
}

export const Gallery = ({ products }: Props) => {
  return (
    <div className={styles.gallery}>
      {products.map((p) => {
        return (
          <div className={styles.card}>
            <div className={styles.card__image}>
              <Image
                objectFit="cover"
                layout="fill"
                src={p.images[p.coverIndex]}
              />
            </div>
            <div className={styles.card__content}>
              <div className={styles.card__top}>
                <p className={styles.card__description}>{p.name}</p>
                <div className={styles.card__price}>
                  <p className={styles.card__current}>$ {p.price}</p>
                  <p className={styles.card__original}>$ {p.originalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
