import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light"  sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" className="fw-bold">
            Creative Academy
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              FAQ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
