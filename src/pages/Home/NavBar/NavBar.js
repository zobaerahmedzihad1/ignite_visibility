import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../assets/logo.png";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { userLogOut } from "../../components/HotToast/HotToast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const user = useAuthState(auth);
  // console.log(user[0]?.photoURL);
  const [admin] = useAdmin(user);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    userLogOut('Successfully logOut.')
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className={`${style.navbar__container} px-5 sticky-top`}
        >
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/">
              <img style={{ width: "85%" }} src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img className={style.logo} src={logo} alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link as={NavLink} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/blogs">
                    Blogs
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact-us">
                    Contact
                  </Nav.Link>
                  {admin && (
                    <Nav.Link as={NavLink} to="/dashboard/admin">
                      Admin-Activities
                    </Nav.Link>
                  )}
                  {user[0]?.uid ? (
                    <>
                      <Nav.Link as={NavLink} to="/dashboard">
                        Dashboard
                      </Nav.Link>
                      <Nav.Link
                        onClick={handleSignOut}
                        as={NavLink}
                        to="/login"
                      >
                        Sign Out
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
