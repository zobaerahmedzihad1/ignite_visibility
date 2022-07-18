import React from "react";
import { Col, Row } from "react-bootstrap";
import effectiveCampaignImg from "../../../assets/marketing4.png";
import { useNavigate } from "react-router-dom";
import style from "./EffectiveCampaigns.module.css";

const EffectiveCampaigns = () => {
  const navigate = useNavigate();
  return (
    <div id="effective__campaigns">
      <Row className={style.effective__campaign__container}>
        <Col xs={12} sm={12} md={6}>
          <div className={style.effective__campaign__content}>
            <p className={style.effective__campaign__miniTitle}>
              WE SEEK THE MOST EFFICIENT CAMPAIGNS
            </p>
            <h1>Converting clients through your marketing campaign</h1>
            <h6>
              Every digital marketing project has different challenges and each
              business has its own unique needs. That's why we offer
              personalized solutions for your business. Learn More
            </h6>
            <button onClick={() => navigate("/blogs")} className="button">
              Learn More
            </button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <div>
            <img
              className={style.effective__campaign__image}
              src={effectiveCampaignImg}
              alt="img"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EffectiveCampaigns;
