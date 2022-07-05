import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.dashboard__container}>
      <Container>
        <div className={style.dashboard__content}>
          <Row>
            <Col ex={4} sm={4} md={3} lg={3}>
              <div className={style.routes__container}>
                <div>
                  <div>
                    <span>icon</span>
                    <NavLink to="/dashboard/profile">
                      <button>Profile</button>
                    </NavLink>
                  </div>
                  <div>
                    <span>icon</span>
                    <NavLink to="/dashboard/my-orders">
                      <button>My Orders</button>
                    </NavLink>
                  </div>
                  <div>
                    <span>icon</span>
                    <NavLink to="/dashboard/add-review">
                      <button>Review</button>
                    </NavLink>
                  </div>
                  <div>
                    <span>icon</span>
                    <NavLink to="/dashboard/logout">
                      <button>Log Out</button>
                    </NavLink>
                  </div>
                  <div>
                    <span>icon</span>
                    <NavLink to="/home">
                      <button>Back Home</button>
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
