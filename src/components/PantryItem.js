import React from 'react';
import styles from '../styles/PantryItem.module.css';

const PantryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{item.name}</h3>
      <p className={styles.quantity}>{item.quantity}</p>
    </div>
  );
};

export default PantryItem;
