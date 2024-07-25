import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      onLogin(username);
      alert('Login successful!');
      window.location.href = '/';
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-transparent opacity-20"></div>
      <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-emerald-600 rounded-full opacity-30 animate-ping md:w-40 md:h-40"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-pulse md:w-32 md:h-32"></div>
      
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md z-10">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center md:text-3xl">Login</h2>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Username</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-900 text-gray-300"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 rounded-lg bg-gray-900 text-gray-300"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-emerald-600 text-gray-300 p-3 rounded-lg hover:bg-emerald-700 transition duration-300 mb-4"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="text-center text-gray-400">
          <p>Don't have an account? <a href="/authorization" className="text-emerald-600 hover:text-emerald-700">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
