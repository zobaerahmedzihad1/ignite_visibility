import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/signup.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  emptyField,
  emptyName,
  emptyEmail,
  createPassword,
  shortPassword,
  reTypePassword,
  doNotMatchPassword,
  promise,
  createUserSuccessfully,
} from "../components/Tostify/Tostify";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import style from "./SignUp.module.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const nevigate = useNavigate();

  const handleCreateUser = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const primaryPassword = event.target.primaryPassword.value;
    const confirmPassword = event.target.confirmPassword.value;
    const newUser = { name, email, primaryPassword, confirmPassword };

    createUserWithEmailAndPassword(email, confirmPassword);

    if (!name && !email && !primaryPassword && !confirmPassword) {
      emptyField();
    } else if (!name) {
      emptyName();
    } else if (!email) {
      emptyEmail();
    } else if (!primaryPassword) {
      createPassword();
    } else if (!(primaryPassword.length >= 6)) {
      shortPassword();
    } else if (!confirmPassword) {
      reTypePassword();
    } else if (!(primaryPassword === confirmPassword)) {
      doNotMatchPassword();
    } else {
      createUserSuccessfully()
      // promise()
      event.target.reset();
    }
    event.preventDefault();
  };

  if (user) {
    nevigate("/home");
  }

  return (
    <div>
      <div className={style.signUp__container}>
        <h2>Create Your Own Account</h2>
        <Container>
          <div className={style.signUp__content}>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className={style.signUp__img}>
                  <img src={signUp} alt="img" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className={style.signUp__inputs}>
                  <h3>Please SignUp</h3>
                  <p>Please enter your information to create your account</p>
                  <div>
                    <div className={style.signUp__inputs}>
                      <form onSubmit={handleCreateUser}>
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
                        <input
                          className={style.input}
                          type="password"
                          placeholder="Create A Secure Password"
                          autoComplete="off"
                          name="primaryPassword"
                        />
                        <input
                          className={style.input}
                          type="password"
                          placeholder="Confirm Your Password"
                          autoComplete="off"
                          name="confirmPassword"
                        />

                        <button className={style.button}>Sign up</button>
                      </form>
                      <h5 className={style.sign__up}>
                        Already have an account. Please
                        <Link className="m-2" to="/login">
                          Login
                        </Link>{" "}
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
                      <SocialLogin />
                    </div>
                  </div>
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
    </div>
  );
};

export default SignUp;
