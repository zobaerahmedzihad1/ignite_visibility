import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DistributingMarketing from "../DistributingMarketing/DistributingMarketing";
import EffectiveCampaigns from "../EffectiveCampaigns/EffectiveCampaigns";
import MarketingPlanning from "../MarketingPlanning/MarketingPlanning";
import style from "./Campain.module.css";

const Campain = () => {
  return (
    <>
      <Container>
        <Row className={style.campain__container}>
          <Col xs={12} sm={12} md={6} lg={4}>
            <a as={Link} href="#marketing__planning" className={style.marketing}>
              Planing your marketing
            </a>{" "}
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <a as={Link} href="#distributing__marketing" className={style.distributing}>
              Distributing your marketing
            </a>{" "}
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <a  as={Link} href="#effective__campaigns" className={style.campaigns}>
              The most effective campaigns
            </a>{" "}
          </Col>
          {/* <hr /> */}
        </Row>
      </Container>
      <MarketingPlanning/>
      <DistributingMarketing/>
      <EffectiveCampaigns/>
    </>
  );
};

export default Campain;
