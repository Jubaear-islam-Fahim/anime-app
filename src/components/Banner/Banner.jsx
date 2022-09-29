import React from "react";
import arrow from '../../assets/img/arrow.png' 
import {Link} from 'react-scroll';
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner-area" id="home"> 
      <div className="banner-shape">

      </div>
      <div className="banner-text">
        <div className="head-title"> 
        </div>
        <h1 data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">Lorem ipsum</h1>
        <p data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1400">
          <a href="/" className="btn-lg">Get started</a>
        </div>
        <div className="downArrow"> 
          <Link to="tokenomics" className="nav-link" py={true} offset={-100} ><img src={arrow} alt="icon" /></Link>
        </div>
      </div> 
    </div>
  );
};

export default Banner;
