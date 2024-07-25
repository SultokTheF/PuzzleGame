import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const slogan = "Slide and Solve: The Ultimate Puzzle Challenge!";

  return (
    <header id="header" className="bg-gray-950 text-gray-300 h-screen flex flex-col items-center justify-center space-y-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-transparent opacity-20"></div>
      <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>
      
      <h1 className="text-4xl font-bold text-emerald-600 md:text-6xl" data-aos="fade-down">15 Puzzle Game</h1>
      <p className="text-lg text-emerald-400 md:text-2xl" data-aos="fade-up">{slogan}</p>
      
      <div className="text-center space-y-4" data-aos="zoom-in">
        <p className="text-md md:text-lg">Challenge your mind with the classic 15 Puzzle Game. Slide the tiles to arrange them in order.</p>
        <p className="text-md md:text-lg">Compete with friends, beat the clock, and solve the puzzle in the fewest moves possible.</p>
      </div>

      <a href="/game" className="mt-10 px-6 py-3 bg-emerald-600 text-gray-300 rounded-lg hover:bg-emerald-700 transition duration-300" data-aos="zoom-out">
        Play Now
      </a>
    </header>
  );
}

export default Header;
