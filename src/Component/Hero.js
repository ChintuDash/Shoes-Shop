import React from 'react';
import {Link} from 'react-router-dom';
import '../Style/Hero.css';
import Herotwo from './Hero_two';
const HeroSection =()=>{
    return(
        <>
        <main className="hero_container">
            <div className="hero">
                <marquee><h1>YOUR FEET DESERVE THE BEST</h1></marquee>
              
                <div id="pic">
                <img src={process.env.PUBLIC_URL+"/images/heroimg1.png"}alt="image"/>
                <img src={process.env.PUBLIC_URL+"/images/img3.webp"}alt="image"/>
                </div>
            </div>

            <div id="herobtn">
                <Link to="/AddShoes" className="link-button"><button>Shop Now</button></Link>
               <Link to="/Shoescategory"  className="link-button"> <button>Category</button></Link>
            </div>

           
        </main>
        <Herotwo/>
        </>
    );
};
export default HeroSection;