import { useState } from "react";
import { Product } from "../pages/api/products";
import Badge from "./badge";
import Button from "./button";
import ColorsPanel from "./colors-panel";
import { FavoriteButton } from "./favorite-button";
import Modal from "./modal";
import { NumericInput } from "./numeric-input";
import { PhotosPanel } from "./photos-panel";
import Price from "./price";
import styles from "./product-popup.module.scss";
import ProductRating from "./product-rating";
import SizesPanel from "./sizes-panel";
import useStore from "./store/store";

interface Props {
  product: Product;
  onClose(): void;
}

export const ProductPopup = (props: Props) => {
  const { product, onClose } = props;
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { handleAddCart } = useStore();
  const color = product.colors[colorIndex];

  const handleAdd = () => {
    handleAddCart(product, quantity);
    onClose();
  };

  return (
    <Modal width={"auto"} height={"auto"} onClose={onClose}>
      <div className={styles.product}>
        <PhotosPanel images={product.images} alt={product.name} />
        <div className={styles.product__details}>
          <div className={styles.product__rating}>
            <Badge style={{ marginRight: 16 }}>
              <p className={styles.product__discount}>
                -{product.discount * 100} %
              </p>
            </Badge>
            <ProductRating value={product.rating} />
          </div>
          <div className={styles.product__description}>
            <h3>{product.name}</h3>
            <p className={styles.product__label}>
              SKU:{" "}
              <strong className={styles.product__common}>{product.sku}</strong>
            </p>
            <p className={styles.product__label}>
              Brand:{" "}
              <span className={styles.product__brand}>{product.brand}</span>
            </p>
          </div>
          <div className={styles.product__price}>
            <Price
              value={product.price}
              style={{ marginRight: 8, fontSize: "1.6rem" }}
            />
            <Price variant="strikethrough" value={product.originalPrice} />
          </div>
          <div className={styles.product__specification}>
            <p>
              <span className={styles.product__option}>Colors</span>
              {"  "}
              <strong>{color}</strong>
            </p>
            <ColorsPanel
              colors={product.colors}
              selected={colorIndex}
              onClick={(i) => setColorIndex(i)}
              radius={16}
              radiusSelected={18}
            />
          </div>
          <div className={styles.product__specification}>
            <p className={styles.product__option}>Size</p>
            <SizesPanel
              onClick={(i) => setSizeIndex(i)}
              sizes={product.sizes}
              selected={sizeIndex}
              radius={18}
              fontSize={16}
              spacing={16}
            />
            <strong>Size Guide</strong>
          </div>
          <div className={styles.product__specification}>
            <p className={styles.product__option}>Quantity</p>
            <NumericInput
              value={quantity}
              onChange={(e) => setQuantity(+e.currentTarget.value)}
              onIncrement={() => setQuantity((value) => value + 1)}
              onDecrement={() => setQuantity((value) => value - 1)}
            />
          </div>
          <div className={styles.product__cta}>
            <FavoriteButton onClick={console.log} />
            <Button onClick={handleAdd} variant="light">
              Add to cart
            </Button>
            <Button onClick={handleAdd}>Buy Now</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductPopup;
