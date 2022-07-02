import React from "react";
import { Col } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';
import style from "./PricingCard.module.css";

const PricingCard = ({ pricing }) => {
  //   console.log(pricing, "billed");
  const {
    service,
    newPrice,
    oldPrice,
    month,
    backgroundColor,
    color,
    title,
    serviceName,
    serviceTitle,
  } = pricing;
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div className={`${style.pricing__container} shadow bg-body rounded`}>
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
              <h5>{serviceName[0]} </h5>
              <h6>{serviceTitle[0]} </h6>
            </div>
            <div className={style.service}>
              <span>
                <FaCheck />
              </span>
              <h5>{serviceName[1]} </h5>
              <h6>{serviceTitle[1]} </h6>
            </div>
            <div className={style.service}>
              <span style={{ color: "red" }}>
                {service === "Standard" ? (
                  <FaTimes style={{ color: "red" }} />
                ) : (
                  <FaCheck style={{ color: "green" }} />
                )}
              </span>
              <h5>{serviceName[2]} </h5>
              <h6>{serviceTitle[2]} </h6>
            </div>
            <div className={style.service}>
              <span>
                {service === "Premium" ? (
                  <FaCheck />
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </span>
              <h5>{serviceName[3]} </h5>
              <h6>{serviceTitle[3]} </h6>
            </div>
            <p style={{ borderBottom: "1px solid rgb(182, 174, 174)" }}></p>
          </div>
          <Link to='/checkout'>
            <div className="text-center">
              <button className="button my-3">Purchase Now</button>
            </div>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default PricingCard;
