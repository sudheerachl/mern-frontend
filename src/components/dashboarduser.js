import React, { useState, useEffect } from 'react';
import Navbar1 from './navbar1'; // Import Navbar1 if not already imported
import './Home.css'; 
import axios from 'axios';
export function Naveuser() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [diseaseName, setDiseaseName] = useState('');

  const quotes = [
    "Your mental health is a priority. Don't forget to take care of yourself.",
    "It's okay not to be okay. Reach out for support when you need it.",
    "You are stronger than you think. Believe in yourself.",
    "Happiness is not the absence of problems but the ability to deal with them.",
    "Your mental health matters. Take time for self-care.",
  ];

  const handleInputChange = (e) => {
    setDiseaseName(e.target.value);
  };
const username = localStorage.getItem('username');
const handleSubmit = (e) => {
  e.preventDefault();

  // Send both username and diseaseName to the backend
  axios.post('https://backend-user-bms6.onrender.com/addDisease', { username, disease: diseaseName })
    .then(response => {
      console.log(response.data);
      if (response.data.message === "Disease added successfully") {
        console.log("Disease added successfully");
        alert(`Disease added successfully`);
      } else if (response.data.message === 'Disease already exists for this user') {
        alert('Disease already exists for this user.');
      } else if (response.data.message === 'User not found') {
        alert('Username not found');
      } else {
        console.error('Error logging in');
      }
    })
    .catch(error => {
      console.error('Error adding disease:', error);
      // You can handle errors or display an error message to the user here
    });
};



  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='main'>
      <Navbar1 />
      <hr />
      <div className="home-container">
        <div className="quote-section">
          <h2>Keep In Mind</h2>
          <p>{quotes[quoteIndex]}</p>
        </div>
        <div className="disease-form-section">
          <h2>Submit Your Disease</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="diseaseName">Name of Disease:</label>
            <input
              type="text"
              id="diseaseName"
              name="diseaseName"
              value={diseaseName}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="quiz-section">
          
          <h2>Confused about your mental health?</h2>
          <p>Take this quiz to gain insights and find support.</p>
          <a href="/quiz2" className="quiz-button">
            Take the Quiz
          </a>
        </div>
      </div>
    </div>
  );
};


