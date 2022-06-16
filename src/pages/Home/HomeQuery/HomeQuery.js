import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./HomeQuery.module.css";

const HomeQuery = () => {
  const handleWebsiteUrlSubmit = (event) => {
    event.preventDefault();
    const website = event.target.website.value;
    const email = event.target.email.value;
    const information = { website, email };

    if (!email && !website) {
      errorInformation();
    } else if (!email) {
      errorEmail();
    } else if (!website) {
      errorWebsite();
    } else {
      success();
      event.target.reset();
    }
  };
  const success = () =>
    toast.success("Successfully Send.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const errorInformation = () =>
    toast.error("Please Fill This Field.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const errorEmail = () =>
    toast.error("Please Enter Your Email", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const errorWebsite = () =>
    toast.error("Please Enter Your Website url", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
                  placeholder="Enter Website url"
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
