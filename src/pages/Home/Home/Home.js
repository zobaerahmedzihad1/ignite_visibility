import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from "../Header/Header";
import Brands from '../Brands/Brands';
import HomeServices from '../HomeServices/HomeServices';
// import MarketingPlanning from '../MarketingPlanning/MarketingPlanning';
import style from './Home.module.css'
import Campain from '../Campain/Campain';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Brands/>
            <HomeServices/>
            <Campain/>
            
        </div>
    );
};

export default Home;