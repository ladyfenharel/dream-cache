import React from 'react';

const Journal = () => {
  return (
    <div className="p-4 border border-white rounded-lg ">
      <h1 className="text-2xl font-bold">Write Your Dream</h1>
      <div className="flex justify-center">
  <textarea
    placeholder="Describe your dream in detail..."
    className="w-full max-w-2xl p-4 rounded-lg bg-background border-2 border-dreamPurple text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
    rows={5}
  />
</div>
    </div>
  );
};

export default Journal;
