import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import auth from "../../../firebase.init";
import axios from "axios";
import toast from "react-hot-toast";
import swal from "sweetalert";
import style from "./MyOrders.module.css";

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

  // const handleOrderDelete = (id) => {
  // fetch(`http://localhost:5000/order/${id}`, {
  //   method: "DELETE",
  //   headers: {
  //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //   },
  // })
  //     .then((response) => response.json())
  //     .then((data) => {
  //   if (data.deletedCount > 0) {
  //     const remaining = orders.filter((order) => order._id !== id);
  //     setOrders(remaining);
  //     success("Successfully deleted.");
  //   }
  // });
  // };

  const handleOrderDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: `You want to delete this order ?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const loading = toast.loading("Deleting...Please Wait!!!");
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
              swal(
                "Deleted !",
                "Your order is successfully deleted.",
                "success"
              );
              toast.dismiss(loading);
            }
          });
      } else {
        return;
      }
    });
  };

  return (
    <>
      <h3 className={style.order__title}>My Orders</h3>
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
