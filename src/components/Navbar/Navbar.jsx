import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-gray-900 text-gray-300 p-6 shadow-lg fixed w-full top-0" style={{ zIndex: 9999 }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold text-emerald-600 md:text-4xl" to="/">Puzzle Game</Link>
        <div className="space-x-4 text-lg md:space-x-8 md:text-xl flex-grow flex justify-center">
          <Link className="hover:text-emerald-500 transition duration-300" to="/">Home</Link>
          <Link className="hover:text-emerald-500 transition duration-300" to="/#about">About</Link>
          <Link className="hover:text-emerald-500 transition duration-300" to="/game">Game</Link>
        </div>
        <div className="space-x-2 md:space-x-4">
          {user ? (
            <>
              <span className="text-emerald-500 text-lg md:text-xl">{user}</span>
              <button 
                className="bg-emerald-600 text-gray-300 px-3 py-2 rounded-lg hover:bg-emerald-700 transition duration-300 md:px-4 md:py-2"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                className="bg-emerald-600 text-gray-300 px-3 py-2 rounded-lg hover:bg-emerald-700 transition duration-300 md:px-4 md:py-2" 
                to="/login"
              >
                Login
              </Link>
              <Link 
                className="bg-emerald-600 text-gray-300 px-3 py-2 rounded-lg hover:bg-emerald-700 transition duration-300 md:px-4 md:py-2" 
                to="/authorization"
              >
                Authorization
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
