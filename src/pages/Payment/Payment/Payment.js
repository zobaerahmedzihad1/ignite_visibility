import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-credit-cards/es/styles-compiled.css";
import style from "./Payment.module.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51LL86LJ9rGQZPG30dXHPocw5hr1YK23VTd4A4nX0rseIiPNXHwwrAGqhAGN2wdvj0QLNEwbfHuBFrWgHYVCFwsnC00nsTtmmeW"
);

const Payment = () => {
  const { _id } = useParams();
  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/payment/${_id}`)
      .then((response) => response.json())
      .then((data) => setPayment(data));
  }, [_id]);


  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default Payment;
