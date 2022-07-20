import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useAdmin = (user) => {
  // console.log(user[0]?.email);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user[0]?.email;
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(true);
        });
      // axios(`http://localhost:5000/admin/${email}`, {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
      // }).then((res) => {
      //   // console.log(res.data);
      //   if (res?.data?.admin) {
      //     setAdminLoading(false);
      //     setAdmin(res?.data?.admin);
      //   }
      // });
      // .catch((err) => toast.error(err?.message));
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
