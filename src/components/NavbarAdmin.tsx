import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const NavbarAdmin = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Control de alumnos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/Alumnos");
            }}
          >
            Listar Alumnos
          </Nav.Link>
          <Nav.Link>
            <Link to={"/Cursos"} className={"linknav"}>
              Ver cursos
            </Link>
          </Nav.Link>
        </Nav>
        <Nav className="justify-contend-end">
          <Nav.Item>
            <Button size="lg" onClick={() => navigate("/Login")}>
              Login
            </Button>
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
