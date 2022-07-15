import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { success } from "../../components/Tostify/Tostify";
import style from "./MyOrders.module.css";
import auth from "../../../firebase.init";
import axios from "axios";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/order?email=${user?.email}`;
    axios.get(url).then((response) => {
      const { data } = response;
      setOrders(data);
    });
  }, [user?.email]);

  const handleOrderDelete = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
          success("Successfully deleted.");
        }
      });
  };

  return (
    <>
      <h2 className={style.order__title}>My Orders</h2>
      <hr />
      <div className={style.myOrder__container}>
        <Table striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Order Date</th>
              <th>Service Name</th>
              <th>Duration</th>
              <th>Price ($)</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="fw-bold">{index + 1} </td>
                <td>{order.currentDate} </td>
                <td>{order.service} </td>
                <td>{order.serviceDuration}</td>
                <td style={{ textAlign: "center" }}>$ {order.currentPrice}</td>
                {order?.paid === true ? (
                  <td style={{ color: "green", fontWeight: "600" }}>Done </td>
                ) : (
                  <td style={{ color: "red", fontWeight: "600" }}>Pending</td>
                )}

                {order?.paid === true ? (
                  <td
                    style={{
                      color: "green",
                      fontWeight: "800",
                      textAlign: "center",
                    }}
                  >
                    Paid{" "}
                  </td>
                ) : (
                  <td>
                    <Link
                      to={`/dashboard/payment/${order._id}`}
                      style={{
                        border: "none",
                        textDecoration: "none",
                        fontWeight: "700",
                      }}
                    >
                      Payment
                    </Link>
                  </td>
                )}
                <td
                  style={{
                    color: "#fff",
                    fontWidth: "700",
                    cursor: "pointer",
                    backgroundColor: "red",
                  }}
                  className={style.delete__field}
                  onClick={() => handleOrderDelete(order._id)}
                >
                  Delete <RiDeleteBinLine style={{ fontSize: "22px" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MyOrders;
