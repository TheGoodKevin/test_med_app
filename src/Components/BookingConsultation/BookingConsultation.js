import React, { useEffect, useState } from 'react';
import './InstantConsultation.css'; // Reusing styling
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch';
import DoctorCard from '../DoctorCard/DoctorCard';

const BookingConsultation = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    fetch('https://api.npoint.io/9a5543d36f1460da2f63')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredDoctors([]);
      setIsSearched(false);
      return;
    }

    const filtered = doctors.filter(doctor =>
      doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDoctors(filtered);
    setIsSearched(true);
  };

  return (
    <center>
      <div className="searchpage-container">
        <FindDoctorSearch onSearch={handleSearch} />
        <div className="search-results-container">
          {isSearched && (
            <>
              <h2>{filteredDoctors.length} doctors available</h2>
              <h3>Book appointments with minimum wait-time & verified doctor details</h3>
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor, idx) => (
                  <DoctorCard key={idx} {...doctor} />
                ))
              ) : (
                <p>No doctors found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </center>
  );
};

export default BookingConsultation;
