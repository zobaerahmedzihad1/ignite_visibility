import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import axios from "axios";
import swal from "sweetalert";
import style from "./Checkout.module.css";
import PricingSummery from "./PricingSummery/PricingSummery";

const Checkout = () => {
  const user = useAuthState(auth);
  const { _id } = useParams();
  const navigate = useNavigate();
 

  const [allPricing, setAllPricing] = useState([]);
  const { service, duration, oldPrice, newPrice } = allPricing;
  useEffect(() => {
    const url = `http://localhost:5000/pricing/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPricing(data));
  }, [_id]);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const date = new Date().toDateString();

    const order = {
      name: user[0]?.displayName,
      email: user[0]?.email,
      currentDate: date,
      serviceId: _id,
      service: service,
      serviceDuration: duration,
      currentPrice: newPrice,
      phone: event.target.phone.value,
    };
    // console.log(order, 'checkout');
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      const exists = data?.success === false;

      if (exists) {
        toast.error("You have already purchased this service.");
      }
      if (data?.insertedId) {
        swal(
          "Congratulations!",
          `Well done ${user[0]?.displayName}. You have to pay ${newPrice} $`,
          "success"
        );
        event.target.reset();
        navigate("/dashboard/my-orders");
      }
    });
  };

  return (
    <div className={style.checkout__container}>
      <div className={style.checkout__title}>
        <h2>Ready To Checkout</h2>
      </div>
      <Container>
        <h2 className={style.order__summery}>Order Summery</h2>
        <Row>
          <Col ex={12} sm={12} md={6} lg={6}>
            <form onSubmit={handlePlaceOrder}>
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
                      required
                      name="phone"
                    />
                  </div>
                </div>
              </div>
              <button className="button">Confirm Order</button>
            </form>
          </Col>
          <Col ex={12} sm={12} md={6} lg={6}>
            <div>
              <PricingSummery newPrice={newPrice} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
