import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../../redux/appointments/appointments';
import { deleteAppointment } from '../../redux/appointments/delete-appointment';
import mockDoctor from './mock';
import clock from '../../images/clock.svg';
import binIcon from '../../images/bin-icon.svg';
import './appointments-list.css';

function AppointmentsList({ userSession }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([
    {
      id: -1,
      error: 'No appointments yet',
      time_of_appointment: '',
    }]);

  useEffect(() => {
    (async () => {
      const response = await dispatch(getAppointments(userSession.token));
      setAppointments(response.payload);
    })();
  }, []);

  const removeAppointment = async (appointment) => {
    const data = { token: userSession.token, ...appointment };
    await dispatch(deleteAppointment(data));
    const newAppointmentsList = appointments.filter((item) => item.id !== appointment.id);
    setAppointments(newAppointmentsList);
    navigate('/appointments');
  };

  return (
    <ul className="appointments-list">
      <p className="appointments-list-header">My Appointments</p>
      {appointments.map((appointment, i) => {
        let date = '';
        if (appointment.day_of_appointment) {
          const dateObject = new Date(appointment.day_of_appointment);
          date = dateObject.toDateString();
        }
        if (appointment.id !== -1) {
          return (
            <li
              key={appointment.id}
              className="appointment-item"
              style={{
                borderColor: mockDoctor(i).color,
              }}
            >
              <div className="appointment-time">
                <div className="appointment-time-header-bar">
                  <p className="appointment-time-header">Appointment Date</p>
                  <button type="button" onClick={() => removeAppointment(appointment)}>
                    <img src={binIcon} alt="delete icon" className="bin-icon" />
                  </button>
                </div>
                <div className="appointment-time-details">
                  <div className="appointment-time-details-item">
                    <img src={clock} alt="clock icoon" className="clock-icon" />
                    <p>{date}</p>
                    <p>{appointment.time_of_appointment.match(/([0-9]+):([0-9]+)/g)}</p>
                  </div>
                  <div>
                    <p className="message">{appointment.message}</p>
                  </div>
                </div>
              </div>
              <div className="appointment-doctor">
                <img src={mockDoctor(i).src} alt="doctor" className="appointment-doctor-pic" />
                <div className="appointment-doctor-details">
                  <p className="appointment-doctor-name">{appointment.doctor_name}</p>
                  <p className="appointment-doctor-speciality">Ophthamologist</p>
                </div>
              </div>
            </li>
          );
        }
        return (
          <p key={appointment.id} />
        );
      })}
    </ul>
  );
}

AppointmentsList.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default AppointmentsList;
