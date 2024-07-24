import React from 'react';
import HomeCarousel from './HomeCarousel/HomeCarousel';


const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">About the 15 Puzzle Game</h2>
        <p className="mb-4">
          The 15 puzzle game is a sliding puzzle that consists of a frame of numbered square tiles in random order with one tile missing. The puzzle aims to place the tiles in numerical order by making sliding moves that use the empty space.
        </p>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-2xl font-bold text-emerald-500 mb-2">Game Rules</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">Arrange the tiles in numerical order from 1 to 15.</li>
            <li className="mb-2">You can only move tiles that are adjacent to the empty space.</li>
            <li className="mb-2">Use as few moves as possible to solve the puzzle.</li>
          </ul>
        </div>
      </div>

      <HomeCarousel />
    </div>
  );
}

export default Home;
