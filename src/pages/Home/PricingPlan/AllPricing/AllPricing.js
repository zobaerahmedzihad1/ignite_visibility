import React from "react";
import MonthlyBilled from "../MonthlyBilled/MonthlyBilled";
import YearlyBilled from "../YearlyBilled/YearlyBilled";

const AllPricing = () => {
  return (
    <div >
      {/* <h3>AllPricing component</h3> */}

      <MonthlyBilled />
      <YearlyBilled />
    </div>
  );
};

export default AllPricing;
