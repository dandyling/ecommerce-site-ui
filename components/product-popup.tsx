import { Product } from "../pages/api/products";
import Modal from "./modal";
import { PhotosPanel } from "./photos-panel";
import styles from "./product-popup.module.scss";

interface Props {
  product: Product;
  onClose(): void;
}

export const ProductPopup = (props: Props) => {
  const { product, onClose } = props;
  return (
    <Modal width={800} height={600} onClose={onClose}>
      <div className={styles.product}>
        <PhotosPanel images={product.images} alt={product.name} />
        <div className={styles.product__details}></div>
      </div>
    </Modal>
  );
};

export default ProductPopup;
