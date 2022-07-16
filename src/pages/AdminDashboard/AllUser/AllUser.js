import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import style from "./AllUser.module.css";
import { Table } from "react-bootstrap";
import UserRow from "../UserRow/UserRow";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

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
    <div className={style.users__container}>
      <h3 className={style.allUser__title}>All Users And Admin's</h3>
      <hr />
      <Table bordered>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>#</th>
            <th>Email</th>
            <th>Role</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              refetch={refetch}
              index={index}
            ></UserRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUser;
