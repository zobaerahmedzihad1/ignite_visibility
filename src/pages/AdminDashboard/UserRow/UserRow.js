import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { errorMessage, success } from "../../components/Tostify/Tostify";

const UserRow = ({ user, refetch, index }) => {
  console.log(user, "user row");
  // const makeAdmin = () => {
  //   const loading = toast.loading("Loading...Please Wait!!!");
  //   fetch(`http://localhost:5000/user/admin/${user.email}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 403) {
  //         errorMessage("Failed to make an admin. ");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data?.modifiedCount > 0) {
  //         refetch();
  //         swal(
  //           "Great!",
  //           `${user.email} Now an admin !`,
  //           "success"
  //         );
  //         toast.dismiss(loading);
  //       }
  //     });
  // };

  const makeAdmin = () => {
    swal({
      title: "Are you sure?",
      text: `You want to give admin access to  ${user.displayName} ?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const loading = toast.loading("Loading...Please Wait!!!");
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
              swal(
                "Great!",
                `Now ${user.displayName} is an admin !`,
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

  // const removeAdmin1 = () => {
  //   fetch(`http://localhost:5000/user/remove-admin/${user.email}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 403) {
  //         errorMessage("Failed to remove admin. ");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data?.modifiedCount > 0) {
  //         refetch();
  //         success("Successfully removed from admin.");
  //       }
  //     });
  // };

  const removeAdmin = () => {
    swal({
      title: "Are you sure?",
      text: `You want to remove admin access from  ${user.displayName} ?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const loading = toast.loading("Loading...Please Wait!!!");
        fetch(`http://localhost:5000/user/remove-admin/${user.email}`, {
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
              swal(
                "Deleted !",
                `Successfully removed admin access from ${user.displayName} `,
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
          Remove Admin Access
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
