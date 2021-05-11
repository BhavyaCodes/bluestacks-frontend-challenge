import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li className={`${styles.nav__li} ${styles.nav__li__active}`}>
          Upcoming Campaigns
        </li>
        <li className={styles.nav__li}>Live Campaigns</li>
        <li className={styles.nav__li}>Past Campaigns</li>
      </ul>
    </nav>
  );
}

export default Navbar;
