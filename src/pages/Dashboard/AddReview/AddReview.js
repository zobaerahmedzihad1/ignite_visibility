import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import style from "./AddReview.module.css";

const AddReview = () => {
  const user = useAuthState(auth);
  const handleAddReview = (event) => {
    event.preventDefault();
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
            name="description"
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
