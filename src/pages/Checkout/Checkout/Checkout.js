import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import usePricing from "../../../hooks/usePricing";
import style from "./Checkout.module.css";

const Checkout = () => {
  const { _id } = useParams();
  const [allPricing, setAllPricing] = useState([]);
  console.log(allPricing);
  useEffect(() => {
    const url = `http://localhost:5000/pricing/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPricing(data));
  }, [_id]);

  return (
    <div className={style.checkout__container}>
      <div className={style.checkout__title}>
        <h2>Ready To Checkout</h2>
      </div>
      <Container>
        <Row>
          <Col ex={12} sm={12} md={6} lg={6}>
            <h3>personal details</h3>
          </Col>
          <Col ex={12} sm={12} md={6} lg={6}>
            <h3>order summery</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
