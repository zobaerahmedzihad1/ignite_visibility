import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
// import img from '../../../../assets/Google.png'
import ReviewCard from "../ReviewCard/ReviewCard";
import style from "./Review.module.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("review.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };

  return (
    <div className={style.review__container}>
      <Container>
        <div>
          <h2>See why thousands of customers <br /> love working with us</h2>
          <Row>
            <Slider {...settings}>
              {reviews.map((review) => (
                <ReviewCard key={review._id} review={review}></ReviewCard>
              ))}
            </Slider>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Review;
