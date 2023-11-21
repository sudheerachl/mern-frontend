import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signindoctor = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'https://backend-user-bms6.onrender.com/login-doctor', {username, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
            localStorage.setItem('username', username);
              alert(`Login successfull: ${username}`);
                navigate('/dashboarddoctor');
            }
            else if(result.data.message === "Wrong password"){
                alert('Incorrect password! Please try again.');
            }
            else if(result.data.message === "User not found"){
                alert('Username not found');
            }
            else{
                 alert('error');}
                
        })
        .catch(err => console.log(err));
    }


    
  return (
    <div>
      <>
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
              <Link className="active" to="/signin">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
       <form onSubmit={handleSubmit}>
                        <div className="container">
                            <label htmlFor="exampleInputUsername1" >
                                <strong>Username</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Username"
                                className="form-control" 
                                id="exampleInputUsername1" 
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="container">
                            <label htmlFor="exampleInputPassword1" >
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" >Login</button>
        </form>
      </>
    </div>
  );
}

export default Signindoctor;
