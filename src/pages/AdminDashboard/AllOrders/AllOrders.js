import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import style from "./AllOrders.module.css";

const AllOrders = () => {
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/order-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data?.count;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
        setCount(count);
      });
  }, []);

  useEffect(() => {
    // console.log(page);
    fetch(`http://localhost:5000/orders?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));

    if (page === 0) {
      setIndex(1);
    } else {
      setIndex(index + parseInt(size));
    }
  }, [page, size]);

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
              {orders.map((order, idx) => (
                <tr>
                  <td>{index + idx}</td>
                  <td style={{ textAlign: "start" }}>
                    {order.email}{" "}
                  </td>
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
      <div className={style.pagination}>
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? `${style.selected}` : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="7" selected>
            7
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="15">20</option>
        </select>
      </div>
    </>
  );
};

export default AllOrders;
