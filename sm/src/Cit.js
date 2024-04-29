import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cit.css';
import husniyalogo from './husniyalogo.png'; 

const Cit = () => {
  const handleButtonClick = () => {
    window.open('https://mas.misgav.org.il/', '_blank');
  };

  return (
    <div className="cit-container">
      <div className="cit-header">
      <img src={husniyalogo} alt="Husniyya Logo" className="husniya-logo" /> {/* Navbar logo */}
      </div>

      <div className="cit-content">
        <div className="cit-column">
          <h2>על פי הנחיות מס הכנסה המוכתבות לנו</h2>
          <p>יוכלו להנפיק אישור תושב באופן עצמאי רק מי שעומדים בכל התנאים הבאים:</p>
          <ul>
            <li>הרשומים במרשם התושבים כתושבי משגב לפני 01/01/2023.</li>
            <li>אם הנכם נשואים, שני בני הזוג רשומים כמשגב במרשם התושבים.</li>
            <li>הרשומים כמשלמי ארנונה עבור נכס במשגב שבבעלותם.</li>
            <li>הרשומים כמשלמי אגרת ביוב.</li>
            <li>
              אם יש לכם ילדים הצעירים מגיל 18, אחד לפחות צריך להיות רשום במערכת החינוך במשגב.
            </li>
          </ul>
        </div>

        <div className="cit-column">
          <h2>רווקים, צעירים, משפחות צעירות הגרות בבית הוריהם</h2>
          <p>
            ידרשו להוכיח שזה מקום מגוריהם במשך 12 חודשים אחרונים לפחות. רשות המיסים אינה מסתפקת בהצהרת ההורים או הישוב.
          </p>
          <p>
            להוכחת מקום המגורים (מרכז חיים), יש להגיש בקשה לאישור תושב ולצרף מסמכים.
          </p>
          <ul>
            <li>חובה לצרף צילום ת.ז. עם ספח שמציין שהמקום הוא מקום מגורים.</li>
            <li>תלושי שכר לעבודה בקרבת הישוב.</li>
            <li>אישור לימודים בקרבת הישוב.</li>
            <li>אישור שילדיהם במערכת החינוך.</li>
          </ul>
          <p>חיילים עשויים להיות זכאים בהתאם לתנאי השירות ומקום המגורים בפועל.</p>
        </div>
      </div>

      <div className="cit-footer">
        <button className="request-button" onClick={handleButtonClick}>
          הגשת בקשה לאישור תושב
        </button>
      </div>
    </div>
  );
};

export default Cit;
