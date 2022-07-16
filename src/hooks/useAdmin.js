import { useEffect, useState } from "react";

const useAdmin = (user) => {
  // console.log(user[0]?.email);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const email = user[0]?.email;
    // console.log(email);
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
        });
    }
  }, [user]);
  return [admin];
};

export default useAdmin;
