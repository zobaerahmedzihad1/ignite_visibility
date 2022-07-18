import React from "react";
import style from "./HomeServiceCard.module.css";
import { Button, Card, Col } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

const HomeServiceCard = ({ service }) => {
  const { image, title, description } = service;
  const navigate = useNavigate();
  //   console.log(service);
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div className={style.serviceCard__container}>
        <div className={style.serviceCard__img}>
          <img src={image} alt="img" />
        </div>
        <div className={style.serviceCard__content}>
          <h4> {title} </h4>
          <p>{description}</p>
          <button onClick={() => navigate("/blogs")} className="button my-4">
            Learn More
          </button>
        </div>
      </div>
    </Col>
  );
};

export default HomeServiceCard;
