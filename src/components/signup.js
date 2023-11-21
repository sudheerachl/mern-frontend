import React from 'react';
import Navbar from './navbar';

const Signup = () => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  };
  return (
    <div>
    <Navbar />
    <div className="container">
      
       <div className="card card-style">
        <h1>Empower others as a compassionate doctor</h1>
        <p>
          Are you a licensed therapist or a counselor seeking to make a
          positive impact on the lives of others? Join our platform and connect
          with individuals in need of your expertise and support. As a doctor,
          you can provide a safe and confidential space for individuals to share
          their experiences, develop coping mechanisms, and find renewed hope.
        </p>
        <a href="/signupdoctor" className="button" style={buttonStyle}>
          Join now
        </a>
      </div>
      <div className="card card-style">
        <h1>Share your experiences and find connection.</h1>
        <p>
          Join a supportive community of individuals who understand what you're
          going through. In this open and non-judgmental environment, you can
          express your feelings, share your experiences, and find comfort in
          knowing that you're not alone. Together, you can uplift each other and
          find strength in shared understanding.
        </p>
       <a href="/signupuser" className="button" style={buttonStyle}>
          Join now
        </a>
      </div>
    </div>
   </div>
  );
};

export default Signup;
