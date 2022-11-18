import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './appointments.css';

function BookAppointment({ userSession }) {
  const [date, setDate] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const onChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    if (!userSession && location.pathname === '/book-appointment') navigate('/login');
  }, [location]);

  return (
    <div className="book-appointment-overlay">
      <div className="book-appointment">
        <h1 className="book-appointment-header">Book your appointment</h1>
        <form className="book-appointment-form">
          <label className="book-appointment-date" htmlFor="date">
            <span>Date:</span>
            <input
              className="book-appointment-date-input"
              id="date"
              type="date"
              value={date}
              onChange={(e) => onChange(e)}
            />
          </label>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

BookAppointment.propTypes = {
  userSession: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.oneOf(['null', 'undefined']),
  ]).isRequired,
};

export default BookAppointment;
