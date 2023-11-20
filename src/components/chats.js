import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar1 from './navbar1';
import '../test.css';

const Testing = () => {
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
      
      <div className="classcontain">
        {diseases.map((disease) => (
          <Card className="card" key={disease}>
            <Card.Body>
              <Card.Title className="card-title">{disease}</Card.Title>
              <Card.Text className="card-text">
                Join here to communicate with others.
              </Card.Text>
              <Link to={`https://client1-1y5xralsc-sri-1203s-projects.vercel.app/chat?name=${username}&room=${disease}`}>
                <Button className="btn" variant="primary">
                  Join 
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
          <p> https://client1-1y5xralsc-sri-1203s-projects.vercel.app/chat?name=${username}&room=${disease}</p>
    </>
  );
};

export default Testing;
