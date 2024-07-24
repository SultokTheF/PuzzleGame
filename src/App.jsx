import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Game, Navbar } from './components';

const App = () => {
  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;