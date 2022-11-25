import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { newAppointment } from '../../redux/appointments/new-appointment';
import './book-appointment.css';

function BookAppointment({ userSession }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const loadedDoctors = useSelector((state) => state.doctors);

  useEffect(() => {
    if (!userSession.token && location.pathname === '/book-appointment') navigate('/login');
  }, [location]);

  const validate = (input) => {
    if (input.day_of_appointment.length <= 0) errors.day_of_appointment = '*Pick a day';
    else delete errors.day_of_appointment;

    if (input.message.length <= 0) errors.message = '*Leave a message';
    else delete errors.message;

    if (input.doctor_id === 'no-value') errors.doctor_id = '*Pick a doctor';
    else delete errors.doctor_id;

    if (input.time_of_appointment.length <= 0) errors.time_of_appointment = '*Pick a time';
    else delete errors.time_of_appointment;

    setErrors(errors);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    validate(data);
    data.user_id = userSession.id;
    data.token = userSession.token;

    if (Object.keys(errors).length === 0) {
      dispatch(newAppointment(data));
      navigate('/appointments');
    } else { navigate('/book-appointment'); }
  };

  return (
    <div className="book-appointment-overlay">
      <div className="book-appointment">
        <h1 className="book-appointment-header">Book appointment</h1>
        <form className="book-appointment-form" onSubmit={onSubmit}>
          <label className="" htmlFor="date">
            <p className="errors">{errors.day_of_appointment}</p>
            <input
              className="book-appointment-date-time-input"
              id="date"
              type="date"
              name="day_of_appointment"
            />
          </label>
          <label htmlFor="time" className="">
            <p className="errors">{errors.time_of_appointment}</p>
            <input
              id="time"
              type="time"
              name="time_of_appointment"
              className="book-appointment-date-time-input"
            />
          </label>
          <div>
            <p className="errors">{errors.message}</p>
            <textarea
              rows="1"
              wrap="physical"
              type="text"
              name="message"
              className="textarea-input"
              placeholder="What is the problem?"
            />
          </div>
          <div>
            <p className="errors">{errors.doctor_id}</p>
            <label htmlFor="doctors" className="doctors-dropdown">
              <select id="doctors" name="doctor_id" size="1" className="dropdown-input">
                <option value="no-value">Doctor</option>
                {loadedDoctors.map((doctor) => (<option key={doctor.id} value={doctor.id}>{`Dr. ${doctor.name}`}</option>))}
              </select>
            </label>
          </div>
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
