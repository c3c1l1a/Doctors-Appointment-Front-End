import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getAppointments } from '../../redux/appointments/appointments';
import './appointments.css';

function AppointmentsList({ userSession }) {
  const dispatch = useDispatch();
  const [appointments, setAppointments] = useState([
    {
      id: -1,
      error: 'No appoitments yet',
    }]);

  useEffect(() => {
    (async () => {
      const response = await dispatch(getAppointments(userSession.token));
      console.log(response);
      setAppointments(response.payload);
    })();
  }, []);

  return (
    <div className="appointment-list">
      <ul>
        {appointments.map((appoitment) => (
          <li key={appoitment.id}>{appoitment.day_of_appointment}</li>
        ))}
      </ul>
    </div>
  );
}

AppointmentsList.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default AppointmentsList;
