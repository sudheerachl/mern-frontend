import React, { useState, useEffect } from 'react';
import Navbar2 from './navbar2'; // Import Navbar1 if not already imported
import './Home.css'; 
import axios from 'axios';
export function Navedoctor() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [diseaseName, setDiseaseName] = useState('');

  const quotes = [
    "Your mental health is a priority. Don't forget to take care of yourself.",
  "Making a difference in someone's life is one of the greatest rewards there is. Embrace the power of your profession to help others heal and find hope.",
"You are a beacon of light for those struggling in darkness. Your empathy, understanding, and expertise can guide individuals towards brighter horizons.",
"Every step you take to support and empower your patients is a step towards a healthier and more resilient society. Never underestimate the impact of your work.",
"The path of a mental health professional is not always easy, but it is undeniably fulfilling. Cherish the moments of connection, growth, and transformation you witness.",
"Your dedication to improving mental well-being is a testament to your compassion and commitment. Keep inspiring others with your unwavering belief in their potential.",
  ];

  const handleInputChange = (e) => {
    setDiseaseName(e.target.value);
  };
const username = localStorage.getItem('username');
const handleSubmit = (e) => {
  e.preventDefault();
//Maximum number of diseases reached
  // Send both username and diseaseName to the backend
  axios.post('https://backend-user-bms6.onrender.com/addDiseased', { username, disease: diseaseName })
    .then(response => {
      console.log(response.data);
      if (response.data.message === "Disease added successfully") {
        console.log("Disease added successfully");
        alert(`Disease added successfully`);
      } else if (response.data.message === 'Disease already exists for this user') {
        alert('Disease already exists for this user.');
      } 
        else if (response.data.message === 'Maximum number of diseases reached') {
        alert('Maximum number of specializations reached. You can only be in 3 groups as a doctor.');
      } 
      else if (response.data.message === 'User not found') {
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
    if (!username) {
    return (
      <div id='main'>
        <p>Please sign in again.</p>
        <a href="/signin" className="quiz-button">
            Proceed to signin
          </a>
      </div>
    );
  }
  return (
    <div id='main'>
      <Navbar2 />
      <hr />
      <div className="home-container">
        <div className="quote-section">
          <h2>Keep In Mind</h2>
          <p>{quotes[quoteIndex]}</p>
        </div>
        <div className="disease-form-section">
          <h2>Your Speciality</h2>
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
          
          <h2>Keep track of your mental health too.</h2>
          <p>Take this quiz to gain insights and know yourself more.</p>
          <a href="/quiz2" className="quiz-button">
            Take the Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

