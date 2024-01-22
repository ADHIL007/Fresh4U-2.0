import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from "prop-types";
import "./Grids.css";
import tomato from "../../assets/backgrounds/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg";
import store from "../../Redux/store";


function ProdCards({ id, name, desc, price }) {
  const [quantity, setQuantity] = useState(0);



  const incrementQuantity = () => {
    if (quantity < 20 ) {
      setQuantity(quantity + 1);
    }
    if(quantity==0){
      store.dispatch(
        {
          type: "ADD_CART",
          payload: { id: id, name: name, price: price, quantity: quantity },
        },
        () => {
          console.log(store.getState().cart.length);
        }
      );
    }



  };

  const decrementQuantity = () => {
    if (quantity > 0 ) {
      setQuantity(quantity - 1);

    }
    if(quantity == 1){
      store.dispatch({
        type: "REMOVE_CART",
        payload: { id: id },
      }, () => {
        console.log(store.getState().cart.length);
      });

  }
}

  const handleAddToCart = () => {




    incrementQuantity();
  };

  const handleRemoveFromCart = () => {
    setQuantity(0);

      store.dispatch({ type: "REMOVE_CART", payload: { id: id } }, () => {
        console.log(store.getState().cart.length);
      });


  };

  return (
    <div className="product-card">
      <div className="imageDiv">
        <img className="product-image" src={tomato} alt="Product" />
      </div>

      <h2 className="product-title">{name}</h2>
      <div className="quantity-control">
        <button className="quantity-button dec" onClick={decrementQuantity}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-button inc" onClick={incrementQuantity}>
          +
        </button>
      </div>

      <div className="bottomSect">
        <p className="price">{"$" + price}</p>

        {quantity > 0 ? (
          <button
            className="add-to-cart-button"
            style={{ backgroundColor: "#ff1605" }}
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Quick add <ShoppingCartIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProdCards;

ProdCards.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};


