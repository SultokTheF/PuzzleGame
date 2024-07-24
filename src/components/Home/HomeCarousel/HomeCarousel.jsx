import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import puzzle1 from "../../../assets/images/puzzle1.png";
import puzzle2 from '../../../assets/images/puzzle2.png';
import puzzle3 from '../../../assets/images/puzzle3.png';
import './HomeCarousel.css'; // Make sure to create this CSS file for custom styles

const HomeCarousel = () => {
  return (
    <div className="mt-8 container mx-auto">
      <h3 className="text-2xl font-bold text-emerald-600 mb-4 text-center">Puzzle Examples</h3>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        useKeyboardArrows
        dynamicHeight
        className="shadow-lg rounded-lg"
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

export default HomeCarousel;
