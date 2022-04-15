import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
    
    <Nav className="mr-auto">
      <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/generator">Generator</Nav.Link>
      <Nav.Link as={Link} to="/document">Document</Nav.Link>
      <Nav.Link as={Link} to="/contact">contact</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;