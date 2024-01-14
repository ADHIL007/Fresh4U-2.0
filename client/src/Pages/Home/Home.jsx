import React from 'react';
import PropTypes from 'prop-types';
import Carousal from '../../components/carousal/Carousal';
import Offers from '../../components/offers/offers';
import Cards from '../../components/Grids/Cards';

function Home({ LOGIN_STATUS }) {
  return (
    <div>
      <Carousal LOGIN_STATUS={LOGIN_STATUS}/>
      <Offers />
      <Cards sectionName="Featured Products" />

    </div>
  );
}

// Adding prop validation
Home.propTypes = {
  LOGIN_STATUS: PropTypes.bool.isRequired,
};

export default Home;
