import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBar__container}>
      <Navbar bg="light" variant="light" fixed='top' >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className={style.logo} src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink as={Link} to="/home">Home</NavLink>
            <NavLink as={Link} to="/contact-us">contact</NavLink>
            <Nav.Link  as={Link} to="/login">login</Nav.Link>
            <Nav.Link as={Link} to="/privacy__policy">privacy</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
