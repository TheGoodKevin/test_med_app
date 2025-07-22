import React from 'react';
import './Navbar.css'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const handleClick = () => {
    // You can implement toggle logic here
    console.log("Icon clicked");
  };

  return (
    <nav>
      {/* Navigation logo section */}
      <div className="nav__logo">
        {/* Link to the home page */}
        <a href="/">
          StayHealthy
          {/* SVG icon of a doctor with a stethoscope */}
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
            <title>Doctor With Stethoscope SVG icon</title>
            <g>
              <g>
                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3..."></path>
              </g>
            </g>
          </svg>
        </a>
        <span>.</span>
      </div>

      {/* Navigation icon with onClick event */}
      <div className="nav__icon" onClick={handleClick}>
        {/* Replace with React Icons or keep Font Awesome if you're loading it */}
        <i className="fa fa-bars"></i>
      </div>

      {/* Navigation links */}
      <ul className="nav__links active">
        <li className="link">
          <a href="../Landing_Page/LandingPage.html">Home</a>
        </li>
        <li className="link">
          <a href="#">Appointments</a>
        </li>
        <li className="link">
          <a href="../Sign_Up/Sign_Up.html">
            <button className="btn1">Sign Up</button>
          </a>
        </li>
        <li className="link">
          <a href="../Login/Login.html">
            <button className="btn1">Login</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
