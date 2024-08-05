// src/app/Inventory.js
import React from 'react';
import Navbar from '../components/Navbar';
import InventoryList from '../components/InventoryList';
import '../styles/globals.css'; // Ensure this path is correct

const Inventory = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <InventoryList />
      </div>
    </div>
  );
};

export default Inventory;
