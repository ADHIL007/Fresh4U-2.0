import React from 'react';
import './Grids.css'; // Import your CSS file
import Grid from './Grid';

function Grids() {
  return (
    <div className="grid-container">
   <Grid/>
   <Grid/><Grid/>
    </div>
  );
}

export default Grids;
