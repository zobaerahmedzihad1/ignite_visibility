import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./ContactUs.module.css";
import { ToastContainer, toast } from "react-toastify";
import contactImg from "../../assets/contact.webp";
import Address from "./OfficeLocation";

const ContactUs = () => {
  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const description = event.target.description.value;
    const message = { name, email, description };
    if (!name && !email && !description) {
      emptyField();
    } else if (!name) {
      errorName();
    } else if (!email) {
      errorEmail();
    } else if (!description) {
      errorDescription();
    } else {
      success();
      event.target.reset();
    }
  };
  const success = () =>
    toast.success("Your Message Successfully Send.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const errorEmail = () =>
    toast.error("Enter Your Email", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const errorName = () =>
    toast.error("Enter Your Name .", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const errorDescription = () =>
    toast.error("Write a Message.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const emptyField = () =>
    toast.error("Please fill this field.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <>
      {" "}
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
                      type="text"
                      placeholder="Enter Your Name"
                      autoComplete="off"
                      name="name"
                    />

                    <input
                      className={style.input}
                      type="email"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      name="email"
                    />
                    <textarea
                      className={style.textarea}
                      name="description"
                      autoComplete="off"
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
      <Address />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ContactUs;
