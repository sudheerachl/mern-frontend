import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
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
        <form action="">
          <div className="container">
            <h3>Sign Up</h3>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="email" placeholder="Your Email" name="email" required />
            <label htmlFor="psd">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Your Password" name="psd" required />
            <label htmlFor="remember">
              <input type="checkbox" checked={true} name="remember" /> <b>Remember Me</b>
            </label>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </>
    </div>
  );
}

export default Signin;
