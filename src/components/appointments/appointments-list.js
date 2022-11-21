import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getAppointments } from '../../redux/appointments/appointments';
import mockDoctor from './mock';
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

  return (
    <ul className="appointments-list">
      {appointments.map((appoitment, i) => (
        <li key={appoitment.id} className="appoitment-item" style={{ background: mockDoctor(i).bgColor }}>
          <div><img src={mockDoctor(i).src} alt="doctor" className="appoitment-item-pic" /></div>
          <div className="appoitment-item-details" style={{ color: mockDoctor(i).color }}>
            <p className="item-header">{appoitment.doctor_name}</p>
            <p className="item-date-time">
              <span>Date:</span>
              <span>{appoitment.day_of_appointment}</span>
            </p>
            <p className="item-date-time">
              <span>Time:</span>
              <span>{appoitment.time_of_appointment.match(/([0-9]+):([0-9]+)/g)}</span>
            </p>
            <p>{appoitment.message}</p>
          </div>
        </li>
      ))}
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
