import React from 'react';
import AboutCarousel from './AboutCarousel/AboutCarousel';

const About = () => {
  return (
    <div id="about" className="container mx-auto mt-24 p-4">
      <div className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-transparent opacity-20"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-600 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-600 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>

        <h2 className="text-3xl font-bold text-emerald-600 mb-6 relative z-10" data-aos="fade-down">About the 15 Puzzle Game</h2>
        <p className="mb-6 relative z-10" data-aos="fade-up">
          The 15 puzzle game is a sliding puzzle that consists of a frame of numbered square tiles in random order with one tile missing. The puzzle aims to place the tiles in numerical order by making sliding moves that use the empty space.
        </p>
        <div className="bg-gray-700 p-6 rounded-lg relative z-10" data-aos="fade-right">
          <h3 className="text-2xl font-bold text-emerald-500 mb-4">Game Rules</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">Arrange the tiles in numerical order from 1 to 15.</li>
            <li className="mb-2">You can only move tiles that are adjacent to the empty space.</li>
            <li className="mb-2">Use as few moves as possible to solve the puzzle.</li>
          </ul>
        </div>
      </div>

      <AboutCarousel />
    </div>
  );
}

export default About;