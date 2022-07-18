import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import headerImage from "../../../assets/marketing1.jpg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Row id='home' className={style.header__container}>
      <Col xs={12} sm={12} md={6}>
        <div className={style.header__content}>
          <h5 className={style.header__miniTitle}>
            <span className={style.title1}>Welcome to ignite visibility </span>
            <span className={style.title2}>
              We are a digital marketing agency
            </span>
          </h5>

          <h1>Making an effective marketing campaign</h1>
          <h6>
            Our service offering brings together creativity and exceptional
            business results. For us, the two are inseparable. It's that simple
            and effective.
          </h6>
          <button className="button">
            <a as={Link} className={style.start__projectBtn} href="#pricing">
              Start a Project
            </a>{" "}
          </button>
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
