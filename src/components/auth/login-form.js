import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../../redux/auth/login';
import './auth.css';

function LoginForm({ setUserSession, userSession }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupSuccess = useSelector((state) => state.signup.success);
  const location = useLocation();

  useEffect(() => {
    if (userSession.token && location.pathname === '/login') navigate('/');
  }, [location]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    const response = await dispatch(login(data));
    if ('token' in response.payload) setUserSession(response.payload);
    navigate('/');
  };
  return (
    <div className="form-container">
      <form className="auth-form" onSubmit={onSubmit}>
        <p className="success-message">{ signupSuccess }</p>
        <input className="form-input" type="email" placeholder="Email" name="email" />
        <input className="form-input" type="password" placeholder="Password" name="password" />
        <button className="submit-button" type="submit">Login</button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  setUserSession: PropTypes.func.isRequired,
};

export default LoginForm;
