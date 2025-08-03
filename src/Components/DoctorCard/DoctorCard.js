import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, speciality, experience, rating, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [appointment, setAppointment] = useState(null);

  const handleAppointmentSubmit = (formData) => {
    setAppointment(formData);
    setShowForm(false); // hide form after booking
    alert(`Appointment booked for ${formData.name} with ${name}`);
  };

  const handleCancelAppointment = () => {
    setAppointment(null);
    setShowForm(false);
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
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-rating">Ratings: {rating}</div>
        </div>

        <div className="doctor-card-options-container">
          {appointment ? (
            <div className="booked-info">
              <h4>Appointment Booked!</h4>
              <p><strong>Name:</strong> {appointment.name}</p>
              <p><strong>Phone:</strong> {appointment.phoneNumber}</p>
              <p><strong>Date:</strong> {appointment.appointmentDate}</p>
              <p><strong>Time:</strong> {appointment.appointmentTime}</p>
              <button className="cancel-appointment-btn" onClick={handleCancelAppointment}>
                Cancel Appointment
              </button>
            </div>
          ) : (
            <>
              <button className="book-appointment-btn" onClick={() => setShowForm(!showForm)}>
                <div>Book Appointment</div>
                <div>No Booking Fee</div>
              </button>
              {showForm && (
                <div style={{ marginTop: '20px' }}>
                  <AppointmentForm
                    doctorName={name}
                    doctorSpeciality={speciality}
                    onSubmit={handleAppointmentSubmit}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
