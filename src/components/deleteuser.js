import React, { useState } from 'react';
import axios from 'axios';
const Deleteuser = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete('https://backend-user-bms6.onrender.com/delete-user', {
        data: {
          username,
          password,
        },
      });

      if (response.data.message === 'User deleted successfully') {
        alert('User deleted successfully!');
        setUsername('');
        setPassword('');
      } else if (response.data.message === 'User not found') {
        alert('User not found!');
      } else if (response.data.message === 'Incorrect password') {
        alert('Incorrect password or username. Please try again.');
      } else {
        alert('An error occurred while deleting the user. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    React.createElement('div', null,
      React.createElement('h2', null, 'Delete User'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('label', { htmlFor: 'username' }, 'Username:'),
        React.createElement('input', {
          type: 'text',
          id: 'username',
          placeholder: 'Enter username',
          value: username,
          onChange: (event) => setUsername(event.target.value),
          required: true,
        }),
        React.createElement('br'),
        React.createElement('label', { htmlFor: 'password' }, 'Password:'),
        React.createElement('input', {
          type: 'password',
          id: 'password',
          placeholder: 'Enter password',
          value: password,
          onChange: (event) => setPassword(event.target.value),
          required: true,
        }),
        React.createElement('br'),
        React.createElement('button', { type: 'submit' }, 'Delete Your Account')
      )
    )
  );
};

export default Deleteuser;
