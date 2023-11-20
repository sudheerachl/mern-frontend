const React = require('react');
const { useState, useEffect } = require('react');
const axios = require('axios');

const Infodoctor = () => {
  const [userDetails, setUserDetails] = useState(null);
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (username) {
      axios.get(`https://backend-user-bms6.onrender.com/info-user/${username}`)
        .then((response) => {
          console.log(response.data);
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
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

module.exports = Infodoctor;
