import React from "react";
import usePricing from "../../../../hooks/usePricing";
import { Container, Row } from "react-bootstrap";
import style from "./YearlyBilled.module.css";
import PricingCard from "../PricingCard/PricingCard";

const YearlyBilled = () => {
  const [allPricing] = usePricing();
  const yearlyPricing = allPricing.filter(
    (yearly) => yearly.duration === "yearly"
  );

  return (
    <Container>
      <div className={style.monthlyBilling__container}>
        <Row className="g-4">
          {yearlyPricing.map((pricing) => (
            <PricingCard key={pricing._id} pricing={pricing}></PricingCard>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default YearlyBilled;
