import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Container } from "react-bootstrap";
import style from "./Review.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("review.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className={style.review__container}>
      <Container>
        <h2>Vertical Mode with Swipe To Slide</h2>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* {reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard key={review._id} review={review}></ReviewCard>
            </SwiperSlide>
          ))} */}
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Review;
