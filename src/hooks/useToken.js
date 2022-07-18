import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";

const useToken = (user) => {
  // console.log(user, 'useToken');
  // console.log(user?.user?.displayName);
  // console.log(authUser[0]?.displayName);
  const authUser = useAuthState(auth);

  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = authUser[0]?.displayName;
    const currentUser = { email: email, name: name };
    const config = { headers: { "Content-Type": "application/json" } };
    const url = `http://localhost:5000/user/${email}`;
    if (email) {
      axios.put(url, currentUser, config).then((response) => {
        const accessToken = response?.data?.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
        // console.log(response?.data?.token)
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
