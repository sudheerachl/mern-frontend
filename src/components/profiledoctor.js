import React, { useState } from 'react';
import Navbar2 from './navbar2';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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

const Profiledoctor = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState('loginSuccess'); // State to manage content visibility

  const handleContentChange = (content) => {
    setShowContent(content);
  };

  const renderContent = () => {
    switch (showContent) {
      case 'loginSuccess':
        return (
          <div>
            <h1>Login Success Page</h1>
          </div>
        );
      case 'deleteDoctor':
        return (
          <div>
            <h1>Delete Doctor</h1>
          </div>
        );
      case 'updateDoctor':
        return (
          <div>
            <h1>Edit Doctor</h1>
          </div>
        );
      case 'infoDoctor':
        return (
          <div>
            <h1>View Doctor Info</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <Navbar2 />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link to='/' onClick={() => handleContentChange('loginSuccess')} style={buttonStyle}>
          Logout
        </Link>
        <Link to='/deletedoctor' onClick={() => handleContentChange('deleteDoctor')} style={buttonStyle}>
          Delete Doctor
        </Link>
        <Link to='/updatedoctor' onClick={() => handleContentChange('updateDoctor')} style={buttonStyle}>
          Edit Doctor
        </Link>
        <Link to='/infodoctor' onClick={() => handleContentChange('infoDoctor')} style={buttonStyle}>
          View Doctor Info
        </Link>
      </div>
      {renderContent()}
    </div>
  );
};

export default Profiledoctor;
