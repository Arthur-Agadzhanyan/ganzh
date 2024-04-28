import React from "react";
import styles from "./loader.module.scss";

interface Props {}

function Loader(props: Props) {
  const {} = props;

  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.circle}></div>
        <div className={`${styles.circle} ${styles.transparent}`}></div>
      </div>
    </div>
  );
}

export default Loader;
