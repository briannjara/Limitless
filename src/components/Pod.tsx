import React from 'react';
import Image from 'next/image';

const Pod = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full gap-6 p-2 max-w-6xl mx-auto'>
      <div className='w-full md:w-[35%] lg:w-[30%] h-auto p-6 rounded-md shadow-md'>
        {['100-hour battery life', 'Durable aluminum body', 'Crystal clear audio', 'Weatherproof', 'Versatile magnetic clasp', 'Wi-Fi and Bluetooth enabled', 'USB-C charging'].map((feature, index) => (
          <h2 key={index} className='mt-5 font-semibold text-gray-500'>{feature}</h2>
        ))}
      </div>
      <div className='w-full md:w-[35%] lg:w-[30%] h-[400px] rounded-md shadow-lg'>
        <Image 
          src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727796597/ebxmrjyv8bzr1ivzif3z.webp`} 
          alt="Pod image" 
          width={500} // Adjust this value as needed
          height={400} // Adjust this value as needed
          className='w-full h-full object-contain' 
        />
      </div>
    </div>
  );
}

export default Pod;
