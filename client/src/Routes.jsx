import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Signup from './Pages/Home/Signup/Signup';


function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  );
}

export default AppRoutes;
