import React from "react";
import { useQuery } from "react-query";
import { errorMessage } from "../../components/Tostify/Tostify";
import Loading from "../../../Shared/Loading/Loading";
import style from "./AllUser.module.css";
import { useState } from "react";
import { useEffect } from "react";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>All User {users.length} </h3>
    </div>
  );
};

export default AllUser;
