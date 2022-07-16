import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { success } from "../../components/Tostify/Tostify";
import auth from "../../../firebase.init";
import style from "./AddReview.module.css";

const AddReview = () => {
  const user = useAuthState(auth);
  const handleAddReview = (event) => {
    const email = user[0]?.email;
    const name = user[0]?.displayName;
    const profilePicture = user[0]?.photoURL;
    const comment = event.target.comment.value;
    event.preventDefault();
    
    axios.post('http://localhost:5000/reviews', {
      email,
      name,
      comment,
      profilePicture
    }).then(response => {
      console.log(response?.data, 'reviews');
      if(response?.data?.insertedId){
        success('Thanks for your feedback.')
      }
    })
    event.target.reset()
  };

  return (
    <div className={style.review__container}>
      <h3>Please Share Your Opinion</h3>
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
            required
          ></textarea>
          <button className={style.button}>Add Review</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
