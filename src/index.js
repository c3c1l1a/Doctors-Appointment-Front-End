import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentsList from './components/appointments/appointments-list';
import NewDoctorForm from './components/doctors/new-doctor-form';
import DoctorsList from './components/doctors/doctors-list';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/doctors" element={<DoctorsList />} />
        <Route exact path="/appointments" element={<AppointmentsList />} />
        <Route exact path="/add-new-doctor" element={<NewDoctorForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
