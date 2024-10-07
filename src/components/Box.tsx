import React from 'react';
import Image from 'next/image';

const Box = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-8 box'>
      <div className='h-[300px] md:h-auto md:flex-1 w-full md:w-[40%] lg:w-[35%] xl:w-[30%] mb-6 md:mb-0'>
        <Image 
          src="https://res.cloudinary.com/dicxuebms/image/upload/v1727782102/l36mpruve40fzuxnlezf.jpg"
          alt="AI Wearable Device" 
          width={500}
          height={300}
          className='w-full h-full md:h-auto rounded-lg object-cover md:object-contain shadow-lg transition-transform'
        />
      </div>
      <div className='h-auto w-full md:w-[35%] lg:w-[30%] xl:w-[25%] flex flex-col gap-6 md:ml-12'>
        <div className='h-auto w-full'>
          <h2 className='font-bold p-2 text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-2'>The world's most wearable AI.</h2>
          <p className='font-medium text-gray-600 p-2 text-base md:text-lg lg:text-xl leading-relaxed'>Preserve conversations and ask your personalized AI anything, anytime, anywhere.</p>
        </div>
        <div className='h-[250px] md:h-[350px] w-[80%] mx-auto'>
          <Image 
            src="https://res.cloudinary.com/dicxuebms/image/upload/v1727782539/r2129dzhl3rypjxe4tls.png"
            alt="AI Device Features"  
            width={400}
            height={350}
            className='w-full h-full rounded-md object-contain transition-transform hover:scale-110 transform rotate-3'
          />
        </div>
      </div>
    </div>
  );
}

export default Box;
