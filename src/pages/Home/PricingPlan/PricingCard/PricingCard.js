import React from "react";
import { Col } from "react-bootstrap";
import { FaCheck,FaTimes } from "react-icons/fa";
import style from "./PricingCard.module.css";

const PricingCard = ({ pricing }) => {
  console.log(pricing, "billed");
  const {
    service,
    newPrice,
    oldPrice,
    month,
    backgroundColor,
    color,
    title,
    serviceName_1,
    serviceName_2,
    serviceName_3,
    serviceName_4,
    serviceTitle_1,
    serviceTitle_2,
    serviceTitle_3,
    serviceTitle_4,
    icon
  } = pricing;
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div className={style.pricing__container}>
        <div className={style.card__content}>
          <h4 style={{ backgroundColor, color }}>{service} </h4>
          <div className={style.price}>
            <span className={style.old__price}>${oldPrice} </span>
            <span className={style.new__price}>${newPrice} </span>
            <span className={style.mini__month}>{month}</span>
            <p>{title}</p>
          </div>
          <div className={style.service__container}>
            <div className={style.service}>
              <span>
                <FaCheck />
              </span>
              <h5>{serviceName_1} </h5>
              <h6>{serviceTitle_1} </h6>
            </div>
            <div className={style.service}>
              <span>
                <FaCheck />
              </span>
              <h5>{serviceName_2} </h5>
              <h6>{serviceTitle_2} </h6>
            </div>
            <div className={style.service}>
              <span style={{ color: "red" }}>
                {/* <FaTimes /> */}
              </span>
              <h5>{serviceName_3} </h5>
              <h6>{serviceTitle_3} </h6>
            </div>
            <div className={style.service}>
              <i style={{ color: "red" }}>
              {icon}
              </i>
              <h5>{serviceName_4} </h5>
              <h6>{serviceTitle_4} </h6>
            </div>
            <p style={{ borderBottom: "1px solid rgb(182, 174, 174)" }}></p>
          </div>
          <div className="text-center">
            <button className="button my-3">Purchase Now</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PricingCard;
