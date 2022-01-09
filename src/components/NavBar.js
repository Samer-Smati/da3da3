import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <Nav.Link as={Link} to="/">Home</Nav.Link>
       <Nav.Link as={Link} to="/Movie">Movie</Nav.Link> 
       <Nav.Link as={Link} to="/Series">Series</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar
