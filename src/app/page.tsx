import React from "react";
import Navbar from "./component/Navbar";
import Nutrition from "./About/page";
import Plans from "./Plan/page";
import Contact from "./Contact/page";
// import Image from "next/image";
// import Heallo from '../../image.png'

export default function Home() {
  return (
  <>
   <section className="bg-[url('https://t3.ftcdn.net/jpg/08/91/66/14/360_F_891661420_jqN3r5hlZnBG1XhBhdQqFwKJOjMO4Krm.jpg')] bg-cover h-screen">
   <Navbar/>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="text-[#ffffff] text-8xl font-bold mx-4 max-[550px]:text-5xl max-[500px]:text-center">
        Transform your 
        <br />
        Body
      </h1>
      <p className="mb-8 leading-relaxed mt-7 text-white ml-4 ">We are dedicated to helping you transform your <br />
      body and mind through the power of fitness.</p>
      <div className="flex justify-center">
        <button className="inline-flex ml-5 text-white bg-[#FF921B] border-0 py-2 px-6 focus:outline-none hover:bg-black hover:scale-110 rounded text-lg">Get Start</button>
        <button className="ml-4 inline-flex border-[#FF921B] border-4 text-white py-2 px-6 focus:outline-none hover:scale-110 rounded text-lg">Watch video</button>
      </div>
    </div>
    
  </div>
</section>
  
   <Nutrition/>
   <Plans/>
   <Contact/>
  </>
 
  );
}