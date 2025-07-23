import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Journal from '../components/Journal';
import AIpage from '../components/AI/AIpage';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <NavBar />
      
      <div className="text-center px-4 pt-12 space-y-2">
        <h1 className="text-5xl font-bold">Dream Journal</h1>
        <h2 className="text-lg text-gray-400">Share your dreams and discover their meanings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12 py-12 max-w-7xl mx-auto">
        <Journal />
        <AIpage />
      </div>
    </div>
  );
};

export default HomePage;

