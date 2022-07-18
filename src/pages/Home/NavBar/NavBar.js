import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../assets/logo.png";
import style from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { Button, Modal } from "react-bootstrap";

const NavBar = () => {
  const user = useAuthState(auth);
  // console.log(user[0]?.photoURL);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();

  // logout modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.success("Successfully LogOut.");
    setShow(false);
    navigate("/login");
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
            {/* <a as={NavLink} href="#home" className={style.marketing}>
              <img style={{ width: "85%" }} src={logo} alt="logo" />
            </a>{" "} */}
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
                  {/* {isAdmin === true ? (
                    <Nav.Link as={NavLink} to="/dashboard/admin">
                      Admin-Activities
                    </Nav.Link>
                  ) : (
                    ""
                  )} */}
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
                      <Nav.Link onClick={handleShow}>Sign Out</Nav.Link>
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
      {/* logout modal */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <h3 style={{ fontWeight: "700" }}>Log Out</h3>
          </Modal.Header>
          <h4 className="text-danger ps-3 py-2">
            Are you sure you want to logout ?
          </h4>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={() => handleSignOut()}>
              Log Out
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default NavBar;
