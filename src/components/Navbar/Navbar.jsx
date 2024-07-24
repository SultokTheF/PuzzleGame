import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-gray-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold text-emerald-600" to="/">Puzzle Game</Link>
        <div className="space-x-4">
          <Link className="hover:text-emerald-500" to="/">Home</Link>
          <Link className="hover:text-emerald-500" to="/game">Game</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
