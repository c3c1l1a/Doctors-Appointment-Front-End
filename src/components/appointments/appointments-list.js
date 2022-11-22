import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getAppointments } from '../../redux/appointments/appointments';
import mockDoctor from './mock';
import clock from '../../images/clock.svg';
import binIcon from '../../images/bin-icon.svg';
import './appointments-list.css';

function AppointmentsList({ userSession }) {
  const dispatch = useDispatch();
  const [appointments, setAppointments] = useState([
    {
      id: -1,
      error: 'No appoitments yet',
      time_of_appointment: '',
    }]);

  useEffect(() => {
    (async () => {
      const response = await dispatch(getAppointments(userSession.token));
      setAppointments(response.payload);
    })();
  }, []);

  const deleteAppointment = () => {
    console.log('deleteAppointment');
  };

  return (
    <ul className="appointments-list">
      <p className="appointments-list-header">My Appointments</p>
      {appointments.map((appoitment, i) => {
        let date = '';
        if (appoitment.day_of_appointment) {
          const dateObject = new Date(appoitment.day_of_appointment);
          date = dateObject.toDateString();
        }
        if (appoitment.id !== -1) {
          return (
            <li
              key={appoitment.id}
              className="appoitment-item"
              style={{
                'border-color': mockDoctor(i).color,
              }}
            >
              <div className="appointment-time">
                <div className="appointment-time-header-bar">
                  <p className="appointment-time-header">Appointment Date</p>
                  <button type="button" onClick={() => deleteAppointment()}>
                    <img src={binIcon} alt="delete icon" className="bin-icon" />
                  </button>
                </div>
                <div className="appointment-time-details">
                  <div className="appointment-time-details-item">
                    <img src={clock} alt="clock icoon" className="clock-icon" />
                    <p>{date}</p>
                    <p>{appoitment.time_of_appointment.match(/([0-9]+):([0-9]+)/g)}</p>
                  </div>
                  <div>
                    <p className="message">{appoitment.message}</p>
                  </div>
                </div>
              </div>
              <div className="appointment-doctor">
                <img src={mockDoctor(i).src} alt="doctor" className="appointment-doctor-pic" />
                <div className="appointment-doctor-details">
                  <p className="appointment-doctor-name">{appoitment.doctor_name}</p>
                  <p className="appointment-doctor-speciality">Ophthamologist</p>
                </div>
              </div>
            </li>
          );
        }
        return (
          <p key={appoitment.id} />
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
