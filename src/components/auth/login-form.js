import React from 'react';
import './auth.css';

function LoginForm() {
  return (
    <div className="app">
      <form className="auth-form">
        <input className="form-input" type="text" placeholder="Username" name="username" />
        <button className="submit-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
