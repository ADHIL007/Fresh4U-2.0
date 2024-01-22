import React from 'react';
import PropTypes from 'prop-types';
import ProdCards from './ProdCards';
import './Grids.css';

function Cards({ sectionName }) {
  Cards.propTypes = {
    sectionName: PropTypes.string.isRequired
  };

  return (
    <div>

      <div className='CardHeading' id='Topsectmain'>
        <h2>{sectionName}</h2>
      </div>
      <div className='cardMain'>

        <div className='Cards'>

          <ProdCards name="Product 1" desc="Description 1" price={20.99} id="1" />
          <ProdCards name="Product 2" desc="Description 2" price={20.99} id="2" />
          <ProdCards name="Product 3" desc="Description 3" price={20.99}  id="3"/>
          <ProdCards name="Product 4" desc="Description 4" price={20.99}  id="4"/>
          <ProdCards name="Product 5" desc="Description 5" price={20.99} id="5" />
          <ProdCards name="Product 6" desc="Description 6" price={20.99}  id="6"/>
          <ProdCards name="Product 4" desc="Description 4" price={20.99}  id="4"/>
          <ProdCards name="Product 5" desc="Description 5" price={20.99} id="5" />
          <ProdCards name="Product 6" desc="Description 6" price={20.99}  id="6"/>  <ProdCards name="Product 4" desc="Description 4" price={20.99}  id="4"/>
          <ProdCards name="Product 5" desc="Description 5" price={20.99} id="5" />
          <ProdCards name="Product 6" desc="Description 6" price={20.99}  id="6"/>
        </div>
      </div>
    </div>
  );
}

export default Cards;
