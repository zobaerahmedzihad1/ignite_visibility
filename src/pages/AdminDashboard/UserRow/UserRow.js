import React from "react";
import { errorMessage, success } from "../../components/Tostify/Tostify";

const UserRow = ({ user, refetch, index }) => {
  //  console.log(user);
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          errorMessage("Failed to make an admin. ");
        }
        return res.json();
      })
      .then((data) => {
        if (data?.modifiedCount > 0) {
          refetch();
          success("Successfully made an admin.");
        }
      });
  };

  const removeAdmin = () => {
    fetch(`http://localhost:5000/user/remove-admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          errorMessage("Failed to remove admin. ");
        }
        return res.json();
      })
      .then((data) => {
        if (data?.modifiedCount > 0) {
          refetch();
          success("Successfully removed from admin.");
        }
      });
  };

  return (
    <tr>
      <td style={{ textAlign: "center" }}>{index + 1}</td>
      <td>{user.email}</td>
      {user?.role === "admin" ? (
        <td
          style={{
            textAlign: "center",
            color: "#5558CA",
            fontWeight: "800",
            backgroundColor: "#E1E3F5",
            cursor: "pointer",
          }}
        >
          Admin
        </td>
      ) : (
        <td
          onClick={makeAdmin}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          User
        </td>
      )}
      {user?.role === "admin" ? (
        <td
          style={{
            color: "#fff",
            fontWidth: "700",
            cursor: "pointer",
            backgroundColor: "red",
            textAlign: "center",
          }}
          onClick={removeAdmin}
        >
          Remove From Admin
        </td>
      ) : (
        <td
          onClick={makeAdmin}
          style={{
            textAlign: "center",
            cursor: "pointer",
            color: "#777AF2",
            fontWeight: "500",
          }}
        >
          Make an Admin
        </td>
      )}
    </tr>
  );
};

export default UserRow;
