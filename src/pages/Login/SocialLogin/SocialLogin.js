import React from "react";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { useSignInWithGoogle, useSignInWithFacebook } from "react-firebase-hooks/auth";
import style from "./SocialLogin.module.css";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  // google login
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // facebook
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  console.log(facebookUser);
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
        <button onClick={()=>signInWithFacebook()} to="/facebook__login">
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
