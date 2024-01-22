import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import store from "./Redux/store";
import Cookies from 'js-cookie';
import AppRoutes from "./Routes";

function App() {
  useEffect(() => {
    const getCookie = () => {
      const cookieValue = Cookies.get('LOGIN_STATUS');
      if (cookieValue === 'true') {
        store.dispatch({ type: "LOGIN" });
      }
    };

    getCookie();
  }, []);



  const isHomeCheck = window.location.pathname === '/signup'; // Fix typo in 'window'

  return (
    <>
      {!isHomeCheck && <Navbar />} {/* Only show Navbar if isLoggedIn */}
      <AppRoutes />
    </>
  );
}

export default App;
