import { faLock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.toolbar}>
        <ul className={styles.toolbar__list}>
          <li className={styles.toolbar__item}>
            <a href="#">Client Services</a>
          </li>
          <li className={styles.toolbar__item}>
            <a href="#">FAQ</a>
          </li>
          <li className={styles.toolbar__item}>
            <a href="#">About</a>
          </li>
          <li className={styles.toolbar__item}>
            <a href="#">Eng</a>
          </li>
        </ul>
      </div>
      <div className={styles.middlebar}>
        <div className={styles.middlebar__left}>
          <a href="/">
            <h1 className={styles.middlebar__brand}>Blizoo.</h1>
          </a>
          <FontAwesomeIcon className={styles.middlebar__icon} icon={faSearch} />
        </div>
        <div className={styles.middlebar__right}>
          <a className={styles.middlebar__item} href="#">
            Man's
          </a>
          <a className={styles.middlebar__item} href="#">
            Women's
          </a>
          <FontAwesomeIcon className={styles.middlebar__icon} icon={faHeart} />
          <FontAwesomeIcon className={styles.middlebar__icon} icon={faUser} />
          <button className={styles.middlebar__button}>
            <FontAwesomeIcon
              className={styles.middlebar__symbol}
              icon={faLock}
            />
            Cart (0)
          </button>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a href="#">Top</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Bottom</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Swim wear</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Watch</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Shoes</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Bag</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Accessories</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Sports</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Cosmetic</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Muslim Wear</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
