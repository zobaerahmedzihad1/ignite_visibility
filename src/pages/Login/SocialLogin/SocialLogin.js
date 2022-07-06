import React from "react";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import style from "./SocialLogin.module.css";
import { errorMessage } from "../../components/Tostify/Tostify";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  // google login
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // facebook
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  
  const [token] = useToken(googleUser || facebookUser)
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (googleUser) {
    navigate(from, { replace: true });
  }
  if (googleLoading || facebookLoading) {
    return <Loading />;
  }
  if (googleError || facebookError) {
    errorMessage(googleError?.message || facebookError?.message);
  }
  // console.log(googleError?.message);
  return (
    <div>
      <div className={style.social__login}>
        <button onClick={() => signInWithGoogle()} to="/google__login">
          <span className={style.google__login}>
            {" "}
            <ImGoogle2 /> Google
          </span>
        </button>
        <button onClick={() => signInWithFacebook()} to="/facebook__login">
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
