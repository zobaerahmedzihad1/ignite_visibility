import React from "react";
// import img from "../../../../assets/profile.gif";
import img from "../../../../assets/user.webp";
import { Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import style from "./ReviewCard.module.css";
import auth from "../../../../firebase.init";

const ReviewCard = ({ review }) => {
  const { name, comment, profilePicture } = review;
  return (
    <Col sm={12} md={6} lg={6}>
      <div className={style.review__container}>
        <div>
          <div className={style.profile}>
            {review.profilePicture ? (
              <img src={profilePicture} alt="img" />
            ) : (
              <img src={img} alt="img" />
            )}
            <h4>{name}</h4>
          </div>
          <div className={style.comment}>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ReviewCard;
