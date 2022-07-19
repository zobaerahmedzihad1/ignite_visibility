import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import image from "../../../assets/blogImg/businessImg.webp";
import style from "./BlogsCard.module.css";

const BlogsCard = ({ blog }) => {
  const { title, description, topic, blogLink,img } = blog;
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div className={style.blogCard__container}>
        <div className={style.blogCard__img}>
          <img src={img} alt="img" />
        </div>
        <div className={style.blogCard__content}>
          <h6>{topic}</h6>
          <h4> {title} </h4>
          {/* <p>{description}</p> */}
          <button className="button my-4">
            <a href={blogLink} target="_blank.">
              Read More
            </a>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default BlogsCard;
