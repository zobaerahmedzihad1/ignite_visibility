import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  successfullyQuerySend,
  QueryErrorInformation,
  errorEmail,
  emptyQueryWebsite,
} from "../../components/Tostify/Tostify";
import style from "./HomeQuery.module.css";

const HomeQuery = () => {
  const handleWebsiteUrlSubmit = (event) => {
    event.preventDefault();
    const website = event.target.website.value;
    const email = event.target.email.value;
    const information = { website, email };

    if (!email && !website) {
      QueryErrorInformation();
    } else if (!email) {
      errorEmail();
    } else if (!website) {
      emptyQueryWebsite();
    } else {
      successfullyQuerySend();
      event.target.reset();
    }
  };
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
            <form onSubmit={handleWebsiteUrlSubmit}>
              <div className={style.home__query__inputs}>
                <input
                  name="website"
                  // required
                  autoComplete="off"
                  type="text"
                  placeholder="Enter Your Website url"
                />
                <input
                  name="email"
                  // required
                  autoComplete="off"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="button">Send Query</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
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
    </div>
  );
};

export default HomeQuery;
