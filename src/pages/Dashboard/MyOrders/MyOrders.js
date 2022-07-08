import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Table } from "react-bootstrap";
import style from "./MyOrders.module.css";
import auth from "../../../firebase.init";
import axios from "axios";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/order?email=${user?.email}`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        const {data} = response;
        setOrders(data)
      });
  }, [user?.email]);

    console.log(orders, "my orders");

  return (
    <div className={style.myOrder__container}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order Date</th>
            <th>Service Name</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
