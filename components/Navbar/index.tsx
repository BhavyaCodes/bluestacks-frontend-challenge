import { Dispatch, SetStateAction } from "react";
import styles from "./Navbar.module.scss";

import { Tab } from "pages";
type Props = { tab: Tab; setTab: Dispatch<SetStateAction<Tab>> };

function Navbar({ tab, setTab }: Props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li
          aria-selected={tab === "upcoming"}
          className={`${styles.nav__li} ${
            tab === "upcoming" && styles.nav__li__active
          }`}
          onClick={() => {
            setTab("upcoming");
          }}
          data-testid="upcoming-tab"
        >
          Upcoming Campaigns
        </li>
        <li
          aria-selected={tab === "live"}
          className={`${styles.nav__li} ${
            tab === "live" && styles.nav__li__active
          }`}
          onClick={() => {
            setTab("live");
          }}
          data-testid="live-tab"
        >
          Live Campaigns
        </li>
        <li
          aria-selected={tab === "past"}
          className={`${styles.nav__li} ${
            tab === "past" && styles.nav__li__active
          }`}
          onClick={() => {
            setTab("past");
          }}
          data-testid="past-tab"
        >
          Past Campaigns
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
