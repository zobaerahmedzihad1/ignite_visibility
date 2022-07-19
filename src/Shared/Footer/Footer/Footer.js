import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "../../../assets/logo.png";
import SocialLinks from "../SocialLinks/SocialLinks";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer__container}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className={style.footer__ourself}>
              <img src={footerLogo} alt="logo" />
              <h5>
                ignite visibility Our feet are on the ground, but our ambitions are above the
                clouds. Here is how we move from the getting to know you phase
                to creating something remarkable.
              </h5>
              <SocialLinks/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3>our se</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
