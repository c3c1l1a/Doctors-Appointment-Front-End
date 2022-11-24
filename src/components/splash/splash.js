import React from 'react';
import { NavLink } from 'react-router-dom';
import './splash.css';
import logo from '../../images/logo.png';

function Splash() {
  return (
    <div className="splash">
      <img className="logo" src={logo} alt="Logo" />
      <div className="sign">
        <NavLink to="/signup">
          <button className="signup-btn" type="button">Signup</button>
        </NavLink>
        <NavLink to="/login">
          <button className="signup-btn" type="button">Login</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Splash;
