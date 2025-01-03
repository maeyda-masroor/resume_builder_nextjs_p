// pages/TwoDivsGrid.tsx
"use client"
import { useRef } from 'react';
import React, { useState } from 'react';

const steps = [
  {
    title: 'About',
    fields: [
      { name: 'name', placeholder: 'Enter your name' },
      { name: 'bio', placeholder: 'Tell us about yourself' },
    ],
  },
  {
    title: 'Experience',
    fields: [
      { name: 'jobTitle', placeholder: 'Enter your job title' },
      { name: 'company', placeholder: 'Enter your company name' },
    ],
  },
  {
    title: 'Education',
    fields: [
      { name: 'degree', placeholder: 'Enter your degree' },
      { name: 'university', placeholder: 'Enter your university' },
    ],
  },
  {
    title: 'Skills',
    fields: [
      { name: 'skill1', placeholder: 'Enter a skill' },
      { name: 'skill2', placeholder: 'Enter another skill' },
    ],
  },
];
export default function CreateResume()
{
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const cvRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div style={gridStyles.container}>
      <div style={gridStyles.box}>
      <div style={gridStyles.div1}>
      <h2>{steps[currentStep].title}</h2>
      {steps[currentStep].fields.map((field) => (
        <input
          key={field.name}
          type="text"
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name] || ''}
          onChange={handleChange}
          style={gridStyles.input}
        />
      ))}
      <div style={gridStyles.buttonContainer}>
        {currentStep > 0 && <button onClick={prevStep} style={gridStyles.button}>Back</button>}
        {currentStep < steps.length - 1 ? (
          <button onClick={nextStep} style={gridStyles.button}>Next</button>
        ) : (
          <button style={gridStyles.button}>Submit</button>
        )}
      </div>
      <div style={gridStyles.progressBar}>
        {steps.map((step, index) => (
          <div key={index} style={{ ...gridStyles.progressStep, width: `${(100 / steps.length)}%`, backgroundColor: index <= currentStep ? '#0070f3' : '#e0e0e0' }}>
            <span style={gridStyles.progressTitle}>{step.title}</span>
          </div>
        ))}
      </div>
    </div>
      </div>
   
      <div style={gridStyles.box}>Div 2</div>
    </div>
  );
};

// Styles for the grid layout
const gridStyles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two equal columns
    gap: '20px', // Space between the columns
    padding: '20px',
  },
  box: {
    padding: '20px',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    borderRadius: '5px',
  },
  div1: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  div1: {
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
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
  },
  progressBar: {
    display: 'flex',
    marginTop: '20px',
    height: '30px',
    backgroundColor: '#f3f3f3',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  progressStep: {
    position: 'relative',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
  progressTitle: {
    position: 'absolute',
    top: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    color: 'white',
  },
};

