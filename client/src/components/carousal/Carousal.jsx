import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './carousal.css';
import bgb1 from '../../assets/backgrounds/nathan-dumlao-bRdRUUtbxO0-unsplash.jpg';
import bgb2 from '../../assets/backgrounds/bgb1.jpg';
import bgb3 from '../../assets/backgrounds/bgb3.jpeg';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import store from '../../Redux/store';
import Login from '../Login/Login';

const Carousal = ({LOGIN_STATUS  }) => {

  const carouselData = [
    {
      "title": "Fresh Vegetables",
      "description": "Explore our farm-fresh vegetables for a healthy lifestyle!",
      "additionalText": "Get 10% off on your first order with code: FRESH10",
      "imageURL": bgb1,
      "link": "https://example.com/fresh-vegetables"
    },
    {
      "title": "Seasonal Specials",
      "description": "Discover seasonal vegetables to add variety to your meals.",
      "additionalText": "Limited-time offer: Free recipe e-book with every purchase!",
      "imageURL": bgb2,
      "link": "https://example.com/seasonal-specials"
    },
    {
      "title": "Organic Choices",
      "description": "Choose from our organic selection for a sustainable and eco-friendly option.",
      "additionalText": "Join our loyalty program for exclusive discounts and rewards.",
      "imageURL": bgb3,
      "link": "https://example.com/organic-choices"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const handleLogin = () => {

    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="carousel-container">
      {carouselData.map((item, index) => (
        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
          <img src={item.imageURL} alt={item.title} />
          <div className="carousel-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className="additional-text">{item.additionalText}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </div>
        </div>
      ))}
     {!LOGIN_STATUS && (
  <div className="login-button-container">
    {isLoggedIn ? <Login /> : (
      <Button
        variant="contained"
        style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}
        startIcon={<LockIcon />}
        onClick={handleLogin}
      >
        Login
      </Button>
    )}
  </div>
)}

    </div>
  );
};

Carousal.propTypes = {
  LOGIN_STATUS: PropTypes.bool.isRequired,
};

export default Carousal;
