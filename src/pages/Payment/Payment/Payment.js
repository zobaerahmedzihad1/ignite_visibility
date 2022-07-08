import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Payment.module.css";

const Payment = () => {
  const { _id } = useParams();
  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/payment/${_id}`)
      .then((response) => response.json())
      .then((data) => setPayment(data));
  }, [_id]);
  console.log(payment);
  return (
    <div>
      <h3>Payment id is {_id}</h3>
      <h1>{payment.service} </h1>
    </div>
  );
};

export default Payment;
