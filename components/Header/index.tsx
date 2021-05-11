import React from "react";
import styles from "./Header.module.scss";
import logo from "./logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt="bluestacks logo" className={styles.header__logo} />
      </div>
    </header>
  );
}

export default Header;
