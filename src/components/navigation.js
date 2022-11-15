import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './navigation.css';

function Navigation() {
  return (
    <div>
      <nav className="nav-bar-with-logo">
        <Link className="nav-bar-logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link className="nav-bar-item nav-item-current" to="/doctors">Doctors</Link>
        <Link className="nav-bar-item" to="/appointments">Appointments</Link>
        <Link className="nav-bar-item" to="/add-new-doctor">Add Doctor</Link>
      </nav>
    </div>
  );
}

export default Navigation;
