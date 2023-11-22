import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar2 from './navbar2';
import '../test.css';

const Testingdoctor = () => {
  const username = localStorage.getItem('username');
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    // Fetch diseases for the given username from the backend
    axios.get(`https://backend-user-bms6.onrender.com/getDiseasesd/${username}`)
      .then(response => {
        if (response.data.message === 'User not found') {
          alert('User not found');
        } else if (response.data.message === 'Diseases fetched successfully') {
          setDiseases(response.data.diseases);
         
        } else {
          alert('Error fetching diseases');
        }
      })
      .catch(error => {
        console.error('Error fetching diseases:', error);
        // Handle error as needed
      });
  }, [username]);
  if (!username) {
    return (
      <div id='main'>
        <p>Please sign in again.</p>
        <a href="/signin" className="quiz-button">
            Proceed to signin
          </a>
      </div>
    );
  }
return (
  <>
    <Navbar2 />

    <div className="matter-container">
      <h2 className="matter-heading">Connect with others facing similar challenges</h2>
      <p className="matter-text">
       Harness your skills and experience as a licensed therapist, counselor, or mental health professional to make a positive impact on the lives of others. Join our platform and connect with individuals seeking your guidance and support. Foster a supportive environment, help them navigate their challenges, and contribute to their emotional well-being.As a doctor you can only join upto 3 groups.
      </p>
    </div>

     <div className="classcontain">
      {diseases.map((disease) => (
        <Card className="card" key={disease}>
          <Card.Body>
            <Card.Title className="card-title">{disease}</Card.Title>
            <Card.Text className="card-text">
              Join this group to communicate with others facing similar mental health challenges.
            </Card.Text>
            <Link to={`https://client1-nine.vercel.app/chat?name=${username}&room=${disease}`}>
              <Button className="btn" variant="primary">
                Join
              </Button>
            </Link>
            <Link to="/deletediseased">
               <Button className="btn" variant="primary">
                 Delete
               </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  </>
);
};

export default Testingdoctor;
