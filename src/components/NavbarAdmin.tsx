import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarAdmin = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Control de alumnos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to={"/Alumnos"}>Listar Alumnos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/Alumnos"} className={"linknav"}>
              Ver cursos
            </Link>
          </Nav.Link>
        </Nav>
        <Nav className="justify-contend-end">
          <Nav.Item>
            <Button size="lg">Login</Button>
            {` `}
            <Button variant="danger" size="lg">
              Logout
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
