import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import img from "../../../assets/newsletter.png";
import style from "./OurNewsletter.module.css";

const OurNewsletter = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      toast.success("Thanks for joining us !");
      event.target.reset();
    } else {
      toast.error("Please enter your email");
    }
  };
  return (
    <div className={style.newsletter__container}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className={style.content}>
              <div>
                <h2>Subscribe to our newsletter</h2>
                <h5>
                  Sign up to our newsletter to receive our latest news and
                  products. <br /> Stay updated on the latest developments and
                  special offers!
                </h5>
                <form className={style.form} onSubmit={handleFormSubmit}>
                  <input
                    className={style.input}
                    type="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    name="email"
                  />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <div className={style.newsletter__img}>
              <img src={img} alt="newsletter img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurNewsletter;
