import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage1 from '../Assets/home-banner-image1.png'; // Ensure you have multiple images
import BannerImage2 from '../Assets/home-banner-image2.png'
// import BannerImage3 from '../Assets/home-banner-image3.jpg';
import { FiArrowRight } from "react-icons/fi"; // Correct package name and icon import
import { Route } from 'react-router-dom';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [BannerImage1, BannerImage2]; // Array of image sources

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='home-container'>
      
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt='Banner Background' /> {/* Background image */}
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your favourite Food Delivered Fresh
          </h1>
          <p className='primary-text'>
            Switch to a healthier and a better lifestyle by choosing us
          </p>
        <Link to ='/item' className='order-now-link'>
          <button className='secondary-button'>
            Order now <FiArrowRight />        
          </button>
          </Link>
        </div>
        <div className='home-bannerImage-content'>
          <img src={images[currentImage]} alt='Banner Image' /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
