import React from "react";
import notFound from "../../../assets/notFound2.jpg";
import notFound1 from "../../../assets/notFound1.gif";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./NotFound.module.css";

const NotFound = () => {
  const location = useLocation()
  if(location.key === 'default')
  return (
    <div className={style.notFound__container}>
      <Container>
        <Row className={`${style.notFound} shadow-lg rounded`}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className={style.notFound__img}>
              <img src={notFound} alt="img" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className={style.notFound__content}>
              <h2>Oops</h2>
              <h4>404 - Page Not Found</h4>
              <p>
                The page you're looking for might have been removed has it's
                name changed or is temporary unavailable.
              </p>
              
                <Link to="/home" className="button">
                  Back To Home
                </Link>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
