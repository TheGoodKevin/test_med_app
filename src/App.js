import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';


function App() {
    const dummyDoctors = [
    {
      name: "Dr. Priya Sharma",
      speciality: "Cardiologist",
      experience: 12,
      ratings: 4.9,
    },
    {
      name: "Dr. Arjun Mehta",
      speciality: "Dermatologist",
      experience: 8,
      ratings: 4.6,
    },
    {
      name: "Dr. Leena Roy",
      speciality: "Pediatrician",
      experience: 10,
      ratings: 4.8,
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/find-doctor-search" element={<FindDoctorSearch />} />
          <Route
            path="/test-doctor-cards"
            element={
            <div style={{ marginTop: '100px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '2rem' }}>
                {dummyDoctors.map((doc, idx) => (
                <DoctorCard key={idx} {...doc} />
                ))}
            </div>
            }
        />
        <Route path="/book-consultation" element={<BookingConsultation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
