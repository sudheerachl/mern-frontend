import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  return (
    <>
      <div>
        <h1><Link to="/">Mind Heaven</Link></h1>
        <div className="navBar sticky">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link className="active" to="/blogs">Blogs</Link></li>
            <li><Link to="/healthproblems">Health Problems</Link></li>
            <li><Link to="/quiz2">Quiz</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </div>
        <div className="main">
          <div className="heading">
            <h2>Blogs</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 py-3 py-sm-0">
                <div className="card card-style">
                  <div className="card-img">
                    <img style={{ height: '250px' }} src='children.jpg'className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">What every child needs for good mental health?</h5>
                    <p className="card-text">The Covid-19 pandemic has changed the life of children in profound ways. The safety measures like: Isolation,...</p>
                    <Link to="https://www.mhanational.org/what-every-child-needs-good-mental-health" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 py-3 py-sm-0">
                <div className="card card-style">
                  <div className="card-img">
                    <img style={{ height: '250px' }} src='questions.jpg' className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">What is depression, mental health disorders and what are the commonly asked questions?</h5>
                    <p className="card-text">Seeking help for your mental health as early as possible can make a big...</p>
                    <Link to="https://mpowerminds.com/blog/Common-questions-people-ask-about-depression-and-mental-health-disorders-and-Finding-a-good-psychiatrist-in-Mumbai" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 py-3 py-sm-0">
                <div className="card card-style">
                  <div className="card-img">
                    <img style={{ height: '250px' }} src="beKind.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">My Journey from having anxiety to becoming fully normal</h5>
                    <p className="card-text">My first experience of anxiety wasn’t until I started my second year at sixth form and wow did it hit me hard!...</p>
                    <Link to="https://www.rethink.org/news-and-stories/blogs/2021/09/be-kind-to-others-as-not-every-struggle-is-visible-harriets-story/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
