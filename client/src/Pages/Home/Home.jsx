import React from 'react';

import Carousal from '../../components/carousal/Carousal';
import Offers from '../../components/offers/offers';
import Cards from '../../components/Grids/Cards';
import ItemsCircle from '../../components/ItemsCircle/itemsCircle';




function Home() {
  return (
    <div>
      <Carousal />
      <Offers />
      <ItemsCircle />
      <Cards sectionName="Featured Products" />


    </div>
  );
}


export default Home;
