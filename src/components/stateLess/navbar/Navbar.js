import React from 'react'
import { Link } from 'react-router-dom'
import Navbar  from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
 function NavBar() {
  return (
    <div>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <LinkContainer to="/">
                     <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/admin">
                      <Nav.Link href="/admin">Admin</Nav.Link> 
                     </LinkContainer>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">App</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Field
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Super</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            code
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;