import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/startup-help.jpg";
import style from "./StartUps.module.css";

const StartUps = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <div className={style.startUp__img}>
              <img src={img} alt="img" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className={style.startUp__content}>
              <div>
                <h2>
                  We help startups launch, <br /> grow and succeed very fast
                </h2>
                <h5>
                  We're obsessive about knowledge transfer, so whenever we've
                  developed a unique solution for your business, we'll bring
                  everything in-house for you to manage and control.
                </h5>
                <button
                  onClick={() => navigate("/contact-us")}
                  className="button"
                >
                  Let's get in touch
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StartUps;
