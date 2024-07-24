import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { About, Game, Navbar, Login, Authorization } from './components';
import MainPage from './pages/MainPage';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem('currentUser', JSON.stringify(username));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </div>
  );
}

export default App;