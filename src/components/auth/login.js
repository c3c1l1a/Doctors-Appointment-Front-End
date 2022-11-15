import React from 'react';
import LoginForm from './login-form';
import Navigation from '../nav/navigation';
import './auth.css';

function Login() {
  return (
    <div className="app">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default Login;
