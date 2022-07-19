import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import style from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div>
      <span>
        <a href="https://www.facebook.com/zobaerahmedzihad" target="_black">
          <FaFacebook className={style.facebook} />
        </a>
      </span>
      <span>
        <a href="https://twitter.com/Zobaerahmedziha" target="_blank.">
          <ImTwitter className={style.twitter} />
        </a>
      </span>
      <span>
        <a
          href="https://www.instagram.com/zobaer_ahmed_zihad/"
          target="_blank."
        >
          <FaInstagram className={style.instagram} />
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/zobaer-ahmed-zihad/"
          target="_blank."
        >
          <FaLinkedin className={style.linkedin} />
        </a>
      </span>
      <span>
        <a href="tel:01630704167">
          <FaWhatsapp className={style.whatsapp} />
        </a>
      </span>
      <span>
        <a href="https://github.com/zobaerahmedzihad1" target="_blank.">
          <FaGithub className={style.github} />
        </a>
      </span>
    </div>
  );
};

export default SocialLinks;
