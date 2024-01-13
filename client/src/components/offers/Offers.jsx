import React from 'react';
import './Offers.css'; // Import your CSS file

// Import images using require
import image1 from '../../assets/backgrounds/btn2.jpg';
import image2 from '../../assets/backgrounds/btn1.jpg';

function OfferCard({ title, description, imageUrl }) {
  return (
    <div className="offer-card">
      <img className="offer-image" src={imageUrl} alt={title} />
      <div className="offer-details">
        <h3 className="offer-title">{title}</h3>
        <p className="offer-description">{description}</p>
        <button className="offer-button">Shop Now</button>
      </div>
    </div>
  );
}

function Offers() {
  const offersData = [
    {
      title: 'Special Offer 1',
      description: 'Exclusive discounts on various products.',
      imageUrl: image1, // Use the imported image
    },
    {
      title: 'Limited Time Deal',
      description: 'Get amazing deals for a short period.',
      imageUrl: image2, // Use the imported image
    },
    // Add more offer data as needed
  ];

  return (
    <div className="offers-container">
      {offersData.map((offer, index) => (
        <OfferCard key={index} {...offer} />
      ))}
    </div>
  );
}

export default Offers;
