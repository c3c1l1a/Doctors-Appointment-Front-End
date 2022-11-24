import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DoctorDetails from './doctor-details';
import { getDoctors } from '../../redux/doctors/doctors';
import facebook from '../../images/Facebook.svg';
import twitter from '../../images/Twitter.svg';
import linkedIn from '../../images/Linkedin.svg';
import './doctors-list.css';

function DoctorsList({ userSession }) {
  const dispatch = useDispatch();

  const [doctors, setDoctors] = useState([
    {
      id: -1,
      error: 'No doctors yet',
    }]);

  const [doctorId, setDoctorId] = useState(-1);

  useEffect(() => {
    (async () => {
      const response = await dispatch(getDoctors(userSession.token));
      setDoctors(response.payload);
    })();
  }, []);

  const getDoctorDetails = (id) => {
    setDoctorId(id);
  };

  return (
    <ul className="doctors-list">
      {doctors.map((doctor) => (
        <li key={doctor.id} className="doctor-card">
          <img className="doctor-photo" src={doctor.photo} alt={`doctor ${doctor.name}`} />
          <div className="doctor-intro-container">
            <header className="doctor-name">
              {`DR. ${doctor.name}`}
            </header>
            <p className="doctor-specialty">{doctor.specialty}</p>
          </div>
          <hr className="doctor-card-divider" />
          <div className="doctor-bio-container">
            <p className="doctor-bio">{doctor.bio}</p>
          </div>
          <button className="doctor-more-details" type="button" onClick={() => getDoctorDetails(doctor.id)}>More details</button>
          <div className="doctor-social-media">
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="facebook icon" />
            <img src={linkedIn} alt="facebook icon" />
          </div>
        </li>
      ))}
      <DoctorDetails doctorId={doctorId} setDoctorId={setDoctorId} />
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
