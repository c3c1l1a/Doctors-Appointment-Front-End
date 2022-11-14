import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Logo</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/add-new-doctor">Add Doctor</Link>
      </nav>
    </div>
  );
}

export default Navigation;
