import React from "react";
import style from "./PricingCard.module.css";

const PricingCard = ({ pricing }) => {
  console.log(pricing, "billed");
  const { service, newPrice, oldPrice } = pricing;
  return (
    <div>
      <h3>{service}</h3>
    </div>
  );
};

export default PricingCard;
