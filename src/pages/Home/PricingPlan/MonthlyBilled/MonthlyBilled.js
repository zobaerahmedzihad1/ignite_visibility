import React from "react";
import {Container, Row } from "react-bootstrap";
import usePricing from "../../../../hooks/usePricing";
import PricingCard from "../PricingCard/PricingCard";
import style from "./MonthlyBilled.module.css";

const MonthlyBilled = () => {
  const [allPricing] = usePricing();
  // console.log(pricing);
  return (
    <Container>
      <div className={style.monthlyBilling__container}>
        <h3 className="text-center">Monthly Billing System</h3>
        <Row ex={12} sm={12} md={6} lg={4}>
          {allPricing.map((pricing) => (
            <PricingCard key={pricing._id} pricing={pricing}></PricingCard>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MonthlyBilled;
