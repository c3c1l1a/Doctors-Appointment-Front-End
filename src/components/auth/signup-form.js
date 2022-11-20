import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { signup } from '../../redux/auth/signup';
import './auth.css';

function SignupForm({ userSession }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userSession.token && location.pathname === '/signup') navigate('/');
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    dispatch(signup(data));
    navigate('/login');
  };
  return (
    <div className="form-container">
      <form className="auth-form" onSubmit={onSubmit}>
        <input className="form-input" type="text" placeholder="Name" name="name" />
        <input className="form-input" type="email" placeholder="Email" name="email" />
        <input className="form-input" type="text" placeholder="Role" name="role" />
        <input className="form-input" type="text" placeholder="Birth Date" name="birth_date" />
        <input className="form-input" type="text" placeholder="Gender" name="gender" />
        <input className="form-input" type="password" placeholder="Password" name="password" />
        <input className="form-input" type="password" placeholder="Password confirmation" name="password_confirmation" />
        <button className="submit-button" type="submit">Sign up</button>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default SignupForm;
