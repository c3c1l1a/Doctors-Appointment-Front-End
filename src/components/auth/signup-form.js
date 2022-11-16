import React from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/signup';
import './auth.css';

function SignupForm() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    dispatch(signup(data));
  };
  return (
    <div className="form-container" onSubmit={onSubmit}>
      <form className="auth-form">
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

export default SignupForm;
