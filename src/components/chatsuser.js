import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar1 from './navbar1';
import '../test.css';

const Testinguser = () => {
  const username = localStorage.getItem('username');
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    // Fetch diseases for the given username from the backend
    axios.get(`https://backend-user-bms6.onrender.com/getDiseases/${username}`)
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

return (
  <>
    <Navbar1 />

    <div className="matter-container">
      <h2 className="matter-heading">Connect with others facing similar challenges</h2>
      <p className="matter-text">
        Mental health challenges can be isolating and overwhelming, but you don't have to go through it alone. Join our community groups to connect with others who understand what you're going through, share your experiences, and find support.Some groups might not have certified doctors.we are trying our best to reach out to doctors so that we can provide every group with a doctor. We value your mental health. And will continue to workhard for that.
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
            <Link to='/deletedisease'>
              <Button className="btn" variant="primary">
                Exit
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
      
  </>
);

};
export default Testinguser;
