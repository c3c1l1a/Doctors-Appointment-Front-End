import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppointmentsList from './components/appointments/appointments-list';
import BookAppointment from './components/appointments/book-appointment';
import Splash from './components/splash/splash';
import NewDoctorForm from './components/doctors/new-doctor-form';
import DeleteDoctor from './components/doctors/delete-doctor';
import DoctorsList from './components/doctors/doctors-list';
import LoginForm from './components/auth/login-form';
import SignupForm from './components/auth/signup-form';
import Navigation from './components/nav/navigation';
import Topbar from './components/topbar/topbar';
import { getDoctors } from './redux/doctors/doctors';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const [userSession, setUserSession] = useState(() => {
    const info = JSON.parse(localStorage.getItem('user'));
    if (info) return info;
    return { error: 'Not logged in' };
  });

  useEffect(() => {
    (async () => {
      await dispatch(getDoctors(userSession.token));
    })();
  }, []);

  return (
    <div className="app">
      <div className="topbar-container">
        <Navigation userSession={userSession} />
        <Topbar userSession={userSession} setUserSession={setUserSession} />
      </div>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/doctors-list" element={<DoctorsList userSession={userSession} />} />
        <Route exact path="/book-appointment" element={<BookAppointment userSession={userSession} />} />
        <Route exact path="/appointments" element={<AppointmentsList userSession={userSession} />} />
        <Route exact path="/add-new-doctor" element={<NewDoctorForm userSession={userSession} />} />
        <Route exact path="/delete-doctor" element={<DeleteDoctor />} />
        <Route exact path="/login" element={<LoginForm setUserSession={setUserSession} userSession={userSession} />} />
        <Route exact path="/signup" element={<SignupForm userSession={userSession} />} />
      </Routes>
    </div>
  );
}

export default App;
