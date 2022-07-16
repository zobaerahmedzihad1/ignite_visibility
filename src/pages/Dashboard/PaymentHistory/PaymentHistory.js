import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import style from "./PaymentHistory.module.css";
import Loading from "../../../Shared/Loading/Loading";
import { Table } from "react-bootstrap";

const PaymentHistory = () => {
  const user = useAuthState(auth);
  const email = user[0]?.email;
  const {
    data: payments,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("payments", () =>
    fetch(`http://localhost:5000/payment-history/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  console.log(payments, "pay");

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
      <Table bordered className="mt-3" >
        <thead>
          <tr>
            <th >#</th>
            <th >Name</th>
            <th >Email</th>
            <th >Transaction Id</th>
            <th >Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr>
              <th>{index + 1} </th>
              <td>{payment.name} </td>
              <td>{payment.email} </td>
              <td>{payment.transactionId} </td>
              <td>{payment.paymentTime} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentHistory;
