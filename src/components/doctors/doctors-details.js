import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleDoctor } from '../../redux/doctors/doctors';

function DoctorDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleDoctor({ id: Number(id) }));
  }, []);

  return (
    <div className="app">
      <p>
        Doctor details will go here
        {id}
      </p>
    </div>
  );
}

export default DoctorDetails;
