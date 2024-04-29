// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import Cit from './Cit'; // Additional component for special cases
import News from './News'; // Add routes for other components
import History from './History'; // Import the new component
import Protocols from './Protocols';
import LocalCommittee from './LocalCommittee';
import YouthActivities from './YouthActivities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route to Home */}
        <Route path="/History" element={<History />} /> {/* Route for History component */}
        <Route path="/cit" element={<Cit />} /> {/* Route for Cit component */}
        <Route path="/news" element={<News />} /> {/* Routes for other sections */}
        <Route path="/protocols" element={<Protocols />} />
        <Route path="/local-committee" element={<LocalCommittee />} />
        <Route path="/youth-activities" element={<YouthActivities />} />
      </Routes>
    </Router>
  );
}

export default App;
