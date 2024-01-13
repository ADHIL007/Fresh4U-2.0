import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import './Grids.css'
import tomato from  '../../assets/backgrounds/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg'
function ProdCards({name,desc,price}) {
  const [quantity, setQuantity] = useState(1);
  ProdCards.propTypes = {
    name: PropTypes.string.isRequired, // Requires name to be a string and is required
    desc: PropTypes.string.isRequired, // Requires desc to be a string and is required
    price: PropTypes.number.isRequired, // Requires price to be a number and is required
  };

  const incrementQuantity = () => {
  if(quantity <20){
    setQuantity(quantity + 1);

  }


  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  return (
    <div className="product-card">
      <div className="imageDiv">
        <img className="product-image" src={tomato} alt="Product" />
      </div>

      <h2 className="product-title">{name}</h2>
      <div className="quantity-control">
        <button className="quantity-button dec" onClick={decrementQuantity}>-</button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-button inc" onClick={incrementQuantity}>+</button>
      </div>

      <div className="bottomSect">
        <p className="price">{"$" + price}</p>
        <button className="add-to-cart-button">Add to Cart <ShoppingCartIcon /></button>
      </div>
    </div>
  );
}

export default ProdCards


