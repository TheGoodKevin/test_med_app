// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // Make sure this file exists

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(true); // NEW: control notification visibility

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    // Ensure doctorData exists before retrieving related appointment
    const storedAppointmentData = storedDoctorData
      ? JSON.parse(localStorage.getItem(storedDoctorData.name))
      : null;

    // Check for cancellation flag (customize this logic to match your app's behavior)
    const isCancelled = localStorage.getItem('appointmentCancelled') === 'true';

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }

    if (isCancelled) {
      setShowNotification(false); // Hide notification if appointment is cancelled
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      
      {/* Render children components */}
      {children}

      {/* Display appointment details if user is logged in and appointmentData is available and not cancelled */}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Speciality:</strong> {doctorData?.speciality}</p>
            <p><strong>Name:</strong> {appointmentData?.name}</p>
            <p><strong>Phone Number:</strong> {appointmentData?.phone}</p>
            <p><strong>Date of Appointment:</strong> {appointmentData?.date}</p>
            <p><strong>Time Slot:</strong> {appointmentData?.time}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
