import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Countdown } from "../components/countdown";
import CouponsPanel from "../components/coupons-panel";
import ProductPopup from "../components/product-popup";
import { StoreProvider } from "../components/store/store";
import { TabBar } from "../components/tabbar";
import styles from "../styles/index.module.scss";
import Gallery from "./../components/gallery";
import Header from "./../components/header";
import { Coupon } from "./api/coupons";
import { Product } from "./api/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [tab, setTab] = useState(0);
  const [showProduct, setShowProduct] = useState(true);
  const [product, setProduct] = useState<Product>(null);

  const fetchProducts = async () => {
    const res: any = await fetch("/api/products");
    const items: Product[] = await res.json();
    setProducts(items);
  };

  const fetchCoupons = async () => {
    const res: any = await fetch("/api/coupons");
    const items: Coupon[] = await res.json();
    setCoupons(items);
  };

  useEffect(() => {
    fetchProducts();
    fetchCoupons();
  }, []);

  const handleTabChange = (i: number) => {
    setTab(i);
  };

  const toggleProductDialog = () => {
    setShowProduct((value) => !value);
  };

  const handleClick = (p: Product) => {
    setProduct(p);
    setShowProduct(true);
  };

  return (
    <StoreProvider>
      <div className={styles.container}>
        <Head>
          <title>Blizoo. Ecommerce</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
          <section className={styles.main__carousel}>
            <Image
              layout="intrinsic"
              width={1899}
              height={532}
              src="/images/cover-image.jpg"
              alt="Women fashion"
            />
          </section>
          <section className={styles.main__segment}>
            <div className={styles.main__flashsale}>
              <FontAwesomeIcon
                className={styles.main__lightning}
                icon={faBolt}
              />
              <h2 className={styles.main__flashtitle}>Flash Sale</h2>
              <Countdown />
            </div>
            <Gallery onClick={handleClick} products={products} />
          </section>
          <section className={styles.main__segment}>
            <a href="#" className={styles.main__expand}>
              More Voucher
            </a>
            <CouponsPanel coupons={coupons} />
          </section>
          <section className={styles.main__segment}>
            <div className={styles.main__products}>
              <TabBar
                onChange={handleTabChange}
                selected={tab}
                tabs={["Best Seller", "New Product"]}
              />
              <a href="#" className={styles.main__expand}>
                All Product
              </a>
            </div>
            <Gallery onClick={handleClick} products={products} />
          </section>
        </main>
        <footer className={styles.footer}>
          <a
            className={styles.footer__link}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright by Blizoo.
          </a>
        </footer>
        {showProduct && product && (
          <ProductPopup product={product} onClose={toggleProductDialog} />
        )}
      </div>
    </StoreProvider>
  );
}
