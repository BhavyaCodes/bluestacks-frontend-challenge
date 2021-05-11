import { useState } from "react";
import Header from "components/Header";
import Navbar from "components/Navbar";
import styles from "./Index.module.scss";

export type Tab = "upcoming" | "live" | "past";

export default function Home() {
  const [tab, setTab] = useState<Tab>("upcoming");
  return (
    <div className="app">
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Manage Campaigns</h1>
        <Navbar tab={tab} setTab={setTab} />
      </div>
    </div>
  );
}
