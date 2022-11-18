import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppointmentsList from './components/appointments/appointments-list';
import BookAppointment from './components/appointments/book-appointment';
import NewDoctorForm from './components/doctors/new-doctor-form';
import DeleteDoctor from './components/doctors/delete-doctor';
import DoctorsList from './components/doctors/doctors-list';
import LoginForm from './components/auth/login-form';
import SignupForm from './components/auth/signup-form';
import Navigation from './components/nav/navigation';
import Topbar from './components/topbar/topbar';

import './App.css';

function App() {
  const [userSession, setUserSession] = useState(() => JSON.parse(localStorage.getItem('user')));

  return (
    <div className="app">
      <div className="topbar-container">
        <Navigation />
        <Topbar userSession={userSession} setUserSession={setUserSession} />
      </div>
      <Routes>
        <Route exact path="/" element={<DoctorsList />} />
        <Route exact path="/book-appointment" element={<BookAppointment />} />
        <Route exact path="/appointments" element={<AppointmentsList />} />
        <Route exact path="/add-new-doctor" element={<NewDoctorForm />} />
        <Route exact path="/delete-doctor" element={<DeleteDoctor />} />
        <Route exact path="/login" element={<LoginForm setUserSession={setUserSession} />} />
        <Route exact path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
