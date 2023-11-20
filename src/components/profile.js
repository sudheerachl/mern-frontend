import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar1 from './navbar1';

const ProfilePage = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
  };

  return (
      <div className="profile-page">
        <Navbar1 />
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Success Page</h1>
      <Link to='/Homepage' style={buttonStyle}>Logout</Link>
      <Link to='/deleteuser' style={buttonStyle}>Delete Doctor</Link>
      <Link to='/updateuser' style={buttonStyle}>Edit Doctor</Link>
      <Link to='/infouser' style={buttonStyle}>View Doctor Info</Link>
    </div>
</div>
  );
}



export default ProfilePage;
