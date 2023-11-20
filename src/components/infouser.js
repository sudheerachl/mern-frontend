import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Infouser = () => {
  const [userDetails, setUserDetails] = useState(null);
  const username = localStorage.getItem('username');

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


  if (!userDetails) {
    return React.createElement('div', null, 'Loading user details...');
  }

  return React.createElement('div', null,
    React.createElement('h2', null, 'User Details'),
    React.createElement('p', null, `Username: ${userDetails.username}`),
    React.createElement('p', null, `Email: ${userDetails.email}`),
    React.createElement('p', null, `Name: ${userDetails.name}`),
    React.createElement('p', null, `Gender: ${userDetails.gender}`)
  );
};

export default Infouser;
