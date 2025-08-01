import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, specialty, experience, rating, image }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAppointmentSubmit = (formData) => {
    console.log("Appointment submitted:", formData);
    alert(`Appointment booked for ${formData.name} with ${name}`);
    setShowForm(false); // hide form after submission
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          {image ? (
            <img src={image} alt={`${name}`} />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          )}
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-specialty">{specialty}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-rating">Ratings: {rating}</div>
        </div>
        <div className="book-appointment-wrapper">
          <button className="book-appointment-btn" onClick={() => setShowForm(!showForm)}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>

        {showForm && (
          <div style={{ marginTop: '20px' }}>
            <AppointmentForm
              doctorName={name}
              doctorSpeciality={specialty}
              onSubmit={handleAppointmentSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
