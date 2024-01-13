import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo/logo-light.png';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ContactsBar from './ContactsBar';

function Navbar() {
  return (
    <div>
      <ContactsBar />
      <div className="navbar">
        <ul>
          <li>
            <a href="/">
              <img src={logo} alt="Fresh Logo" />
            </a>
          </li>
        </ul>

        <div className='nav-links'>
          <ul>
            <li>
              <a href="/">
                Home <HomeRoundedIcon />
              </a>
            </li>
            <li>
              <a href="/">
                Shop <StoreRoundedIcon />
              </a>
            </li>
            <li>
              <a href="/" style={{ color: '#38B6FF' }}>
                Categories
              </a>
            </li>
            <li>
              <a href="/">
                Special Offers<LocalOfferRoundedIcon />
              </a>
            </li>
            <li>
              <a href="/">
                My Account <AccountCircleRoundedIcon />
              </a>
            </li>
            <li>
              <a href="/">
                Cart <ShoppingCartRoundedIcon />
              </a>
            </li>
            <li>
              <a href="/">
                Support <SupportAgentRoundedIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;