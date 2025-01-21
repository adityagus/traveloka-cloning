import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className='object-fit h-96 mt-12' style={{ "backgroundImage": "url('./assets/images/banner-2.webp')" }}>
      <div className="ml-0 -z-10 mt-0">
        <Image className="crete"
        src='/assets/images/bg-blue.png'
        alt='Newsletter'
        width={350}
        height={800}
        objectFit='cover'
        quality={100}
      />
      </div>

      {/* <Image className="crete"
      
        // src='/assets/images/banner-2.webp'
        alt='Newsletter'
        width={1920}
        height={800}
        objectFit='cover'
        quality={100}
      /> */}
    </div>
  )
}

export default Newsletter