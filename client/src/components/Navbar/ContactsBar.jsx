// ContactsBar.js

import React from 'react';
import './ContactsBar.css';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

function ContactsBar() {
  const phoneNumber = '+91 983892372';
  const location = 'Kerala, India';
  const email = 'shop@email.com';


  return (
    <div className='contactsBar'>
      <ul className='contacts'>
        <li >
          <PhoneRoundedIcon fontSize='small'/> {phoneNumber}
        </li>
        <li >
          <LocationOnRoundedIcon fontSize='small' /> {location}
        </li>
        <li>
          <EmailRoundedIcon fontSize='small' />
          {email}
        </li>

      </ul>
    </div>
  );
}

export default ContactsBar;
