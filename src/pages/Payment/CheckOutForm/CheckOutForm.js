import React from "react";
import style from "./CheckoutForm.module.css";
import { CardElement, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const stripe = useStripe();
  return (
    <div className={style.credit__card}>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
