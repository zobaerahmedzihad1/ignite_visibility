import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineRateReview, MdAdminPanelSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import logo from "../../../assets/logo1.png";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.dashboard__container}>
      <Container>
        <div className={style.dashboard__content}>
          <Row className="g-4">
            <Col ex={4} sm={4} md={3} lg={3}>
              <div style={{ backgroundColor: "#FFFFFF" }}>
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
                      to="/dashboard/logout"
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
                  <h4>Admin Activities</h4>
                  <div className={style.dashboard__route}>
                    <NavLink
                      className={(navInfo) =>
                        navInfo.isActive ? style.active : ""
                      }
                      to="/dashboard/make-admin"
                    >
                      <span>
                        <MdAdminPanelSettings />
                      </span>
                      Make Admin
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

export default Dashboard;
