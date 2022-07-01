import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Brands from "../Brands/Brands";
import HomeServices from "../HomeServices/HomeServices";
import Campain from "../Campain/Campain";
import HomeQuery from "../HomeQuery/HomeQuery";
import style from "./Home.module.css";
import ProjectIdea from "../ProjectIdea/ProjectIdea";
import Review from "../Reviews/Review/Review";
import PricingPlan from "../PricingPlan/PricingPlan/PricingPlan";
import MonthlyBilled from "../PricingPlan/MonthlyBilled/MonthlyBilled";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <HomeServices />
      <Campain />
      <HomeQuery />
      <ProjectIdea />
      <Review />
      <PricingPlan />
    </div>
  );
};

export default Home;
