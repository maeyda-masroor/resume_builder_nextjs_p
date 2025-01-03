// components/CV.js
"use client"
import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import  styles from './test.module.css';
import Image from 'next/image';
import logo from './download.jpg';
import { useEffect, useState } from "react";
const star = '★'; // Unicode character for filled star
const emptyStar = '☆'; // Unicode character for empty star
const filledstars = '⭐';
const glowingstars = '🌟🌟🌟🌟🌟';
const getStarRating = (rating) => {
  const stars = [];
  let glow = '';
  if (rating == 5) {
    return glow = glowingstars ; 
  }
  else if (rating < 5){
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(filledstars);
      } else {
        stars.push(emptyStar);
      }
    }
    return stars.join(' ');
  }
  
 
};
/*function generateStars(rating){
  const maxRating = 5;
  let stars = '';

  // Loop through and generate filled stars
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars += `<span class="star filled">★</span>`;
    } else {
      stars += `<span class="star">★</span>`;
    }
  }

  return stars;
}

*/
const CV = () => {
  const generatePDF = () => {
    const input = document.getElementById('cv');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      
      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('my_cv.pdf');
    });
  };
  const [formData, setFormData] = useState(null);
  useEffect(() => {
    // Retrieve JSON data from sessionStorage
    const data = JSON.parse(sessionStorage.getItem("formData"));
    const parsedData = data;
    if (parsedData) {
      getStarRating(parsedData.age);
  } else {
      console.log('No data found in session storage');
  }
    setFormData(data);
  }, []);
  if (!formData) return <p>Loading...</p>;
  return (
    <div>
      <div id="cv" style={{ padding: '20px', fontFamily: 'Arial',backgroundColor:'red',color:'white'}}>
        <h1 style={{ padding: '20px', fontFamily: 'Arial', fontSize: '32pt' }}>Your Name</h1>
        <p style={{ padding: '20px', fontFamily: 'Arial', fontSize: '45pt' }}>Email: your.email@example.com</p>
        <p style={{ padding: '20px', fontFamily: 'Arial', fontSize: '20pt' }}>Phone: (123) 456-7890</p>
        
        <h2>Skills</h2>
       {/* <ul style={{ padding: '20px', fontFamily: 'Arial', fontSize: '10pt' }}>
        /* <li>JavaScript - <strong>{getStarRating(4)}</strong> (4/5 stars)</li>
          <li>React - <strong>{getStarRating(5)}</strong> (5/5 stars)</li>
          <li>Node.js - <strong>{getStarRating(3)}</strong> (3/5 stars)</li>
        </ul>
      */}
        <Image src = {logo} />
        <h2>Experience</h2>
        <p>Job Title at Company Name (Year - Year)</p>
        <p>Responsibilities and achievements...</p>

        <h2>Education</h2>
        <p>Your Degree - Institution Name (Year)</p>
        <div>
        <h1>User Data</h1>
        <p style={{padding:'10px'}}>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        {formData.image && (
        <Image src={formData.image} alt="Uploaded" width={200} height={200}  />
        )}
        <p>{getStarRating(formData.age)}</p>
    </div>
      </div>
      <button onClick={generatePDF}>Download CV</button>
    </div>
  );
};

export default CV;
