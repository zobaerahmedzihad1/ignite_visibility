import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import style from "./Payment.module.css";

const Payment = () => {
  const { _id } = useParams();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/payment/${_id}`)
      .then((response) => response.json())
      .then((data) => setPayment(data));
  }, [_id]);
  // console.log(payment);

  const handleCreditCardFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3> Payment id number is : {_id}</h3>
      <h1> Servcie Name : {payment.service} </h1>
      <h2> price : {payment.currentPrice}</h2>
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        ></Cards>
        <form onSubmit={handleCreditCardFormSubmit}>
          <input
            type="tel"
            placeholder="Card Number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            placeholder="MM/YY Expiry"
            name="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            placeholder="CVC"
            name="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
      </div>
    </div>
  );
};

export default Payment;
