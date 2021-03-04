import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "./../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blizoo. Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>Aws</main>

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
