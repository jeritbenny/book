import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    
    <Navbar bg="primary" expand="lg">
    <Container>
      <Navbar.Brand href="/">BOOKS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/Favorite">Favorites</Nav.Link>
          <Nav.Link href="/Search">Search</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default Header