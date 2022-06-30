import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./PricingPlan.module.css";

const PricingPlan = () => {
  return (
    <div className={style.pricing__container}>
      <h3 className="text-center py-5">pricing plan.</h3>

      <div className="text-center">
        <Link to="/monthly"> monthly </Link>
        <Link to="/yearly"> yearly </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default PricingPlan;
