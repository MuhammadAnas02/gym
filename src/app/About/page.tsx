import Image from 'next/image'
import React from 'react'
import pic1 from '@/1.png'
import pic2 from '@/pic2.png' 
import pic3 from '@/pic3.png' 
import pic4 from '@/pic4.png' 
import pic5 from '@/pic5.png' 
import pic6 from '@/pic6.png'  

export default function About() {
  return (
    <div  className="bg-black w-full h-auto pt-11 pl-6" id="about">
  <h1 className="text-white text-4xl text-center font-medium">
    Fitness Plans & <span className="text-[#FF921B]">Nutritions</span>
  </h1>

  <div className="flex flex-wrap justify-between mt-14 gap-10 px-[19vw]">
    {[
      { src: pic1, alt: "Pic1", text: "Weight loss can have causes diseases. Examples include dieting, exercise, malnutrition or lack of access to food." },
      { src: pic2, alt: "Pic2", text: "Weight loss can have causes diseases. Examples include dieting, exercise, malnutrition or lack of access to food." },
      { src: pic3, alt: "Pic3", text: "Weight loss can have causes diseases. Examples include dieting, exercise, malnutrition or lack of access to food." },
      { src: pic4, alt: "Pic4", text: "Weight loss can have causes diseases. Examples include dieting, exercise, malnutrition or lack of access to food." },
      { src: pic5, alt: "Pic5", text: "Weight loss can have causes diseases. Examples include dieting, exercise, malnutrition or lack of access to food." },
      { src: pic6, alt: "Pic6", text: "Weight loss can have causes diseases. Examples include dieting, exercise, malnutrition or lack of access to food." },
    ].map((item, index) => (
      <div
        key={index}
        className="w-[300px] sm:w-[200px] hover:scale-105 duration-200 text-center"
      >
        <Image
          src={item.src}
          alt={item.alt}
          className="w-full h-auto rounded-md "
          sizes="icon"
        />
        <p className="text-white mt-4 text-sm sm:text-base">
          {item.text}
        </p>
      </div>
    ))}
  </div>
</div>

  )
}
