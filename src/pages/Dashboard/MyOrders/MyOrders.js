import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import swal from "sweetalert";
import style from "./MyOrders.module.css";
import Loading from "../../../Shared/Loading/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://secure-cliffs-23547.herokuapp.com/order?email=${user?.email}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  const handleOrderDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: `You want to delete this order ?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const loading1 = toast.loading("Deleting...Please Wait!!!");
        fetch(`https://secure-cliffs-23547.herokuapp.com/order/${id}`, {
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
              toast.dismiss(loading1);
            }
          });
      } else {
        return;
      }
    });
  };
  const handleServiceStart = () => {
    swal("Congratulations!", "Your Service is already  started!", "success");
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
              <th>Payment Status</th>
              <th>Action</th>
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
                  <td style={{textAlign: "center",}}>
                    <Link
                      to={`/dashboard/payment/${order._id}`}
                      style={{
                        border: "none",
                        textDecoration: "none",
                        fontWeight: "700",
                        
                      }}
                    >
                      Pay Now
                    </Link>
                  </td>
                )}

                {order?.paid === true ? (
                  <td
                    style={{
                      color: "#fff",
                      fontWidth: "700",
                      cursor: "pointer",
                      backgroundColor: "green",
                    }}
                    className={style.delete__field}
                    onClick={() => handleServiceStart()}
                  >
                    Started
                  </td>
                ) : (
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
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MyOrders;
