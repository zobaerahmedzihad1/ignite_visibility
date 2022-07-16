import React, { useEffect, useState } from "react";
import style from "./ManageReview.module.css";

const ManageReview = () => {
  const [pageCount, setPageCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch("http://localhost:5000/review-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data?.count;
        const pages = Math.ceil(count / 3);
        setPageCount(pages);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/manage-reviews?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [page, size]);

  return (
    <div>
      <h3>Manage Review {reviews.length} </h3>
      <div className={style.pagination}>
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? `${style.selected}` : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default ManageReview;
