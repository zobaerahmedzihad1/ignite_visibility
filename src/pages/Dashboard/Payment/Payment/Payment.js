import React from "react";
import { useParams } from "react-router-dom";
import style from "./Payment.module.css";
import Loading from "../../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import swal from "sweetalert";

const stripePromise = loadStripe(
  "pk_test_51LLLVELWwKe3rGP6Mh8kuMkjjzLxBvPH0ZJpoZvUdRMubtqlxNytfR5MtOmNcaVGmJpovyulDOTdAJ9MhPAuesnX00ZaBoYAl1"
);

const Payment = () => {
  const { _id } = useParams();
  const needHelp = () => {
    swal(
      "Payment Testing Cards",
      `1. American Express : 371449635398431

      2. Mastercard : 5555555555554444

      3. Diners Club : 3056930009020004

      4. UnionPay : 6200000000000005

       If needed more cards please visit this link : https://stripe.com/docs/testing
      `
    );
  };
  const url = `http://localhost:5000/dashboard/payment/${_id}`;
  const { data: payment, isLoading } = useQuery(["booking", _id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // JWT verify complete.
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const { currentPrice, name, email } = payment;
  return (
    <>
      <div className={style.need__help}>
        <h5>Need Testing Card Number For Payment <span  onClick={needHelp}>Click Here</span></h5>
        {/* <button onClick={needHelp}></button> */}
      </div>
      <div className={style.payment__container}>
        <div>
          <div className={style.user__information}>
            <div className={style.information}>
              <h3>
                Hello <span className={style.name}>{name}</span>{" "}
              </h3>
              <h4>Please pay for your service.</h4>
              <h4>
                You have to pay{" "}
                <span className={style.price}>{currentPrice} $</span>{" "}
              </h4>
            </div>
          </div>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm payment={payment} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
