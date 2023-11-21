import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Updatedoctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post('https://backend-user-bms6.onrender.com/update-doctor', {
        name,
        username,
        phoneNumber,
        gender,
        email,
        password,
      });

      if (result.data.message === 'Doctor information updated successfully') {
        alert('Update successful!');
        navigate('/dashboarddoctor');
      } else {
        alert('Incorrect password! Please try again.');
      }
    } catch (error) {
      console.error('Error updating doctor information:', error);
    }
  };

return (
    <div className="container">
    <h3>Edit</h3>
      <hr />
    <form onSubmit={handleSubmit}>
      <div className="container">
       <label htmlFor="exampleInputname">
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
       <label htmlFor="exampleInputusername">
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
      <button type="submit">Update</button>
    </form>
   </div>
  
  );
}
export default Updatedoctor
