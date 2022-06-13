import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from "../Header/Header";
import style from './Home.module.css'
import Brands from '../Brands/Brands';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Brands/>
            <HomeServices/>
        </div>
    );
};

export default Home;