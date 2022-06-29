import React from "react";
import { Container } from "react-bootstrap";
import style from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
    console.log(review, 'hello');
    const {_id, name, comment} = review;
  
  return (
    <Container className={style.review__card__container}>
       <h3>Hello vertical slider {_id}</h3>
       <h2>{name}</h2>
    </Container>
  );
};

export default ReviewCard;
