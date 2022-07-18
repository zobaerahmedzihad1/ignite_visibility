import React from "react";
import toast from "react-hot-toast";
import style from "./PricingSummery.module.css";

const PricingSummery = ({ newPrice }) => {
  const handlePromoCodeSubmit = (event) => {
    event.preventDefault();
    const promoCode = event.target.promoCode.value;
    if (promoCode) {
      toast.error("Opps! Promo code is not valid.");
      event.target.reset();
    } else {
      toast.error("Please enter your promo code.");
    }
    event.target.reset();
  };
  return (
    <div className={style.pricing__container}>
      <div>
        <div className={style.pricing__line}>
          <h4>Current Price : </h4>
          <h4>{newPrice} $</h4>
        </div>
        <form className={style.form} onSubmit={handlePromoCodeSubmit}>
          <input
            className={style.input}
            type="text"
            placeholder="Promo code / Gif voucher"
            autoComplete="off"
            name="promoCode"
          />
          <button>Apply</button>
        </form>
        <hr />
        <div className={style.pricing__line}>
          <h6>Subtotal : </h6>
          <h6>{newPrice} $</h6>
        </div>
        <div className={style.pricing__line}>
          <h6>Discount : </h6>
          <h6> 0 $</h6>
        </div>
        <hr />
        <div className={style.pricing__line}>
          <h5>Total Price : </h5>
          <h5> {newPrice} $</h5>
        </div>
      </div>
    </div>
  );
};

export default PricingSummery;
