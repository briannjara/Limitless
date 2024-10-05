import React from 'react'
import Image from 'next/image';

const Podd = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full gap-6 p-2 max-w-6xl mx-auto'>
      <div className='w-full md:w-[35%] lg:w-[30%] h-auto p-6 rounded-md shadow-md'>
        <Image
          src="https://res.cloudinary.com/dicxuebms/image/upload/v1727797002/pendant-angle_njg0wb.webp"
          alt="Pendant Angle"
          width={400}
          height={400}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='w-full md:w-[35%] lg:w-[30%] h-[400px] rounded-md shadow-lg'>
        <Image 
          src="https://res.cloudinary.com/dicxuebms/image/upload/v1727797075/pendant-back_ot01op.webp"
          alt="Pendant Back"
          width={400}
          height={400}
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  )
}

export default Podd