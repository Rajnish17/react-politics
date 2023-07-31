import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";
import Section7 from "../Components/Section7";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Footer />
        </>
    )
}

export default Home