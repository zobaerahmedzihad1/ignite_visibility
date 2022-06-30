import { useEffect, useState } from "react";

const usePricing = () => {
  const [allPricing, setAllPricing] = useState([]);
//   console.log(pricing, 'pricing');
  useEffect(() => {
    fetch("pricingPlan.json")
      .then((res) => res.json())
      .then((data) => setAllPricing(data));
  }, []);
  return [allPricing];
};

export default usePricing;
