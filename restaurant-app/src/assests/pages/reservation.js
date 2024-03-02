import React, { useState } from 'react';
import MySideNav from './MySdieNav';
const ReservationPage = () => {
 
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Reservation submitted:', { date, time, guests });
    
    setDate('');
    setTime('');
    setGuests('');
  };

  return (
    <div className="reservation-page">
       <MySdieNav/>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default ReservationPage;
