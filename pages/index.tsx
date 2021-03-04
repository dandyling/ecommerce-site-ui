import Head from "next/head";
import styles from "../styles/index.module.scss";
import Header from "./../components/header";
import Gallery from "./../components/gallery";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "./api/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res: any = await fetch("/api/products");
    const items: Product[] = await res.json();
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blizoo. Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Image
          layout="intrinsic"
          width={1899}
          height={532}
          src="/images/cover-image.jpg"
          alt="Women fashion"
        />
        <div className={styles.main__gallery}>
          <Gallery products={products} />
        </div>
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
