import React, { useState, useEffect } from 'react';
import Navbar1 from './navbar1';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

const profileStyle = {
  marginTop: '50px',
  padding: '20px',
  border: '2px solid #4CAF50',
  borderRadius: '10px',
  maxWidth: '600px',
  margin: 'auto',
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState('loginSuccess');
  const [userDetails, setUserDetails] = useState(null);
  const username = localStorage.getItem('username');
  
  const handleContentChange = (content) => {
    setShowContent(content);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-user-bms6.onrender.com/info-user/${username}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);
  if (!userDetails) {
    return (<div>
      <p>Loading user details...Please signin again.</p>
          <a href="/signin" className="quiz-button">
            Proceed to signin
          </a></div>);
  }

  const renderContent = () => {
    switch (showContent) {
      case 'loginSuccess':
        return (
          <div style={profileStyle}>
            <h2>User Details</h2>
            <p><strong>Username:</strong> {userDetails.username}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Gender:</strong> {userDetails.gender}</p>
            <p><strong>Phonenumber:</strong> {userDetails.phoneNumber}</p>
            <p><strong>Chatrooms:</strong> {userDetails.diseases.join(', ')}</p>
          </div>
        );

      case 'deleteUser':
        return (
          <div>
            <h1>Delete User</h1>
          </div>
        );

      case 'updateUser':
        return (
          <div>
            <h1>Update User</h1>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <Navbar1 />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link to='/' onClick={() => handleContentChange('loginSuccess')} style={buttonStyle}>
          Logout
        </Link>
        <Link to='/deleteuser' onClick={() => handleContentChange('deleteUser')} style={buttonStyle}>
          Delete User
        </Link>
        <Link to='/updateuser' onClick={() => handleContentChange('updateUser')} style={buttonStyle}>
          Edit User
        </Link>
      </div>
      {renderContent()}
    </div>
  );
};

export default ProfilePage;
