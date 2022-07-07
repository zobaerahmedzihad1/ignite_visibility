import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    const config = { headers: { "Content-Type": "application/json" }};
    const url = `http://localhost:5000/user/${email}`;
    if (email) {
      axios
        .put(url, currentUser, config)
        .then((response) => {
          const accessToken = response?.data?.token;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken)
          console.log(response?.data?.token)
        });

        // fetch(url, {
        //   method: 'PUT',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(currentUser)
        // })
        // .then(res => res.json())
        // .then(data => {
        //   console.log('inside useToken', data)
        //   const accessToken = data.token;
        //   localStorage.setItem('accessToken', accessToken)
        //   setToken(accessToken)
        // }) 
    }
  }, [user]);

  return [token];
};

export default useToken;
