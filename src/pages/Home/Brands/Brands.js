import React, { Component } from "react";
import Slider from "react-slick";
import style from "./Brands.module.css";
import logo1 from "../../../assets/Google.png";
import logo2 from "../../../assets/Airbnb.png";
import logo3 from "../../../assets/Amazon2.png";
import logo4 from "../../../assets/Apple.png";
import logo5 from "../../../assets/Spotify.png";
import logo6 from "../../../assets/Nike.png";
import { Container } from "react-bootstrap";

const Brands = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        // autoplaySpeed: 1000,
        cssEase: "linear"
      };
  return (
    <div className={style.brand__container}>
      <Container>
        <Slider {...settings} className={style.brand__background}>
          <div>
            <img src={logo1} alt="" />
          </div>
          <div>
            <img src={logo2} alt="" />
          </div>
          <div>
            <img src={logo3} alt="" />
          </div>
          <div>
            <img src={logo4} alt="" />
          </div>
          <div>
            <img src={logo5} alt="" />
          </div>
          <div>
            <img src={logo6} alt="" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Brands;
