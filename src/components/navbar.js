import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderBottom: 'white solid 0.6vw' }}>
        <div className="container-fluid">
          <img src="logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          <Link className="navbar-brand" to="/">MIND HEAVEN</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs" aria-label="Navigate to Blogs page">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/healthproblems" aria-label="Navigate to Health Problems page">Health Problems</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz2" aria-label="Navigate to Quiz page">Quiz</Link>
              </li>
               <li className="nav-item">
                <Link className="btn btn-outline-primary" to="/signin" role="button" aria-label="Sign in">Sign In</Link>
               </li>
               <li className="nav-item">
                <Link className="btn btn-outline-primary" to="/signup" role="button" aria-label="Sign up">Sign Up</Link>
               </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
