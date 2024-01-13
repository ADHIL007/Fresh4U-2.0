// Grid.js

import React, { useState } from 'react';
import './Grids.css';

function Grid() {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  return (
    <div className="grid-item">
      <img
        className="product-image"
        src="https://via.placeholder.com/200" // Replace with your actual image source
        alt="Product"
      />
      <div className="product-details">
        <h3 className="product-title">Product Name</h3>
        <p className="product-description">Product Description goes here.</p>
        <p className="product-price">$19.99</p>

      </div>
    </div>
  );
}

export default Grid;
