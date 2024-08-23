import React, { useState } from "react";
import { Link } from "react-router-dom";
import picture from '../Keshavpic.png';
import cv from '../images/cv.pdf';  // Import the PDF correctly

const Nav = () => {
  const [showWarning, setShowWarning] = useState(false);

  const handleResumeClick = (event) => {
    // Show the warning message
    setShowWarning(true);

    // Optionally, you can prevent default behavior for a moment to ensure the message is visible before redirecting
    event.preventDefault();

    // Set a timeout to hide the warning message and redirect after a brief delay
    setTimeout(() => {
      setShowWarning(false);
      window.open(cv, '_blank');  // Open the CV in a new tab
    }, 2000); // 2 seconds delay to allow the warning to be visible
  };

  return (
    <div className="nav">
      <div>
        <img className="profile-pic" src={picture} alt="Profile" />
      </div>
      <ul className="nav-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        {/* Use the handleResumeClick function */}
        <li>
          <a href={cv} onClick={handleResumeClick} rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
      {showWarning && <div className="warning-message">This CV is not tailored for a specific role. It will close in a moment.......</div>}
    </div>
  );
}

export default Nav;

