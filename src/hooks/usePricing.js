import { useEffect, useState } from "react";

const usePricing = () => {
  const [allPricing, setAllPricing] = useState([]);
//   console.log(pricing, 'pricing');
  useEffect(() => {
    fetch("http://localhost:5000/pricing")
      .then((res) => res.json())
      .then((data) => setAllPricing(data));
  }, []);
  return [allPricing];
};

export default usePricing;
