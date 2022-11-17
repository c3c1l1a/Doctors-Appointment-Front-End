import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/login';
import './auth.css';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupSuccess = useSelector((state) => state.signup.success);

  const onSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    dispatch(login(data));
    navigate('/');
  };
  return (
    <div className="form-container" onSubmit={onSubmit}>
      <form className="auth-form">
        <p className="success-message">{ signupSuccess }</p>
        <input className="form-input" type="email" placeholder="Email" name="email" />
        <input className="form-input" type="password" placeholder="Password" name="password" />
        <button className="submit-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
