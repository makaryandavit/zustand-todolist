import React from "react";
import styles from "../../global.module.css";

const Item = (props) => {
  const { value, deleteItem } = props;

  return (
    <li className={styles.item}>
      <p>{value}</p>
      <button className={styles.btnDelete} onClick={() => {
        deleteItem()
      }}>Delete</button>
    </li>
  );
};

export { Item };
