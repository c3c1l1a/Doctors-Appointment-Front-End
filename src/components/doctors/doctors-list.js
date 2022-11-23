import { React, useState } from 'react';
import './doctors.css';
import './doctor.css';
/* eslint-disable */

function DoctorsList() {
  const [doctors, setdoctors] = useState([
    {
      id: 1,
      name: 'Dr. 1',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 1,
    },
    {
      id: 2,
      name: 'Dr. 2',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 2,
    },
    {
      id: 3,
      name: 'Dr. 3',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 3,
    },
    {
      id: 4,
      name: 'Dr. 4',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 4,
    },
    {
      id: 5,
      name: 'Dr. 5',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 5,
    },
    {
      id: 6,
      name: 'Dr. 6',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 6,
    },
    {
      id: 7,
      name: 'Dr. 7',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 7,
    },
    {
      id: 8,
      name: 'Dr. 8',
      photo:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      specialty: 'Surgeon',
      bio: 'Highly experienced',
      created_at: '2022-11-16T13:42:27.015Z',
      updated_at: '2022-11-16T13:42:27.015Z',
      user_id: 8,
    },
  ]);

  const [modalstate, setmodalstate] = useState('hide-Modal');
  const [modaldata, setmodaldata] = useState('');
  const [doccard, setdoccard] = useState('doc-card');

  const showModal = (e, id) => {
    const dc = id - 1;
    setmodalstate('');
    setmodaldata(doctors[dc]);
    setdoccard('doc-card-hidden');
  };

  const closeModal = () => {
    setmodalstate('hide-Modal');
    setdoccard('doc-card');
  };

  return (
    <div className="Doc">
      <div className="doc-list">
        {doctors.map((doctor) => (
          <div className={doccard} key={doctor.id}>
            <div className="doc-card-img">
              <img className="img-doc" src={doctor.photo} alt="Cool Doctor" />
            </div>
            <div className="doc-card-info">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialty}</p>
              <button className="dtl-btn" onClick={(e) => showModal(e, doctor.id)}>see details</button>
            </div>
          </div>
        ))}
        <div id={modalstate} className="Modal">
          <div className="top-part">
            <img className="img-doc-mod" src={modaldata.photo} alt="Cool Doctor" />
            <button onClick={() => closeModal()}> X </button>
          </div>
          <div className="doc-card-info">
            <h2 className='MN'>{modaldata.name}</h2>
            <h3 className='MH'>Specialty </h3>
            <p>{modaldata.specialty}</p>
            <h3 className='MH'>About</h3>
            <p>{modaldata.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
