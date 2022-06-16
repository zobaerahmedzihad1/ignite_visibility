import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Brands from "../Brands/Brands";
import HomeServices from "../HomeServices/HomeServices";
import Campain from "../Campain/Campain";
import HomeQuery from "../HomeQuery/HomeQuery";
import style from "./Home.module.css";
import ProjectIdea from "../ProjectIdea/ProjectIdea";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Brands />
      <HomeServices />
      <Campain />
      <HomeQuery />
      <ProjectIdea/>
    </div>
  );
};

export default Home;
