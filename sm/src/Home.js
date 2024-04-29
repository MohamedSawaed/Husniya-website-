import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaNewspaper, FaClipboardList, FaUsers, FaChild, FaCode, FaHistory } from 'react-icons/fa'; // Assuming FaHistory is available or choose an alternative
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      
      <div className="home-background">
        <div className="card-section"> 
          {/* Existing cards */}
          <Link to="/news" className="card">
            <FaNewspaper className="card-icon" />
            <h2>ידיעות ואירועים</h2>
            <p>Latest updates and stories</p>
          </Link>
          <Link to="/protocols" className="card">
            <FaClipboardList className="card-icon" />
            <h2>פרוטוקולים</h2>
            <p>Committee rules and guidelines</p>
          </Link>
          <Link to="/local-committee" className="card">
            <FaUsers className="card-icon" />
            <h2>ועד מקומי חוסנייה</h2>
            <p>Meet the team</p>
          </Link>
          <Link to="/youth-activities" className="card">
            <FaChild className="card-icon" />
            <h2>פעילויות נוער</h2>
            <p>Events and programs for youth</p>
          </Link>
          
          {/* New History card */}
          <Link to="/history" className="card">
            <FaHistory className="card-icon" /> {/* Replace FaHistory with the icon you have for history */}
            <h2>היסטוריה</h2>
            <p>Explore the historical events and timelines</p>
          </Link>
        </div>

        <footer className="app-footer">
          <FaCode className="footer-icon" />
          <span>פותח על ידי מוחמד סואעד</span>
        </footer>
      </div>
    </div>
  );
}

export default Home;
