import React from "react";
import { useParams } from "react-router-dom";
import style from "./Payment.module.css";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LLLVELWwKe3rGP6Mh8kuMkjjzLxBvPH0ZJpoZvUdRMubtqlxNytfR5MtOmNcaVGmJpovyulDOTdAJ9MhPAuesnX00ZaBoYAl1"
);

const Payment = () => {
  const { _id } = useParams();

  const url = `http://localhost:5000/payment/${_id}`;
  const { data: payment, isLoading } = useQuery(["booking", _id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div>
        <h3> price : {payment.currentPrice} </h3>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm payment={payment} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
