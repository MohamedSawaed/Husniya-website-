import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import husniyalogo from './husniyalogo.png'; 
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Cit');
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/0523211396?text=שלום רב, יש לי פניה דחופה לטיפלך!',
      '_blank'
    );
  };

  return (
    <div>
      <div className="navbar">
        <div className="contact-info">
          <div
            className="contact-item"
            onMouseOver={(e) => (e.target.style.color = '#B5FFFC')}
            onMouseOut={(e) => (e.target.style.color = '#B5FFFC')}
            onClick={() => window.open('tel:046890923')}
          >
            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'red' }} /> 046890923
          </div>
          <div
            className="contact-item"
            onMouseOver={(e) => (e.target.style.color = '#B5FFFC')}
            onMouseOut={(e) => (e.target.style.color = '#B5FFFC')}
            onClick={() => window.open('mailto:husniua.committe@gmail.com')}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'red' }} /> husniua.committe@gmail.com
          </div>
        </div>
        <div className="welcome-message">
          ברוכים הבאים לאתר רשמי לועד מקומי חוסנייה
        </div>
      </div>

      <div className="white-section">
        <div
          className="center-text"
          onMouseOver={(e) => (e.target.style.color = 'red')}
          onMouseOut={(e) => (e.target.style.color = 'black')}
          onClick={handleNavigation}
        >
          אישור תושב 2024
        </div>

        <div
          className="center-text"
          onMouseOver={(e) => (e.target.style.color = 'red')}
          onMouseOut={(e) => (e.target.style.color = 'black')}
          onClick={openWhatsApp}
        >
          יצירת קשר ישיר
        </div>

        <div className="logo-container">
           <img src={husniyalogo} alt="Husniyya Logo" /> {/* Navbar logo */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
