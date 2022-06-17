import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./ContactUs.module.css";
import contactImg from "../../assets/contact.webp";

const ContactUs = () => {
  const handleContactFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={style.contact__container}>
      <Container>
        <Row>
          <Col>
            <div className={style.contact__title}>
              <h2>We'd love to hear from you</h2>
              <p>
                Anything you ask, no matter how small, will make a big
                difference in helping us. Give <br /> us a call or drop by
                anytime, we answer all inquiries within 24 hours.
              </p>
            </div>
          </Col>
        </Row>
        <div className={style.contract}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className={style.contact__img}>
                <img src={contactImg} alt="img" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className={style.contact__form}>
                <div className={style.contact__form__title}>
                  <h3>Have some questions or want to say hi ?</h3>
                  <p>
                    Anything you ask, no matter how small, will <br /> make a
                    big difference in helping us.
                  </p>
                </div>
                <form onSubmit={handleContactFormSubmit}>
                  <input
                    className={style.input}
                    type="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    name="email"
                  />

                  <input
                    className={style.input}
                    type="password"
                    placeholder="Enter Your Password"
                    autoComplete="off"
                    name="password"
                  />
                  <textarea
                    className={style.textarea}
                    name="description"
                    id=""
                    cols="43"
                    rows="3"
                    placeholder="Write Anything You Want..."
                  ></textarea>

                  <button className={style.button}> Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
