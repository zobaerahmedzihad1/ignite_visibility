import React from "react";
import Slider from "react-slick";
import style from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
    console.log(review, 'hello');
    const {_id, name, comment} = review;
    // console.log(title,'review card');
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",

    beforeChange: function (currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
    //   console.log("after change", currentSlide);
    },
  };
  return (
    <>
        <h2>Vertical Mode with Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
            <h3>{_id} </h3>
            <h2>{name} </h2>
          </div>
        </Slider>
    </>
  );
};

export default ReviewCard;
