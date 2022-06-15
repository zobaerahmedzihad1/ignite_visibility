import React from "react";
import { Col, Row } from "react-bootstrap";
import marketingImg from "../../../assets/marketing2.png";
import style from "./MarketingPlanning.module.css";

const MarketingPlanning = () => {
  return (
    <div id="#marketing__planning">
        <Row className={style.marketing__container}>
      <Col xs={12} sm={12} md={6}>
        <div className={style.marketing__content}>
          <p className={style.marketing__miniTitle}>
            PLANNING YOUR MARKETING CAMPAIGN
          </p>
          <h1>Create a successful marketing campaign</h1>
          <h6>
            An effective campaign demands a great deal of time, and planning. If
            you've never run a marketing campaign before, it can be tough to
            understand.
          </h6>
          <button className="button">Learn More</button>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6}>
        <div>
          <img
            className={style.marketing__image}
            src={marketingImg}
            alt="img"
          />
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default MarketingPlanning;
