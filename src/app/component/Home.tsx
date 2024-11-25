import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className="bg-[#141414cf] w-full h-screen max-[550px]:mb-16 max-[700px]:mb-20 ">
  <div className="flex w-full h-screen max-[550px]:flex-col">
    <div className="w-[60%] mb-7 ">
      <h1 className="text-6xl mt-32  ml-5 font-bold text-white">Transform Your Fitness <br /> <span className="text-[#31b6aa]"> Journey Today!</span> </h1>
      <p className="my-8 ml-5 text-white">Unleash your full potential with world-class equipment, expert trainers,<br />
       and a vibrant community. Join us now and take the first step towards a healthier, stronger you!</p>
       <button className="px-5 bg-[#31b6aa] py-3 rounded-2xl text-white ml-8">Get Started Now </button>
    </div>
    <div className='max-[550px]:hidden'>
      <Image src={'https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png'}alt="pic" width={400} height={250} className=" h-[100vh] "></Image>
    </div>
  </div>
  </div>
  )
}
