import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import login from "../../assets/login__image.jpg";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = { email, password };
    if (!email && !password) {
      emptyField();
    } else if (!email) {
      errorEmail();
    } else if (!password) {
      errorPassword();
    } else {
      success();
      event.target.reset()
    }
  };

  const success = () =>
    toast.success("Successfully login.", {
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
  const errorPassword = () =>
    toast.error("Enter a valid password.", {
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
    <div className={style.login__container}>
      <h2>Login To Your Account</h2>
      <Container>
        <div className={style.login__content}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className={style.login__inputs}>
                <h3>Login To Continue</h3>
                <p>Please enter your email and password to login</p>
                <div>
                  <div className={style.login__inputs}>
                    <form onSubmit={handleLoginFormSubmit}>
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

                      <button className={style.button}> Login</button>
                    </form>
                    <h5 className={style.sign__up}>
                      New to ignite visibility ? please{" "}
                      <Link to="/sign-up">sign-up</Link>{" "}
                    </h5>
                    <h5 className={style.sign__up}>
                      <Link
                        className={style.privacy__policy}
                        to="/privacy__policy"
                      >
                        Our privacy policy ||
                      </Link>
                      <Link
                        className={style.forgot__password}
                        to="/forgot__password"
                      >
                        Forgot your password
                      </Link>{" "}
                    </h5>
                  </div>
                  <div className={style.social__login}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/google__login"
                    >
                      <span className={style.google__login}>
                        {" "}
                        <ImGoogle2 /> Google
                      </span>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/facebook__login"
                    >
                      <span className={style.facebook__login}>
                        {" "}
                        <FaFacebookSquare /> Facebook
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className={style.login__img}>
                <img src={login} alt="img" />
              </div>
            </Col>
          </Row>
        </div>
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

export default Login;
