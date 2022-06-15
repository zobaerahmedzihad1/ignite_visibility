import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./HomeQuery.module.css";

const HomeQuery = () => {
  return (
    <div>
      <Container>
        <Row className={style.home__query__container}>
          <Col>
            <div className={style.home__query__content}>
              <h2>Ready to take your website to the next level ?</h2>
              <p>
                We can help ! Our team has worked with businesses of all
                different sizes.
              </p>
            </div>
            <div className={style.home__query__inputs}>
              <input type="text" placeholder="Enter Website url" />
              <input type="email" placeholder="Enter Your Email" />
              <button className='button'>send query</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeQuery;
