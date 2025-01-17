import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import puzzle1 from "../../../assets/images/puzzle1.webp";
import puzzle2 from '../../../assets/images/puzzle2.webp';
import puzzle3 from '../../../assets/images/puzzle3.webp';
import './AboutCarousel.css';

const AboutCarousel = () => {
  return (
    <div className="container mx-auto mt-12 p-4 relative overflow-hidden lg:mt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-transparent opacity-20"></div>
      <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>
      
      <h3 className="text-xl font-bold text-emerald-600 mb-4 text-center relative z-10 md:text-2xl" data-aos="fade-down">Puzzle Examples</h3>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        useKeyboardArrows
        dynamicHeight
        className="shadow-lg rounded-lg mb-10 relative z-10"
        data-aos="fade-up"
      >
        <div>
          <img src={puzzle1} alt="Puzzle Example 1" />
        </div>
        <div>
          <img src={puzzle2} alt="Puzzle Example 2" />
        </div>
        <div>
          <img src={puzzle3} alt="Puzzle Example 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default AboutCarousel;
