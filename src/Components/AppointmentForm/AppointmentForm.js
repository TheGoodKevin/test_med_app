import React, { useState } from 'react';
import './AppointmentForm.css';


const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !appointmentDate || !appointmentTime) {
      alert("Please fill in all fields.");
      return;
    }

    onSubmit({
      name,
      phoneNumber,
      appointmentDate,
      appointmentTime
    });

    // Clear form
    setName('');
    setPhoneNumber('');
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <h3>Book Appointment</h3>
      <p><strong>Doctor:</strong> {doctorName}</p>
      <p><strong>Speciality:</strong> {doctorSpeciality}</p>

      <div className="form-group">
        <label htmlFor="name">Patient Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="appointmentTime"><strong>Book Time Slot:</strong></label>
        <select
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
        >
            <option value="">Select a time slot</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
        </select>
    </div>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentForm;
