import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import footerLogo from "../../../assets/logo.png";
import OurWebsite from "../OurWebsite/OurWebsite";
import SocialLinks from "../SocialLinks/SocialLinks";
import style from "./Footer.module.css";

const Footer = () => {
  const location = useLocation();
  if (location?.pathname === "/login" || "/sign-up") {
    return (
      <>
        {/* {location?.pathname === "/login" || "/sign-up" ? null : ( */}
          <>
            <div className={style.footer__container}>
              <Container>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className={style.footer__ourself}>
                      <img src={footerLogo} alt="logo" />
                      <h5>
                        Our feet are on the ground, but our ambitions are above
                        the clouds. Here is how we move from the getting to know
                        you phase to creating something remarkable.
                      </h5>
                      <h6>Follow Us </h6>
                      <SocialLinks />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <OurWebsite />
                  </Col>
                </Row>
              </Container>
            </div>
            <hr />
            <h6 className={style.copyright}>
              Copyright 2022{" "}
              <a
                href="https://zobaerahmedzihad.netlify.app/"
                target="_blank."
                style={{ color: "#777AF2", textDecoration: "none" }}
              >
                @Zobaer Ahmed Zihad
              </a>{" "}
              All rights reserved.
            </h6>
          </>
        {/* )} */}
      </>
    );
  }
};

export default Footer;
