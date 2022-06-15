import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';
import style from "./Campain.module.css";

const Campain = () => {
  return (
    <Container>
      <Row className={style.campain__container}>
        <Col xs={12} sm={12} md={6} lg={4}>
          <a href='#marketing__planning' className={style.marketing}>Planing your marketing</a>{" "}
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Link to='#distributing__marketing' className={style.distributing}>Distributing your marketing</Link>{" "}
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Link to="effective__campaigns" className={style.campaigns}>The most effective campaigns</Link>{" "}
        </Col>
        {/* <hr /> */}
      </Row>
    </Container>
  );
};

export default Campain;
