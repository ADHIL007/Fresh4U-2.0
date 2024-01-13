import React from 'react'
import Carousal from '../../components/carousal/Carousal'

import Offers from '../../components/offers/offers'

import Cards from '../../components/Grids/Cards'

function Home() {
  return (
    <div>
        <Carousal/>
        <Offers/>
        <Cards sectionName="Featured Products"/>
    </div>
  )
}

export default Home