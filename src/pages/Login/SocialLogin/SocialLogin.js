import React from "react";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import style from "./SocialLogin.module.css";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  return (
    <div>
      <div className={style.social__login}>
        <button
          onClick={() => signInWithGoogle()}
          
          to="/google__login"
        >
          <span className={style.google__login}>
            {" "}
            <ImGoogle2 /> Google
          </span>
        </button>
        <button to="/facebook__login">
          <span className={style.facebook__login}>
            {" "}
            <FaFacebookSquare /> Facebook
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
