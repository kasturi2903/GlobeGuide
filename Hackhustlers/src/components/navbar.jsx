import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='title'>Globe Guide</h3>
      <ul>
       
        <li><a href="/activities">Activities</a></li>
     
        <li><a href="/hotels">Hotels</a></li>
        <li><a href="/trips">Trips</a></li>
        <li><a href="/signup">Sign up</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
