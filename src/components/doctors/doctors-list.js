import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([
    {
      id: -1,
      error: 'No doctors yet',
    }]);

  useEffect(() => {
    if (userSession.error && location.pathname === '/') navigate('/login');
  }, [location]);

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

  if (userSession.error && doctors.length <= 0) return (<div />);

  return (
    <ul className="doctors-list">
      <p className="appointments-list-header">Here are all our doctors</p>
      <div className="doctors-list-container">
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

      </div>

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
