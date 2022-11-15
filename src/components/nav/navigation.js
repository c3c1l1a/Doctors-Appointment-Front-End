import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import closeIcon from '../../images/close-icon.svg';
import humburgerMenu from '../../images/humburger-menu.svg';
import './navigation.css';

function Navigation() {
  const [navState, setNavState] = useState('flex');
  const [menuState, setMenuState] = useState('hidden');

  const close = () => {
    setNavState(() => {
      setMenuState(() => 'flex');
      return 'hidden';
    });
  };

  const open = () => {
    setMenuState(() => {
      setNavState(() => 'flex');
      return 'hidden';
    });
  };

  return (
    <div>
      <button className={menuState} type="button" onClick={() => open()}>
        <img src={humburgerMenu} alt="Close Icon" />
      </button>

      <nav className={`nav-bar-with-logo ${navState}`}>
        <button className="nav-bar-close" type="button" onClick={() => close()}>
          <img src={closeIcon} alt="Close Icon" />
        </button>

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
