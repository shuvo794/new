import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  const {user,logOut}=useAuth();
    return (
                 <>
  <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect  expand="lg" className="p-4">
    <Container>
    <Navbar.Brand href="#home">Genious </Navbar.Brand>
<Navbar.Toggle />
 <Navbar.Collapse className="justify-content-end">
        <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="text-white" as={HashLink} to="/home#service">Services</Nav.Link>
      <Nav.Link className="text-white" as={HashLink} to="/home#expert">Exparts</Nav.Link>
        {user?.email ?
       
         <Button onClick={logOut} variant="light">Log Out</Button>:
          <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
        }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

    
   
  
  
</> 
        
    );
};

export default Header;