import React from "react";
import {
  useStripe,
  CardElement,
  useElements,
} from "@stripe/react-stripe-js";
import style from "./CheckOutForm.module.css";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleCreditCardFormSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
  };

  return (
    <div className={style.form__container}>
      <form onSubmit={handleCreditCardFormSubmit}>
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

export default CheckOutForm;
