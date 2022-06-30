import React from "react";
import img from "../../../../assets/profile.jpg";
import {useAuthState} from 'react-firebase-hooks/auth'
import style from "./ReviewCard.module.css";
import auth from "../../../../firebase.init";

const ReviewCard = ({ review }) => {
  const { name, comment } = review;
  return (
    <div className={style.review__container}>
      <div>
        <div className={style.profile}>
          <img src={img} alt="img" />
          <h4>{name}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          alias sed repellendus natus architecto accusamus iste molestiae atque,
          consequuntur obcaecati veniam at dolorem id fugiat odio, corrupti
          iusto perspiciatis. Veritatis.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
