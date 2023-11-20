import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from './navbar';
import Navbar1 from './navbar1';
import Infodoctor from './info'; 
import './profile.css'; 
export function Nave() {
  return (
    <div id='main'>
        <Navbar1 />
        
    
   <div className='profile'>
        <Infodoctor />
      </div>
    <hr/>
    <div className='apply'>
        <h4> Please mention the issue you are facing :</h4><br/>
        <input className ='form-control' type='text' placeholder='Enter your issue' ></input><br/><br/>
        <button id type='submit' className='btn btn-success'>Apply</button>
    </div>
    </div>
  );
}
