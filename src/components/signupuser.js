import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signupuser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://backend-user-bms6.onrender.com/signup-user', {
        name,
        username,
        phoneNumber,
        gender,
        email,
        password,
      })
      .then((result) => {
        console.log(result);

        if (result.data === 'Username already registered') {
          alert('Username already registered! Please try a different username.');
          return;
        }

        if (result.data === 'Email already registered') {
          alert('E-mail already registered! Please try a different email address.');
          return;
        }

        alert('Registered successfully! Please Login to proceed.');
        navigate('/signin');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>
        <Link to="/">Mind Mendor</Link>
      </h1>
      <div className="navBar sticky">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/healthproblems">Health Problems</Link>
          </li>
          <li>
            <Link to="/quiz2">Quiz</Link>
          </li>
     <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link className="active" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
     <div className="container">
        <h3>Sign Up</h3>
            <hr />
       <form onSubmit={handleSubmit}>
           <div className="container">
              <label htmlFor="exampleInputEmail1">
                <b>Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                id="exampleInputname"
                onChange={(event) => setName(event.target.value)}
                required
              /> 
           
             <label htmlFor="exampleInputEmail1">
                <b>Email Id</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
              /> 
              <label htmlFor="exampleInputUsername">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control"
                id="exampleInputusername"
                onChange={(event) => setUsername(event.target.value)}
                required
              /> 
              <label htmlFor="exampleInputPassword1">
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
              <label htmlFor="exampleInputGender">
                <b>Gender</b>
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="maleRadio"
                  name="gender"
                  value="Male"
                  onChange={(event) => setGender(event.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="maleRadio">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="femaleRadio"
                  name="gender"
                  value="Female"
                  onChange={(event) => setGender(event.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="femaleRadio">
                  Female
                </label>
              </div>
              <div className="form-check">
  <input
    className="form-check-input"
    type="radio"
    id="otherRadio"
    name="gender"
    value="Other"
    onChange={(event) => setGender(event.target.value)}
    required
  />
  <label className="form-check-label" htmlFor="otherRadio">
    Other
  </label>
</div>

  <label htmlFor="exampleInputPhoneNumber">
    <b>PhoneNumber</b>
  </label>
  <input
    type="PhoneNumber"
    placeholder="Enter PhoneNumber"
    className="form-control"
    id="exampleInputPhoneNumber"
    onChange={(event) => setPhoneNumber(event.target.value)}
    required
  />
</div>
<button type="submit">Register</button>
</form>
 
      </div>
  
  );
}

export default Signupuser;


