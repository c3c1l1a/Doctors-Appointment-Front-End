import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import closeIcon from '../../images/close-icon.svg';
import humburgerMenu from '../../images/humburger-menu.svg';
import './navigation.css';

function Navigation({ userSession }) {
  const [navState, setNavState] = useState('hidden');
  const [menuState, setMenuState] = useState('close');
  const [privatePage, setPrivatePage] = useState('hidden');

  useEffect(() => {
    if (userSession.token) {
      setPrivatePage('');
    } else { setPrivatePage('hidden'); }
  }, [userSession]);

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
        <img className="humburger-menu" src={humburgerMenu} alt="Humburger menu" />
      </button>

      <nav className={`nav-bar-with-logo ${navState}`}>
        <button className="nav-bar-close" type="button" onClick={() => close()}>
          <img src={closeIcon} alt="Close Icon" />
        </button>

        <NavLink className="nav-bar-logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/" className={(isActive) => `nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Doctors
        </NavLink>
        <NavLink to="/book-appointment" className={(isActive) => `${privatePage} nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Book Appointment
        </NavLink>
        <NavLink to="/appointments" className={(isActive) => `${privatePage} nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          My Appointments
        </NavLink>
        <NavLink to="/add-new-doctor" className={(isActive) => `${privatePage} nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Add Doctor
        </NavLink>
        <NavLink to="/delete-doctor" className={(isActive) => `${privatePage} nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Delete Doctor
        </NavLink>
        <NavLink to="/signup" className={(isActive) => `nav-bar-item${isActive.isActive ? ' nav-item-current' : ''}`}>
          Signup
        </NavLink>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default Navigation;
