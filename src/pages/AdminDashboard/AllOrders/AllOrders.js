import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import style from "./AllOrders.module.css";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const paidOrders = orders.filter((order) => order.paid === true);

  return (
    <>
      <h3 className={style.orders__title}>All Orders</h3>
      <div className={style.orders__container}>
        <div>
          <Table striped bordered style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Service</th>
                <th>Duration</th>
                <th>Price ($)</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ textAlign: "start" }}>{order.email} </td>
                  <td>{order.service} </td>
                  <td>{order.serviceDuration} </td>
                  <td>{order.currentPrice} $</td>
                  {order?.paid === true ? (
                    <td
                      style={{
                        textAlign: "center",
                        cursor: "pointer",
                        color: "#777AF2",
                        fontWeight: "600",
                      }}
                    >
                      Paid{" "}
                    </td>
                  ) : (
                    <td
                      style={{
                        color: "#fff",
                        fontWidth: "700",
                        cursor: "pointer",
                        backgroundColor: "red",
                        textAlign: "center",
                      }}
                    >
                      Unpaid
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className={style.order__count}>
        <h3>Total Orders : {orders?.length} </h3>
        <h3 style={{color:'green'}}>Paid Orders : {paidOrders?.length} </h3>
        <h3 style={{color:'red'}}>Unpaid Orders : {orders?.length - paidOrders?.length} </h3>
      </div>
    </>
  );
};

export default AllOrders;
