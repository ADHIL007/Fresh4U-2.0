// ContactsBar.js

import React from 'react';
import './ConactsBar.css';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

function ContactsBar() {
  // Placeholder data, replace with your actual contact information
  const phoneNumber = '+91 983892372';
  const location = 'Kerala, India';
  const email = 'shop@email.com';

  return (
    <div className='contactsBar'>
      <ul className='contacts'>
        <li>
          <PhoneRoundedIcon /> {phoneNumber}
        </li>
        <li >
          <LocationOnRoundedIcon /> {location}
        </li>
        <li className='email' >
          <EmailRoundedIcon />
          <a href={`mailto:${email}`}>{email}</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactsBar;
