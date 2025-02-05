import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function ReactBootstrap() {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">My Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#mentor">Mentorship</Nav.Link>
            <Button variant="outline-primary">Hello</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactBootstrap;
