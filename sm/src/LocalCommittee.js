import React from 'react';
import husniyalogo from './husniyalogo.png'; 
import './LocalCommittee.css'; // Import the CSS file for styling

const councilMembers = [
  {
    name: 'מר חאלד סואעד',
    position: 'ראש ועד מקומי',
    phone: '0543128431',
    email: '67khaled67@gmail.com',
  },
  {
    name: 'מר מחמוד סואעד',
    position: 'חבר ועד',
    phone: '0523605681',
    email: 'mahmuds@carmelfrenkel.com',
  },
  {
    name: 'מר סאאד סואעד',
    position: 'חבר ועד',
    phone: '0526379162',
    email: 'saeds1983@gmail.com',
  },
  {
    name: 'מר ויסאם סואעד',
    position: 'חבר ועד',
    phone: '0505738883',
    email: 'wissamswa@hotmail.com',
  },
  {
    name: 'מר עבד אלבאסט סואעד',
    position: 'חבר ועד',
    phone: '0525148759',
    email: 'abed.swaed72@gmail.com',
  },
  {
    name: 'מר חוסין סואעד',
    position: 'נציג המלאה',
    phone: '0507232069',
    email: 'hussein61@walla.co.il',
  },

];

const LocalCommittee = () => {
  return (
    <div className="local-committee">
      <div className="header">
        <div className="title">חברי הוועד המקומי</div>
        <div className="logo">
         <img src={husniyalogo} alt="Husniyya Logo" /> {/* Navbar logo */}
        </div>
      </div>

      <div className="council-info">
        <div className="council-contact">
          <strong>הוועד המקומי:</strong> 04-689-0923 <br />
          <strong>ימי עבודה:</strong> ראשון עד חמישי 08.00-16.00<br />
        </div>

        <div className="council-members">
          {councilMembers.map((member, index) => (
            <div key={index} className="member">
              <strong>{member.position}:</strong> {member.name}<br />
              {member.phone && <span>טלפון: {member.phone}</span>}<br />
              {member.email && <span>אימייל: {member.email}</span>}<br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalCommittee;
