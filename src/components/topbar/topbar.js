import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import './topbar.css';

function TopBar({ userSession, setUserSession }) {
  const [loginLink, setLoginLink] = useState('hidden');
  const [signoutLink, setSignoutLink] = useState('hidden');
  const [authlinks, setAuthLinks] = useState();
  const location = useLocation();

  useEffect(() => {
    if (userSession.token) {
      setAuthLinks('hidden');
      setSignoutLink('');
    } else {
      setAuthLinks('');
      setSignoutLink('hidden');
      if (location.pathname === '/signup') setLoginLink('');
      else { setLoginLink('hidden'); }
    }
  }, [location]);

  const signUserOut = () => {
    setAuthLinks('');
    setSignoutLink('hidden');

    localStorage.clear();
    setUserSession({ error: 'Not logged in' });
  };

  return (
    <div className="topbar">
      <NavLink to="/signup" className={(isActive) => `${authlinks} auth-link${isActive.isActive ? ' hidden' : ''}`}>
        Signup
      </NavLink>

      <NavLink
        to="/login"
        className={(isActive) => `${authlinks} ${loginLink} auth-link${isActive.isActive ? ' hidden' : ''}`}
      >

        Login
      </NavLink>

      <NavLink to="/login" className={signoutLink} onClick={() => signUserOut()}>
        Sign out
      </NavLink>
    </div>
  );
}

TopBar.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  setUserSession: PropTypes.func.isRequired,
};

export default TopBar;
