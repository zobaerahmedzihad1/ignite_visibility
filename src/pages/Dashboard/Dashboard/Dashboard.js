import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import {
  MdOutlineRateReview,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaHome, FaHistory } from "react-icons/fa";
import logo from "../../../assets/logo1.png";
import style from "./Dashboard.module.css";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  // logout modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.success("Successfully LogOut.");
    setShow(false);
    navigate("/login");
  };

  const user = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin, "admin");
  return (
    <div className={style.dashboard__container}>
      <h2>User Dashboard</h2>
      <Container>
        <div className={style.dashboard__content}>
          <Row className="g-4">
            <Col ex={4} sm={4} md={3} lg={3}>
              <div style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className={style.dashboard__name}>User Dashboard</h3>
                <div className={style.routes__container}>
                  <div className={style.dashboard__logo}>
                    <img src={logo} alt="" />
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/profile"
                    >
                      <span>
                        <CgProfile />
                      </span>
                      Profile
                    </NavLink>
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/my-orders"
                    >
                      <span>
                        <AiOutlineUnorderedList />
                      </span>
                      My Orders
                    </NavLink>
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/add-review"
                    >
                      <span>
                        <MdOutlineRateReview />
                      </span>
                      Review
                    </NavLink>
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/payment-history"
                    >
                      <span>
                        <FaHistory />
                      </span>
                      Payment History
                    </NavLink>
                  </div>
                  <div className={style.dashboard__route}>
                    <span
                      style={{
                        marginLeft: "10px",
                        cursor: "pointer",
                        fontWeight: "400",
                        color:'#1E266D'
                      }}
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard"
                      onClick={handleShow}
                    >
                      <span>
                        <FiLogOut />
                      </span>
                      Log Out
                    </span>
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/home"
                    >
                      <span>
                        <FaHome />
                      </span>
                      Back Home
                    </NavLink>
                  </div>
                </div>
                {admin && (
                  <div className={style.admin__container}>
                    <h4>Admin Activities</h4>
                    <div className={style.dashboard__route}>
                      <NavLink
                        className={(navInfo) =>
                          navInfo.isActive ? style.active : ""
                        }
                        to="/dashboard/admin"
                        style={{ justifyContent: "center" }}
                      >
                        <span>
                          <MdOutlineAdminPanelSettings />
                        </span>
                        Admin Dashboard
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </Col>
            <Col ex={8} sm={8} md={9} lg={9}>
              <Outlet />
            </Col>
          </Row>
        </div>
      </Container>
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
    </div>
  );
};

export default Dashboard;
