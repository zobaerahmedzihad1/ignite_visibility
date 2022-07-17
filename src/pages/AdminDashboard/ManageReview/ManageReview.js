import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loading from "../../../Shared/Loading/Loading";
import style from "./ManageReview.module.css";

const ManageReview = () => {
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/review-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data?.count;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
        setCount(count);
      });
  }, []);

  useEffect(() => {
    // console.log(page);
    fetch(`http://localhost:5000/manage-reviews?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));

    if (page === 0) {
      setIndex(1);
    } else {
      setIndex(index + parseInt(size));
    }
  }, [page, size]);

  return (
    <div>
      <div className={style.manageReview__container}>
        <Table bordered>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>#</th>
              <th>Name</th>
              <th>Feedback</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, i) => (
              <tr>
                <th>{index + i}</th>
                <td style={{ width: "200px" }}>{review.name} </td>
                <td style={{ height: "80px" }}>
                  {review.comment.slice(0, 200)}
                </td>
                <td> Delete </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={style.pagination}>
        <h3>Total Reviews : {count} </h3>
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? `${style.selected}` : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5" selected>
            5
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="15">20</option>
        </select>
      </div>
    </div>
  );
};

export default ManageReview;
