import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import login from "../../assets/login__image.jpg";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
  };
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
                      <Link className={style.privacy__policy} to="/sign-up">Our privacy policy ||</Link> 
                      <Link className={style.forgot__password} to="/sign-up">Forgot your password</Link>{" "}
                    </h5>
                  </div>
                  <div className={style.social__login}>
                    <span className={style.google__login}>
                      {" "}
                      <ImGoogle2 /> Google
                    </span>
                    <span className={style.facebook__login}>
                      {" "}
                      <FaFacebookSquare /> Facebook
                    </span>
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
    </div>
  );
};

export default Login;
