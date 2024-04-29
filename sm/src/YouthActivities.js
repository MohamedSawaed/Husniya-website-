import React from 'react';
import { FaBasketballBall, FaMusic, FaPaintBrush, FaLaptopCode } from 'react-icons/fa';
import './YouthActivities.css';

const activities = [
  {
    name: 'פעילות ספורט',
    description: 'כדורגל, כדורסל, ועוד.',
    icon: <FaBasketballBall />,
  },
  {
    name: 'מוזיקה',
    description: 'לימודי מוזיקה, הופעות וקונצרטים.',
    icon: <FaMusic />,
  },
  {
    name: 'אמנות',
    description: 'סדנאות ציור, פיסול, ויצירה.',
    icon: <FaPaintBrush />,
  },
  {
    name: 'תכנות',
    description: 'סדנאות קידוד ותכנות.',
    icon: <FaLaptopCode />,
  },
];

const YouthActivities = () => {
  return (
    <div className="youth-activities-container">
      <h1 className="page-title">פעילויות נוער</h1>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-info">
              <h2>{activity.name}</h2>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="summer-camp-announcement">
        <h2>מחנה קיץ בקרוב!</h2>
        <button className="join-us-button">הצטרפו אלינו</button>
      </div>
    </div>
  );
};

export default YouthActivities;
