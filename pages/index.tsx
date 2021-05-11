import Header from "components/Header";
import styles from "./Index.module.scss";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Manage Campaigns</h1>
      </div>
    </div>
  );
}
