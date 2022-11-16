import React from 'react';
import SignupForm from './signup-form';
import Navigation from '../nav/navigation';
import './auth.css';

function Signup() {
  return (
    <div className="app">
      <Navigation />
      <SignupForm />
    </div>
  );
}

export default Signup;
