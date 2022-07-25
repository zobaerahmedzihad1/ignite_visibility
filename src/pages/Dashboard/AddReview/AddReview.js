import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { success } from "../../components/Tostify/Tostify";
import swal from "sweetalert";
import auth from "../../../firebase.init";
import style from "./AddReview.module.css";
import toast from "react-hot-toast";

const AddReview = () => {
  const user = useAuthState(auth);
  const handleAddReview = (event) => {
    const email = user[0]?.email;
    const name = user[0]?.displayName;
    const profilePicture = user[0]?.photoURL;
    const comment = event.target.comment.value;
    event.preventDefault();

    const loading = toast.loading("Processing...Please wait!");
    axios
      .post("https://secure-cliffs-23547.herokuapp.com/reviews", {
        email,
        name,
        comment,
        profilePicture,
      })
      .then((response) => {
        console.log(response?.data, "reviews");
        if (response?.data?.insertedId) {
          toast.dismiss(loading);
          swal(
            "Thank You!",
            "Your valuable feedback is successfully added!",
            "success"
          );
        }
      });
    event.target.reset();
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
