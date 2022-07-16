import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { FaHome, FaUserFriends, FaUsers } from "react-icons/fa";
import logo from "../../../assets/logo1.png";
import style from "./AdminDashboard.module.css";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const AdminDashboard = () => {
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className={style.dashboard__container}>
      <h2>Admin Dashboard</h2>
      <Container>
        <div className={style.dashboard__content}>
          <Row className="g-4">
            <Col ex={4} sm={4} md={3} lg={3}>
              <div style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className={style.dashboard__name}>Admin Dashboard</h3>
                <div className={style.routes__container}>
                  <div className={style.dashboard__logo}>
                    <img src={logo} alt="" />
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/admin/all__user"
                    >
                      <span>
                        <FaUsers />
                      </span>
                      All Users
                    </NavLink>
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/admin/all__orders"
                    >
                      <span>
                        <AiOutlineUnorderedList />
                      </span>
                      All Orders
                    </NavLink>
                  </div>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/admin/manage__reviews"
                    >
                      <span>
                        <BiCommentDetail />
                      </span>
                      Manage Reviews
                    </NavLink>
                  </div>

                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/login"
                      onClick={handleSignOut}
                    >
                      <span>
                        <FiLogOut />
                      </span>
                      Log Out
                    </NavLink>
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
                <div className={style.admin__container}>
                  <h4>User Activities</h4>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard"
                      style={{ justifyContent: "center" }}
                    >
                      <span>
                        <FaUserFriends />
                      </span>
                      User Dashboard
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
            <Col ex={8} sm={8} md={9} lg={9}>
              <Outlet />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AdminDashboard;
