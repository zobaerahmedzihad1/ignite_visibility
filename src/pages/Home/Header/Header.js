import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./Header.module.css";
import headerImage from "../../../assets/marketing1.jpg";

const Header = () => {
  return (
    <Row className={style.header__container}>
      <Col xs={12} sm={12} md={6}>
        <div className={style.header__content}>
          <h5 className={style.header__miniTitle}>
            Welcome to Sway <span>We are a digital marketing agency</span>
          </h5>

          <h1>Making an effective marketing campaign</h1>
          <p>
            Our service offering brings together creativity and exceptional
            business results. For us, the two are inseparable. It’s that simple
            and effective.
          </p>
          <button>Start a Project</button>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6}>
        <div>
          <img className={style.header__image} src={headerImage} alt="img" />
        </div>
      </Col>
    </Row>
  );
};

export default Header;
