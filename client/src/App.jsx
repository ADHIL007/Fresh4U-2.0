import React from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import store from "./Redux/store";

function App() {

  const LOGIN_STATUS = store.getState().loggedIn;

  return (
    <>
      <Navbar LOGIN_STATUS={LOGIN_STATUS} />
      <Home LOGIN_STATUS={LOGIN_STATUS} />
    </>
  );
}

export default App;
