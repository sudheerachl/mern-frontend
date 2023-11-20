import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar1 from './navbar1';
import '../test.css';
import axios from 'axios';

 const username = localStorage.getItem('username');
 const [as, setDiseases] = useState([]);

  useEffect(() => {
    // Fetch diseases for the given username from the backend
    axios.get(`https://backend-user-bms6.onrender.com/getDiseases/${username}`)
      .then(response => {
        if(response.data.message=='User not found'){
          aler('User not found');}
        else if(result.data === "Diseases fetched successfully"){
        setDiseases(response.data.diseases);
        alert('Diseases fetched successfully!');
      }
        else{alert('error');}
          )
      .catch(error => {
        console.error('Error fetching diseases:', error);
        // Handle error as needed
      });
  }, [username]);
const Testing = () => {
  useEffect(() => {
    // Add the link element to dynamically apply the test.css styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../test.css'; // Replace with the correct path to your test.css file
    document.head.appendChild(link);

    // Clean up the link element on component unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
    <Navbar1 />
    
    <div className="classcontain">
      
      {as.map((a) => (
        <Card className="card" key={a}>
          
          <Card.Body>
            <Card.Title className="card-title">{a}</Card.Title>
            <Card.Text className="card-text">
              Join here to communicate with others.
            </Card.Text>
            <Link to={`https://client1-1y5xralsc-sri-1203s-projects.vercel.app/chat?name=${username}&room=${a}`}>
              <Button className="btn" variant="primary">
                Join
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Testing;
