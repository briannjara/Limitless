import React from 'react';

const Meeting = () => {
  return (
    // Added background gradient to match theme
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-purple-50 to-white'>
      {/* Increased max-width for better responsiveness */}
      <div className='max-w-4xl w-full text-center'>
        {/* Adjusted heading color to match purple theme */}
        <h1 className='text-5xl mt-16 font-serif md:text-6xl text-purple-900'>Meetings</h1>
        {/* Modified paragraph text for improved readability and contrast */}
        <p className='mt-7 text-xl md:text-2xl text-gray-700 leading-relaxed'>
          Make your day feel easy with all the context from your online and real-world conversations in one place.{' '}
          {/* Kept purple highlight with semibold font */}
          <span className='font-semibold text-purple-800'>No bots required.</span>
        </p>
        {/* Added "Get Started" button with purple styling and hover effect */}
        <button className='mt-10 px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Meeting;
