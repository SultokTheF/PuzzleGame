import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Game } from './components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  );
}

export default App;