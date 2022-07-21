import React, { useEffect, useState } from "react";
import { errorMessage, success } from "../../../components/Tostify/Tostify";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loading from "../../../../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import swal from "sweetalert";
import style from "./CheckoutForm.module.css";

const CheckoutForm = ({ payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { _id, currentPrice, name, email } = payment;
  console.log(payment);
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  useEffect(() => {
    // const loading = toast.loading("Loading... please wait!");
    fetch("https://secure-cliffs-23547.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ currentPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
          // toast.dismiss(loading);
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
    const processing = toast.loading("Processing... please wait!");
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
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
      swal("Payment Failed ", `${error?.message}`, "error");
      toast.dismiss(processing);
    } else {
      // success("Congrats! Your payment is completed.");
      if (paymentIntent?.id) {
        swal("Awesome!", "Your payment is successfully completed !", "success");
        navigate("/dashboard/payment-history");
      }
      const date = new Date().toUTCString();

      const payment = {
        paymentId: _id,
        transactionId: paymentIntent.id,
        paymentTime: date,
        currentPrice: currentPrice,
        name: name,
        email: email,
      };

      // console.log(payment, "data payment");
      fetch(`https://secure-cliffs-23547.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.dismiss(processing);
        });
    }
  };

  return (
    <>
      <div
        className={style.credit__card}
        style={{
          border: "2px solid gray",
          borderRadius: ".3rem",
          padding: "2rem 3rem",
          backgroundColor: "#fff",
        }}
      >
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
    </>
  );
};

export default CheckoutForm;
