// src/app/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css'; // Ensure this path is correct

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to the Image/Picture Pantry Manager</h1>
      </div>
    </div>
  );
};

export default Home;
