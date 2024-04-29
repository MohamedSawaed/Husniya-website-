import React from 'react';
import './History.css'; // Link to the CSS file for styling

// Importing images
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';

// Array of imported images for easier mapping
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const History = () => {
  return (
    <div className="history-container">
      <h1 className="page-title">تاريخ قرية الحسينية</h1> {/* Page title in Arabic */}
    
      <div className="history-section"> {/* General information about the village */}
        <h2>معلومات عامة</h2>
        <p>
          قرية فلسطينية حالية، أسست غربي جبل الكمانة مباشرةً، شرقي مدينة عكا وعلى مسافة 22 كم عنها،
          بارتفاع لايزيد عن 500م عن مستوى سطح البحر.
        </p>
      </div>
      <div className="history-section"> {/* Village boundaries */}
        <h2>الحدود</h2>
        <p>
          تتوسط قرية الحسينية البلدات والقرى التالية: قرية المغار (قرية عربية حالية من قرى طبريا) شرقاً.
          قرية دير حنا (قرية عربية حالية من قرى مدينة عكا) من الجنوب الشرقي. بلدة عرابة (قرية عربية
          حالية من قرى مدينة عكا) جنوباً. مدينة سخنين (بلدة عربية حالية من قرى مدينة عكا) من الجنوب
          الغربي.
        </p>
      </div>
      <div className="history-section"> {/* Population information */}
        <h2>السكان</h2>
        <p>
          قدر عدد سكان القرية عام 2023 بـ 1000 نسمة، وجميعهم من العرب المسلمين.
        </p>
        <br/>
        <br/>
        <br/>

        {images.map((image, index) => (
        <div key={index} className="history-image-container">
          <img src={image} alt={`Historical view ${index + 1}`} className="history-image" />
        </div>
      ))}

      </div>
    </div>
  );
};

export default History; // Exporting the History component for use in other parts of the app
