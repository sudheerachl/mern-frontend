import React, { useState, useEffect } from 'react';
import Navbar1 from './Navbar1'; // Import Navbar1 if not already imported
import './Home.css'; 
export function Nave() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., send data to server)
    console.log(`Submitted disease name: ${diseaseName}`);
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
          <h2>Inspirational Quotes</h2>
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


