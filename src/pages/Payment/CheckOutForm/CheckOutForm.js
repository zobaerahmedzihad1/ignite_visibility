import React, { useEffect, useState } from "react";
import style from "./CheckoutForm.module.css";
import { errorMessage, success } from "../../components/Tostify/Tostify";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loading from "../../../Shared/Loading/Loading";

const CheckoutForm = ({ payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { _id, currentPrice, name, email } = payment;

  //   console.log(payment, "checkout form pay");
  //   console.log(currentPrice, "price");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ currentPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [currentPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      errorMessage(error?.message);
      setProcessing(true);
    }
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setProcessing(false);
      errorMessage(intentError?.message);
    } else {
      success("Congrats! Your payment is completed.");
      console.log(paymentIntent.transactionId);
      // store payment on database
      const date = new Date();
      const payment = {
        paymentId: _id,
        transactionId: paymentIntent.id,
        paymentTime: date,
      };
      console.log(payment, "data payment");

      fetch(`http://localhost:5000/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProcessing(false);
        });
    }

    if (processing) {
      <Loading />;
    }
  };

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
        <button
          className="btn btn-primary mt-4 px-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay <span className="ps-2">$ {currentPrice}</span>
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
