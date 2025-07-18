import React from 'react';

const Home = () => {
  return (
    <main className="min-h-screen bg-night-gradient flex items-center justify-center px-4 py-12">
      <div className="card text-center animate-fade-in">
        <h1 className="text-4xl font-display text-glow mb-4">Welcome to Dream Cache</h1>
        <p className="text-text-secondary text-lg mb-6">Decode your dreams with celestial insight.</p>
        <button className="btn">Get Started</button>
      </div>
    </main>

  );
};

export default Home;
