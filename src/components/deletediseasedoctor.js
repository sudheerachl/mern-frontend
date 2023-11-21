import React, { useState } from 'react';
import axios from 'axios';
const Deletedoctor = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
   const [disease, setDisease] = React.useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete('https://backend-user-bms6.onrender.com/delete-diseased', {
        data: {
          username,
          password,
          disease,
        },
      });

      if (response.data.message === 'Doctor deleted successfully') {
        alert('User deleted successfully!');
        setUsername('');
        setPassword('');
      } else if (response.data.message === 'Doctor not found') {
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
   <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
                         <h3>Exit chatroom</h3>
                             <hr />
                            <label htmlFor="exampleInputUsername1" >
                                <b>Username</b>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Username"
                                className="form-control" 
                                id="exampleInputUsername1" 
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            /> 
                            <label htmlFor="exampleInputPassword1" >
                                <b>Password</b>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <label htmlFor="exampleInputDisease1" >
                                <b>Password</b>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter chatroom name"
                                className="form-control" 
                                id="exampleInputDisease1" 
                                onChange={(event) => setDisease(event.target.value)}
                                required
                            />
                        
                        <button type="submit" >Leave this group</button>
                                  </div>
      </form>
    </div>
  );
};

export default Deletedoctor;
