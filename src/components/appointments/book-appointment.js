import React, { useState } from 'react';
import './appointments.css';

function BookAppointment() {
  const [date, setDate] = useState();

  const onChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="book-appointment-overlay">
      <div className="book-appointment">
        <h1 className="book-appointment-header">Book your appointment</h1>
        <form className="book-appointment-form">
          <label className="book-appointment-date" htmlFor="date">
            <span>Date:</span>
            <input
              className="book-appointment-date-input"
              id="date"
              type="date"
              value={date}
              onChange={(e) => onChange(e)}
            />
          </label>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
