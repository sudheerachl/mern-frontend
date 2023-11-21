import React from 'react';
import Navbar from './navbar';
import './Cards.css';

const Signin = () => {
  return (
    <div className="cards-container">
      <Navbar />
      <div className="card">
        <h1>Empower others as a compassionate doctor</h1>
        <p>Are you a licensed therapist or a counselor seeking to make a positive impact on the lives of others? Join our platform and connect with individuals in need of your expertise and support. As a doctor, you can provide a safe and confidential space for individuals to share their experiences, develop coping mechanisms, and find renewed hope.</p>
        <a href="/signindoctor" className="button">Join now</a>
      </div>
      <div className="card">
        <h1>Share your experiences and find connection.</h1>
        <p>Join a supportive community of individuals who understand what you're going through. In this open and non-judgmental environment, you can express your feelings, share your experiences, and find comfort in knowing that you're not alone. Together, you can uplift each other and find strength in shared understanding.</p>
        <a href="/signinuser" className="button">Join now</a>
      </div>
    </div>
  );
};

export default Signin;
