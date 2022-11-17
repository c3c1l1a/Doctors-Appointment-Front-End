import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './topbar.css';

function TopBar() {
  const [loginState, setloginState] = useState('hidden');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/signup') setloginState('');
    else { setloginState('hidden'); }
  }, [location]);

  return (
    <div className="topbar">
      <NavLink to="/signup" className={(isActive) => `auth-link${isActive.isActive ? ' hidden' : ''}`}>
        Signup
      </NavLink>

      <NavLink to="/login" className={(isActive) => `${loginState} auth-link${isActive.isActive ? ' hidden' : ''}`}>
        Login
      </NavLink>
    </div>
  );
}

export default TopBar;
