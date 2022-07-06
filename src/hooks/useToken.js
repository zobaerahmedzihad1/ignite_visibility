import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    const config = { headers: { "Content-Type": "application/json" } };
    const url = `http://localhost:5000/user/${email}`;
    if (email) {
      axios
        .put(url, currentUser, config)
        .then((response) => console.log(response?.data));
    }
  }, [user]);

  return [token];
};

export default useToken;
