import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate } from 'react-router-dom';

const specialties = [
  'Dentist', 'Gynecologist/Obstetrician', 'General Physician',
  'Dermatologist', 'ENT Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleSpecialtyClick = (specialty) => {
    setSearchInput(specialty);
    setShowSuggestions(false);
    navigate(`/instant-consultation?speciality=${specialty}`);
    window.location.reload();
  };

  return (
    <div className="find-doctor-container" style={{ marginTop: '140px' }}>
      <h2>Find a Doctor</h2>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search by specialty..."
          value={searchInput}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="search-icon">
          <img src={process.env.PUBLIC_URL + '/searchhh.svg'} alt="search" />
        </div>
        {showSuggestions && (
          <div className="suggestions">
            {specialties
              .filter(s => s.toLowerCase().includes(searchInput.toLowerCase()))
              .map(specialty => (
                <div
                  key={specialty}
                  className="suggestion-item"
                  onMouseDown={() => handleSpecialtyClick(specialty)}
                >
                  <span>{specialty}</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctorSearch;
