import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
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
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // autoplay: true,
    speed: 1000,
    // autoplaySpeed: 3000,
    cssEase: "linear",

    beforeChange: function (currentSlide, nextSlide) {
      //   console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      //   console.log("after change", currentSlide);
    },
  };

  return (
    <div className={style.review__container}>
      <Container >
      <h2>Vertical Mode with Swipe To Slide</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </Slider>
    </Container>
    </div>
  );
};

export default Review;
