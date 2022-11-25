import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import closeIcon from '../../images/close-icon.svg';
import binIcon from '../../images/bin-icon.svg';
import heartIcon from '../../images/heart.svg';
import arrow from '../../images/right-arrow.svg';
import danger from '../../images/danger.svg';
import './doctor-details.css';

function DoctorDetails({ doctorId, setDoctorId }) {
  const navigate = useNavigate();

  const singleDoctor = useSelector((state) => {
    const doctor = state.doctors.filter((doctor) => doctor.id === Number(doctorId));
    return doctor[0];
  });

  const closeModal = () => {
    setDoctorId(-1);
  };

  const deleteDoctor = () => {
  };

  const bookAppointment = () => {
    navigate('/book-appointment');
  };

  if (!singleDoctor) return (<div />);

  return (
    <div className="modal-container">
      <div className="doctor-details-modal">
        <div className="modal-image-container">
          <img className="modal-doctor-picture" src={singleDoctor.photo} alt={`doctor ${singleDoctor.name}`} />
        </div>
        <div className="modal-sidebar">
          <button className="modal-close" type="button" onClick={() => closeModal()}>
            <img src={closeIcon} alt="Close Icon" />
          </button>
          <div className="modal-header-section">
            <header className="modal-header">
              {`DR. ${singleDoctor.name}`}
            </header>
            <p className="modal-doctor-specialty">{singleDoctor.specialty}</p>
            <p className="modal-doctor-bio">{singleDoctor.bio}</p>
            <p className="modal-header-tagline">30% discount for every consultation</p>
          </div>
          <button className="modal-book-appointment-button" type="button" onClick={() => bookAppointment()}>
            <img src={heartIcon} alt="heart icon" className="book-appointment-button-icon" />
            <p>Book Appointment</p>
            <img src={arrow} alt="heart icon" className="book-appointment-button-icon" />
          </button>

          <button className="delete-doctor-button" type="button" onClick={() => deleteDoctor()}>
            <img src={danger} alt="delete icon" className="delete-doctor-icon" />
            <p>Delete Doctor</p>
            <img src={binIcon} alt="delete icon" className="delete-doctor-icon" />
          </button>
        </div>
      </div>

    </div>

  );
}

DoctorDetails.propTypes = {
  doctorId: PropTypes.number.isRequired,
  setDoctorId: PropTypes.func.isRequired,
};

export default DoctorDetails;
