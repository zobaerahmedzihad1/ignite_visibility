import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StartUps from "../StartUps/StartUps";
import style from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={style.aboutUs__container}>
      <Container>
        <Row>
          <Col>
            <div className={style.privacy__title}>
              <h2>Things to know about us</h2>
              <p>
                We are a customer-first eCommerce agency, combining the best of
                UX design, <br /> technology and analytics to create sites that
                shoppers love and retention tactics.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <StartUps />
    </div>
  );
};

export default AboutUs;
