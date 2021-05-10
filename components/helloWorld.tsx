import styles from "./helloWorld.module.scss";

const HelloWorld = (): JSX.Element => {
  return (
    <div className={styles.hello}>
      Hello World, I am being styled using SCSS Modules!
    </div>
  );
};

export default HelloWorld;
