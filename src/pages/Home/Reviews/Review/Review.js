import React, { useEffect, useState } from "react";
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
  
  return (
    <div>
      <h2>Review</h2>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default Review;
