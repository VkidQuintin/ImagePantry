"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Ensure db is correctly initialized
import { collection, getDocs } from 'firebase/firestore';
import styles from '../styles/InventoryList.module.css';

const InventoryList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, "items");
        const itemSnapshot = await getDocs(itemsCollection);
        const itemList = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemList);
      } catch (err) {
        setError('Failed to load inventory items. Please try again.');
      }
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Inventory List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className={styles.inventoryList}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            {item.image && <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
