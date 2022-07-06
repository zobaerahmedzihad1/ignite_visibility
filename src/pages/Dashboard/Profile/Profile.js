import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import style from "./Profile.module.css";

const Profile = () => {
  const user = useAuthState(auth);
  console.log(new Date(user[0]?.metadata?.creationTime));
  // console.log(user[0]?.photoURL);
  const handleSignOut = () => {
    signOut(auth);
  }; 
  return (
    <div className={style.profile__container}>
      <h2>My Profile</h2>
      <div className={style.profile__content}>
        <div>
          <img src={user[0]?.photoURL} alt="img" />
          <h5>{user[0]?.email} </h5>
          <h3> {user[0]?.displayName} </h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
