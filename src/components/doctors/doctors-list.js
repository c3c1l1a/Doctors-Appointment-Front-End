import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../../redux/doctors/doctors';
import './doctors.css';

function DoctorsList({ userSession }) {
  const dispatch = useDispatch();

  const [doctors, setDoctors] = useState([
    {
      id: -1,
      error: 'No doctors yet',
    }]);

  useEffect(() => {
    (async () => {
      const response = await dispatch(getDoctors(userSession.token));
      setDoctors(response.payload);
    })();
  }, []);

  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>{doctor.name}</li>
      ))}
    </ul>
  );
}

DoctorsList.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default DoctorsList;
