import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentsList from './components/appointments/appointments-list';
import BookAppointment from './components/appointments/book-appointment';
import NewDoctorForm from './components/doctors/new-doctor-form';
import DeleteDoctor from './components/doctors/delete-doctor';
import DoctorsList from './components/doctors/doctors-list';
import Login from './components/auth/login';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<DoctorsList />} />
        <Route exact path="/book-appointment" element={<BookAppointment />} />
        <Route exact path="/appointments" element={<AppointmentsList />} />
        <Route exact path="/add-new-doctor" element={<NewDoctorForm />} />
        <Route exact path="/delete-doctor" element={<DeleteDoctor />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
