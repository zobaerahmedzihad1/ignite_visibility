import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
// import logo from "../../../assets/logo.png";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <Navbar className={style.navBar} bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" className="fw-bold">
            <img className={style.logo} src={logo} alt="" />
          </Navbar.Brand>
          <Nav className={`${style.navLink} ms-auto`}>
            <Nav.Link as={NavLink} to="/">
              Home
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
            <Nav.Link as={NavLink} to="/login">
              login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
