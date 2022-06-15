import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import distributingImg from "../../../assets/marketing3.png";
import style from "./DistributingMarketing.module.css";

const DistributingMarketing = () => {
  return (
    <div id="distributing__marketing">
      <Row className={style.distributing__container}>
        <Col xs={12} sm={12} md={6}>
          <div>
            <img
              className={style.distributing__image}
              src={distributingImg}
              alt="img"
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <div className={style.distributing__content}>
            <p className={style.distributing__miniTitle}>
            DISTRIBUTING YOUR MARKETING CAMPAIGN
            </p>
            <h1>Focus on all of the key features for your product</h1>
            <h6>
              An effective campaign demands a great deal of time, and planning.
              If you've never run a marketing campaign before, it can be tough
              to understand.
            </h6>
            <button className="button">Learn More</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DistributingMarketing;
