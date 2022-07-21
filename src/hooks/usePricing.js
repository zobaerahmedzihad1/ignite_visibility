import { useEffect, useState } from "react";

const usePricing = () => {
  const [allPricing, setAllPricing] = useState([]);
  //   console.log(pricing, 'pricing');
  useEffect(() => {
    fetch("https://secure-cliffs-23547.herokuapp.com/pricing")
      .then((res) => res.json())
      .then((data) => setAllPricing(data));
  }, []);
  return [allPricing];
};

export default usePricing;
