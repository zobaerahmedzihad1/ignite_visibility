import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import style from "./AllUser.module.css";
import { Table } from "react-bootstrap";
import UserRow from "../UserRow/UserRow";

const AllUser = () => {
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/user-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data?.count;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
        setCount(count);
      });
  }, []);

  useEffect(() => {
    console.log(page);
    fetch(`http://localhost:5000/all-users?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));

    if (page === 0) {
      setIndex(1);
    } else {
      setIndex(index + parseInt(size));
    }
  }, [page, size]);

  // const {
  //   data: users,
  //   isLoading,
  //   isError,
  //   error,
  //   refetch,
  // } = useQuery("users", () =>
  //   fetch("http://localhost:5000/users", {
  // method: "GET",
  // headers: {
  //   "content-type": "application/json",
  //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  // },
  //   }).then((res) => res.json())
  // );

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  // if (isError) {
  //   return (
  //     <h2 style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
  //       {error?.message}
  //     </h2>
  //   );
  // }

  return (
    <div className={style.users__container}>
      <div>
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
                // refetch={refetch}
                index={index}
              ></UserRow>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={style.pagination}>
        <h3>Total Users And Admin's : {count} </h3>
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
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AllUser;
