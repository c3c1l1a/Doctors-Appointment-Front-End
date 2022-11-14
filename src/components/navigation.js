import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navigation() {
  return (
    <div>
      <nav className="container-md nav-test">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid w-50" />
        </Link>
        <div className="row">
          <Link className="col" to="/doctors">Doctors</Link>
        </div>
        <div className="row">
          <Link to="/appointments">Appointments</Link>
        </div>
        <div className="row">
          <Link to="/add-new-doctor">Add Doctor</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
