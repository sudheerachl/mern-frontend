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

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState('loginSuccess'); // State to manage content visibility
  const [userDetails, setUserDetails] = useState(null); // State to store user details
  const username = localStorage.getItem('username');
  const handleContentChange = (content) => {
    setShowContent(content);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-user-bms6.onrender.com/info-user/${username}`);
        console.log(response.data);
        setUserDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  // Check if user details are loaded before rendering content
  if (!userDetails) {
    return <div>Loading user details...</div>;
  }

  const renderContent = () => {
    switch (showContent) {
      case 'loginSuccess':
        return (
          <div>
            <h2>User Details</h2>
            <p>Username: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
            <p>Name: {userDetails.name}</p>
            <p>Gender: {userDetails.gender}</p>
            <p>Phonenumber: {userDetails.phoneNumber}</p>
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
