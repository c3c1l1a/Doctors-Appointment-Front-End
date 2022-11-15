import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import closeIcon from '../../images/close-icon.svg';
import humburgerMenu from '../../images/humburger-menu.svg';
import './navigation.css';

function Navigation() {
  const [navState, setNavState] = useState('hidden');
  const [menuState, setMenuState] = useState('close');

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

        <NavLink className="nav-bar-logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/doctors" className={(isActive) => `nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Doctors
        </NavLink>
        <NavLink to="/book-appointment" className={(isActive) => `nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Book Appointment
        </NavLink>
        <NavLink to="/appointments" className={(isActive) => `nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Appointments
        </NavLink>
        <NavLink to="/add-new-doctor" className={(isActive) => `nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Add Doctor
        </NavLink>
        <NavLink to="/delete-doctor" className={(isActive) => `nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Delete Doctor
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
