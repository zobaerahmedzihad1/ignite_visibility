import React from 'react';
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'
import style from './SocialLogin.module.css'

const SocialLogin = () => {
    return (
        <div>
            <div className={style.social__login}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/google__login"
                    >
                      <span className={style.google__login}>
                        {" "}
                        <ImGoogle2 /> Google
                      </span>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/facebook__login"
                    >
                      <span className={style.facebook__login}>
                        {" "}
                        <FaFacebookSquare /> Facebook
                      </span>
                    </Link>
                  </div>
        </div>
    );
};

export default SocialLogin;