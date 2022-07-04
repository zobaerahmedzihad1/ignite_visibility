import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import style from "./Checkout.module.css";
// import ServiceDetail from "./ServiceDetail/ServiceDetail";
import { FaCheck, FaTimes } from "react-icons/fa";
// import ServiceDetail from "./ServiceDetail/ServiceDetail";

const Checkout = () => {
  const user = useAuthState(auth);
  const { _id } = useParams();
  const [allPricing, setAllPricing] = useState([]);
  const { service, duration, oldPrice, newPrice, serviceName, serviceTitle } =
    allPricing;
  useEffect(() => {
    const url = `http://localhost:5000/pricing/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPricing(data));
  }, [_id]);

  console.log(serviceName[0]);
  // console.log(allPricing);

  return (
    <div className={style.checkout__container}>
      <div className={style.checkout__title}>
        <h2>Ready To Checkout</h2>
      </div>
      <Container>
        <Row>
          <Col ex={12} sm={12} md={6} lg={6}>
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
                    value={`${service}`}
                    readOnly
                    disabled
                  />
                </div>
                <div className={style.input__box}>
                  <h6>Package Duration</h6>
                  <input
                    className={style.input}
                    style={{ width: "300px" }}
                    value={`${duration}`}
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
                      value={`${oldPrice}`}
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
                    value={`${newPrice}`}
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
                    name="email"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col ex={12} sm={12} md={6} lg={6}>
            <div>
              <h2>Order Summery</h2>
              <div className={style.service__container}>
            <div className={style.service}>
              <span>
                <FaCheck />
              </span>
              <h5>{serviceName[0]} </h5>
              <h6>{serviceTitle[0]} </h6>
            </div>
            <div className={style.service}>
              <span>
                <FaCheck />
              </span>
              <h5>{serviceName[1]} </h5>
              <h6>{serviceTitle[1]} </h6>
            </div>
            <div className={style.service}>
              <span style={{ color: "red" }}>
                {service === "Standard" ? (
                  <FaTimes style={{ color: "red" }} />
                  
                ) : (
                  <FaCheck style={{ color: "green" }} />
                )}
              </span>
              <h5>{serviceName[2]} </h5>
              <h6>{serviceTitle[2]} </h6>
            </div>
            <div className={style.service}>
              <span>
                {service === "Premium" ? (
                  <FaCheck />
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </span>
              <h5>{serviceName[3]} </h5>
              <h6>{serviceTitle[3]} </h6>
            </div>
            <p style={{ borderBottom: "1px solid rgb(182, 174, 174)" }}></p>
          </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
