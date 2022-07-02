import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import login from "../../../assets/login__image.jpg";
import style from "./Login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  successfullyLogin,
  emptyField,
  emptyEmail,
  errorPassword,
  wrongPassword,
} from "../../components/Tostify/Tostify";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // console.log(user, "login");
  if(loading){
    return <Loading/>
  }

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = { email, password };
    signInWithEmailAndPassword(email, password);
    if (!email && !password) {
      emptyField();
    } else if (!email) {
      emptyEmail();
    } else if (error?.message ) {
      errorPassword();
    } else if (error?.message) {
      wrongPassword(error?.message);
    } else if(!error) {
      wrongPassword(error?.message);
    }
    else{
      successfullyLogin();
      event.target.reset();
    }
  };
  // console.log(error?.message);
  if (user) {
    navigate(from, { replace: true });
  }
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
                    <SocialLogin />
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
        autoClose={5000}
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
