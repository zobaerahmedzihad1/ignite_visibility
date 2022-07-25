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
    fetch("https://secure-cliffs-23547.herokuapp.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading/>
  }
  if (isError) {
    return (
      <h2 style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
        {error?.message}
      </h2>
    );
  }

  const admins = users.filter((user) => user?.role === "admin");

  return (
    <>
      <h3 className={style.allUser__title}>All Users And Admin's</h3>
      <div className={style.users__container}>
        <hr />
        <Table bordered>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
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
      <div className={style.admin__count}>
        <h3 style={{ color: "rgb(85, 88, 202)" }}>
          Total Admins : {admins.length}{" "}
        </h3>
        <h3>Total Users : {users.length - admins.length} </h3>
      </div>
    </>
  );
};

export default AllUser;
