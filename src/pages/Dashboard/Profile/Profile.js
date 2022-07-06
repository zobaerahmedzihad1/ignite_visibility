import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Col } from "react-bootstrap";
import auth from "../../../firebase.init";
import style from "./Profile.module.css";

const Profile = () => {
  const user = useAuthState(auth);
  console.log(new Date(user[0]?.metadata?.creationTime).toDateString());
  // console.log(user[0]?.photoURL);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className={style.profile__container}>
      <h2>My Profile</h2>
      <hr />
      <div className={`${style.profile__content} d-flex align-items-center`}>
        <Row className="g-5">
          <Col ex={12} sm={12} md={4} lg={4}>
            <div className={`${style.logout__container}`}>
              <div className={style.profile__logout}>
                <img src={user[0]?.photoURL} alt="img" />
              </div>
              <button
                className="d-block button"
                onClick={() => handleSignOut()}
              >
                Log Out
              </button>
            </div>
          </Col>
          <Col ex={12} sm={12} md={8} lg={8}>
            <div>
              <h3>personal information</h3>
              <div className={style.personal__details}>
                <div className={style.name__email__container}>
                  <div className={style.input__box}>
                    <h6>Your Name</h6>
                    <input
                      className={style.input}
                      value={`${user[0]?.displayName}`}
                      readOnly
                      disabled
                    />
                  </div>
                  <div className={style.input__box}>
                    <h6>Your Eamil</h6>
                    <input
                      className={style.input}
                      style={{ width: "300px" }}
                      value={`${user[0]?.email}`}
                      readOnly
                      disabled
                    />
                  </div>
                </div>
                <div className={style.name__email__container}>
                  <div className={style.input__box}>
                    <h6>Service Quality</h6>
                    <input
                      className={style.input}
                      value=''
                      readOnly
                      disabled
                    />
                  </div>
                  <div className={style.input__box}>
                    <h6>Package Duration</h6>
                    <input
                      className={style.input}
                      style={{ width: "300px" }}
                      value=''
                      readOnly
                      disabled
                    />
                  </div>
                </div>
                <div className={style.name__email__container}>
                  <div className={style.input__box}>
                    <h6>Old Price</h6>
                    <del style={{ color: "red" }}>
                      <input
                        className={style.input}
                        style={{ width: "92px" }}
                        value=''
                        readOnly
                        disabled
                      />
                    </del>
                  </div>
                  <div className={style.input__box}>
                    <h6>New Price</h6>
                    <input
                      className={style.input}
                      style={{ width: "92px" }}
                      value=''
                      readOnly
                      disabled
                    />
                  </div>
                  <div className={style.input__box}>
                    <h6>Your Phone Number</h6>
                    <input
                      className={style.input__number}
                      style={{ width: "300px" }}
                      type="Number"
                      placeholder="Example : 012345***"
                      autoComplete="off"
                      required
                      name="phone"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
