import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "300px" }}
      className="d-flex justify-content-center align-content-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
