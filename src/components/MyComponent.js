// src/components/MyComponent.js
import React from 'react';
import styles from '../styles/MyComponent.module.css';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Component</h2>
      <p className={styles.paragraph}>This is a new component styled with CSS Modules.</p>
    </div>
  );
};

export default MyComponent;
