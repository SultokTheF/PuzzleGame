import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-transparent opacity-20"></div>
      <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-xl font-bold text-emerald-600 mb-4 md:mb-0 md:text-2xl">15 Puzzle Game</Link>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/" className="hover:text-emerald-500 transition duration-300">Home</Link>
            <Link to="/game" className="hover:text-emerald-500 transition duration-300">Game</Link>
            <Link to="/about" className="hover:text-emerald-500 transition duration-300">About</Link>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com" className="hover:text-emerald-500 transition duration-300" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/sultaniyar-quandyq-39b244258/" className="hover:text-emerald-500 transition duration-300" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          </div>
          <div className="text-gray-400 text-center">&copy; 2024 15 Puzzle Game. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
