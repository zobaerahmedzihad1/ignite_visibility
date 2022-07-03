import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import usePricing from '../../../hooks/usePricing';
import style from './Checkout.module.css'

const Checkout = () => {
    const {_id} = useParams()
    const [allPricing, setAllPricing] = useState([]);
      useEffect(() => {
        fetch("pricingPlan.json")
          .then((res) => res.json())
          .then((data) => setAllPricing(data));
      }, []);

      console.log(allPricing);
      const selected = allPricing.find(price => price._id === _id)
      console.log(selected, "find");

    return (
        <div>
            <h3>Checkout component.</h3>
            <h2>user Id : {_id} </h2>

        </div>
    );
};

export default Checkout;