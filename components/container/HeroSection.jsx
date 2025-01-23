import React from 'react'
import ButtonTransport from "@components/container/ButtonTransport";


const HeroSection = () => {
  return (
    <div className="">
      <div className='block text-white object-fit' style={{"backgroundImage": "url('https://ik.imagekit.io/tvlk/image/imageResource/2025/01/05/1736039053734-c2b57da96ac28a1df692de44bc14660b.png?tr=q-75')", "height": '600px'}}>
      <div class="pt-60">
        <div class="max-w-screen-xl mx-auto text-center">
          <h1 class="text-4xl font-bold">
            Wujudkan Perjalananmu dengan Caramu
          </h1>
          <ButtonTransport/>
          <a href="#" class="inline-block px-8 py-3 rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
            Pesan Sekarang
          </a>
      </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection