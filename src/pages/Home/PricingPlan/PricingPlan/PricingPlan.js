import React from "react";
import { Link,  Outlet } from "react-router-dom";
import style from "./PricingPlan.module.css";

const PricingPlan = () => {
  return (
    <div id="pricing" className={style.pricing__container}>
      <div className={`${style.pricing__title} text-center`}>
        <h1>Our Pricing Plans</h1>
        <h6>
          Pricing built for businesses of all sizes. Always know what you'll
          pay.
        </h6>
      </div>
      <div className={`${style.billing__plan} text-center `}>
        <button className="m-5">
          <Link className={`${style.monthly__billing}`} to="/home">
            {" "}
            Billed Monthly{" "}
          </Link>
        </button>
        <button>
          <Link className={style.yearly__billing} to="/yearly-billed">
            {" "}
            Billed Yearly{" "}
          </Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default PricingPlan;
