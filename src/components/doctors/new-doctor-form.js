import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newDoctor } from '../../redux/doctors/new-doctor';

import './new-doctor-form.css';

function NewDoctorForm({ userSession }) {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (input) => {
    if (input.name.length <= 0) errors.name = '*Please enter the doctors name';
    else delete errors.name;

    if (input.photo.length <= 0) errors.photo = '*Please enter url to doctors photo';
    else {
      try {
        const photoUrl = new URL(input.photo);
        console.log(photoUrl);
        delete errors.photo;
      } catch (_) {
        errors.photo = '*Make sure the link is well formatted';
      }
      // delete errors.photo;
    }

    if (input.specialty.length <= 0) errors.speciality = '*Please enter specialty';
    else delete errors.speciality;

    if (input.bio.length <= 0) errors.bio = "*Please enter doctor's bio";
    else delete errors.bio;

    setErrors(errors);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formObject = new FormData(e.target);
    const data = Object.fromEntries(formObject.entries());

    validate(data);

    if (Object.keys(errors).length === 0) {
      data.user_id = userSession.id;
      data.token = userSession.token;

      dispatch(newDoctor(data));
      navigate('/');
    } else { navigate('/add-new-doctor'); }
  };

  return (
    <div className="app">
      <form className="add-doctor-form" onSubmit={(e) => onSubmit(e)}>
        <div>
          <p className="add-doctor-errors">{errors.name}</p>
          <input className="" type="text" placeholder="Enter doctors name" name="name" />
        </div>
        <div>
          <p className="add-doctor-errors">{errors.photo}</p>
          <input className="" type="text" placeholder="Paste photo url" name="photo" />
        </div>
        <div>
          <p className="add-doctor-errors">{errors.specialty}</p>
          <input className="" type="text" placeholder="Specialty" name="specialty" />
        </div>
        <div>
          <p className="add-doctor-errors">{errors.bio}</p>
          <textarea
            rows="3"
            wrap="physical"
            type="text"
            name="bio"
            className=""
            placeholder="Doctors bio"
          />
        </div>
        <button className="submit-button" type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

NewDoctorForm.propTypes = {
  userSession: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default NewDoctorForm;
