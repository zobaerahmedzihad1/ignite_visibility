import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import style from "./AddReview.module.css";

const AddReview = () => {
  const user = useAuthState(auth);
  const handleAddReview = (event) => {
    const email = user[0]?.email;
    const name = user[0]?.displayName;
    const profilePicture = user[0]?.photoURL;
    const comment = event.target.comment.value;
    // const userReview = {email, name, profilePicture , comment}
    // console.log(userReview);

    event.preventDefault();

    axios.post('http://localhost:5000/reviews', {
      email,
      name,
      comment,
      profilePicture
    }).then(response => {
      console.log(response?.data, 'reviews');
    })
  };

  return (
    <div className={style.review__container}>
      <h2>Please Share Your Opinion</h2>
      <hr />
      <div>
        <form onSubmit={handleAddReview}>
          <input
            className={style.input}
            type="text"
            value={user[0]?.email}
            readOnly
            disabled
          />

          <textarea
            className={style.textarea}
            name="comment"
            autoComplete="off"
            id=""
            cols="43"
            rows="7"
            placeholder="Write Anything You Want..."
          ></textarea>
          <button className={style.button}>Add Review</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
