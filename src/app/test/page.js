// pages/FormToPDF.js
"use client"
import React, { useRef, useState } from 'react';


const FormToPDF = () => {
  const [formData, setFormData] = useState({ name: '', email: '', bio: '' , rating:' ' });
  const pdfRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  
  const generatePDF = () => {
    const element = pdfRef.current;

    const options = {
      margin:       1,
      filename:     'form-data.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

      };
  const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(maxStars - rating);
  
    return (
      <span style={{ color: '#FFD700', fontSize: '20px' }}>
        {filledStars}
        {emptyStars}
      </span>
    );
  };
  return (
    <div style={styles.container}>
      <h2>Fill the Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />
      <textarea
        name="bio"
        placeholder="Tell us about yourself"
        value={formData.bio}
        onChange={handleChange}
        style={styles.textarea}
      />
      <input
        name="rating"
        placeholder="rating"
        value={formData.rating}
        onChange={handleChange}
        style={styles.input}
        type="number"
      />
      <button onClick={generatePDF} style={styles.button}>Generate PDF</button>

      <div ref={pdfRef} style={styles.pdfContainer}>
        <h3>Form Data</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Bio:</strong> {formData.bio}</p>
        <StarRating rating={formData.rating} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
  },
  pdfContainer: {
  },
};

export default FormToPDF;
