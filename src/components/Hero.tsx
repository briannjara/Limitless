import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  return (
    // Enhanced background gradient for a subtle "sandwich" effect
    <div className='flex justify-center bg-gradient-to-b from-purple-50 via-white to-purple-50 py-20'>
      <div className='h-auto max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] flex flex-col items-center'>
        {/* Improved video button with hover effects and responsive sizing */}
        <div className="group flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-[52px] mb-12 hover:shadow-lg transition-all duration-300 cursor-pointer"> 
          {/* Play icon with hover effect */}
          <div className="flex-shrink-0 flex items-center justify-center bg-purple-100 rounded-full w-10 h-10 mr-3 group-hover:bg-purple-200 transition-colors duration-300">
            <i className="fas fa-play text-purple-600 text-lg group-hover:text-purple-700 transition-colors duration-300"></i> 
          </div>
          {/* Text with chevron icon for better UX */}
          <div className="flex-grow flex items-center">
            <span className="text-gray-700 text-sm font-medium group-hover:text-purple-700 transition-colors duration-300 truncate">
              Watch the demo video
            </span>
            {/* Chevron icon with appear and slide effect on hover */}
            <i className="fas fa-chevron-right ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
          </div>
        </div>
        {/* Heading with gradient text effect */}
        <h2 className="text-purple-900 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-tight mb-8">
          Go beyond your <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">mind's limitations</span>
        </h2>
        {/* Subheading with highlighted words */}
        <p className='text-gray-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mb-12 font-light'>
          Personalized AI powered by what <br /> you've <span className="font-medium text-purple-700">seen</span>, <span className="font-medium text-indigo-600">said</span>, and <span className="font-medium text-blue-600">heard</span>.
        </p>
      
        {/* Enhanced CTA button with gradient and hover effect */}
        <button className='group relative h-[56px] w-full sm:w-[240px] rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg'>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
            Get started for free
          </span>
          {/* Sliding gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
