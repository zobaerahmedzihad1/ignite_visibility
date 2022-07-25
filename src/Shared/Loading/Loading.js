import React from "react";
import { Spinner } from "react-bootstrap";
import loading from "../../assets/loading1.gif";

const Loading = () => {
  return (
    <div className="">
      {/* <Spinner animation="border" variant="primary" /> */}
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
