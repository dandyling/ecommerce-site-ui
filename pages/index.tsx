import Head from "next/head";
import styles from "../styles/index.module.scss";
import Header from "./../components/header";
import Gallery from "./../components/gallery";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "./api/products";
import { Coupon } from "./api/coupons";
import CouponsPanel from "../components/coupons-panel";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);

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

  return (
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
          <Gallery products={products} />
        </section>
        <section className={styles.main__segment}>
          <CouponsPanel coupons={coupons} />
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
    </div>
  );
}
