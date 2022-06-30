import React from "react";
import { Container, Row } from "react-bootstrap";
import usePricing from "../../../../hooks/usePricing";
import PricingCard from "../PricingCard/PricingCard";
import style from "./MonthlyBilled.module.css";

const MonthlyBilled = () => {
  const [allPricing] = usePricing();
  const monthlyPricing = allPricing.filter((monthly) => monthly.duration === "monthly");
  
  return (
    <Container>
      <div className={style.monthlyBilling__container}>
        <Row className="g-4">
          {monthlyPricing.map((pricing) => (
            <PricingCard key={pricing._id} pricing={pricing}></PricingCard>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MonthlyBilled;
