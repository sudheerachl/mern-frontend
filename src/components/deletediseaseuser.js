import React, { useState } from 'react';
import axios from 'axios';
const Deleteuser = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
   const [disease, setDisease] = React.useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete('https://backend-user-bms6.onrender.com/delete-disease', {
        data: {
          username,
          password,
          disease,
        },
      });

      if (response.data.message === 'Disease deleted successfully') {
        alert('Chatroom exited successfully!');
         } else if (response.data.message === 'User not found') {
        alert('User not found!');
      } else if (response.data.message === 'Incorrect password') {
        alert('Incorrect password. Please try again.');
      } 
       else if (response.data.message === 'Disease not found for this user') {
        alert('Chatroom not found!');
      }else {
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
                                <b>Chatroom</b>
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

export default Deleteuser;
