import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import style from "./PaymentHistory.module.css";
import Loading from "../../../Shared/Loading/Loading";
import { Table } from "react-bootstrap";

const PaymentHistory = () => {
  const user = useAuthState(auth);
  // const [loading, setLoading] = useState(false);
  const email = user[0]?.email;
  const {
    data: payments,
    isLoading,
    isError,
    error,
  } = useQuery("payments", () =>
    fetch(
      `https://secure-cliffs-23547.herokuapp.com/payment-history/${email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  // console.log(payments, "pay");

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return (
      <h2 style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
        {error?.message}
      </h2>
    );
  }

  return (
    <div className={style.payment__container}>
      <h3>My Payment History</h3>
      <Table bordered className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Transaction Id</th>
            <th>Payment Date</th>
            <th style={{ width: "70px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr>
              <td>{index + 1} </td>
              <td>{payment.email} </td>
              <td>{payment.transactionId} </td>
              <td>{payment.paymentTime} </td>
              <td> $ {payment.currentPrice} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentHistory;
