import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { newAppointment } from '../../redux/appointments/new-appointment';
import './book-appointment.css';

function BookAppointment({ userSession }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userSession.token && location.pathname === '/book-appointment') navigate('/login');
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    data.user_id = userSession.id;
    data.token = userSession.token;

    dispatch(newAppointment(data));
    navigate('/appointments');
  };

  return (
    <div className="book-appointment-overlay">
      <div className="book-appointment">
        <h1 className="book-appointment-header">Book your appointment</h1>
        <form className="book-appointment-form" onSubmit={onSubmit}>
          <label className="" htmlFor="date">
            <input
              className="book-appointment-date-time-input"
              id="date"
              type="date"
              name="day_of_appointment"
            />
          </label>
          <label htmlFor="time" className="">
            <input
              id="time"
              type="time"
              name="time_of_appointment"
              className="book-appointment-date-time-input"
            />
          </label>
          <textarea
            rows="1"
            wrap="physical"
            type="text"
            name="message"
            className="textarea-input"
            placeholder="What is the problem?"
          />
          <label htmlFor="doctors" className="doctors-dropdown">
            <select id="doctors" name="doctor_id" size="1" className="dropdown-input">
              <option value="no-value">Doctor</option>
              <option value="1">Dr Wendy</option>
            </select>
          </label>
          <button type="submit">Book Now</button>

        </form>
      </div>
    </div>
  );
}

BookAppointment.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default BookAppointment;
