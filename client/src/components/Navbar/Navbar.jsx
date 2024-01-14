// Navbar.js
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo-light.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ContactsBar from "./ContactsBar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from 'prop-types';
import store from "../../Redux/store";
import Badge from '@mui/material/Badge';
function Navbar({}) {
  const [iconColor, setIconColor] = useState("#FF0000");
  const [menuClicked, setMenuClicked] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const topSectMain = document.getElementById("Topsectmain");
      const navbar = document.querySelector('.navbar');

      if (topSectMain && navbar) {
        const topSectMainRect = topSectMain.getBoundingClientRect();
        setShowContactBar(topSectMainRect.top >= navbar.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconColor((prevColor) =>
        prevColor === "#FF0000" ? "#38B6FF" : "#FF0000"
      );
    }, 400);

    return () => clearInterval(interval);
  }, []);


  return (
<div className={showContactBar?"navbar-container":"navbar-container navbar-container-moveUp "}>


      {showContactBar && <ContactsBar />}
      <div className={`navbar${!showContactBar ? ' moveUp' : ''}`}>
        <ul>
          <li id="logo">
            <a href="/">
              <img src={logo} alt="Fresh Logo" className={`${!showContactBar && 'logoMoveUP'}`}/>
            </a>
          </li>
        </ul>
        <div className="nav-links">
          <div>
            <ul
              className={
                menuClicked ? "nav-links-lists-active" : "nav-links-lists"
              }
            >
              <li id="home">
                <a href="/home">
                  <HomeRoundedIcon />
                  Home
                </a>
              </li>
              <li id="shop">
                <a href="#shop">
                  <StoreRoundedIcon />
                  Shop
                </a>
              </li>
              <li id="categories">
                <a href="" style={{ color: "#1abc9c" }}>
                  Categories
                </a>
              </li>
              <li id="specialOffers">
                <a href="/" style={{ color: iconColor }}>
                  <LocalOfferRoundedIcon />
                  Special Offers
                </a>
              </li>
              <li id="support">
              <a href="/">
                <SupportAgentRoundedIcon />{menuClicked ? "Support" : null}
              </a>
            </li>
            </ul>
          </div>
          <ul className="nav-links-2">
            <li id="account">
              <a href="/" >
                <AccountCircleRoundedIcon color={store.getState().loggedIn ? "primary" : "disabled"}/>
                <span className="account">Account</span>
              </a>
            </li>
            <li id="cart">
              <a href="/">
                <Badge badgeContent={store.getState().cart.length-1} color="error">
                <ShoppingCartRoundedIcon />
                </Badge>
              </a>
            </li>

            <li id="menuIcon" className="menuIcon">
              <a>
                {menuClicked ? (
                  <MenuOpenIcon onClick={() => setMenuClicked(!menuClicked)} />
                ) : (
                  <MenuIcon onClick={() => setMenuClicked(!menuClicked)} />
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


Navbar.propTypes = {
  LOGIN_STATUS: PropTypes.bool.isRequired,
};