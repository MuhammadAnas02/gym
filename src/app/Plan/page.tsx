import React from 'react'

export default function Plans() {
  return (
    <section className="text-gray-600 body-font " id='plans'>
      <h1  className='text-white font-semibold text-3xl text-center '>Subscribe To <span className='text-[#31b6aa]'>Plans</span> </h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 hover:bg-[#2c445364] rounded-lg hover:scale-110">
        <div className="h-full text-center">
          <h1 className="leading-relaxed text-3xl text-white">Fit.</h1>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-sm">Plan Exp.  16/11/2024</h2>
          <p className="text-gray-500 mt-6">$1000 /Month</p>
          <button className='border-[#31b6aa] border-2 max-[900px]:ml-0 text-white px-6 py-2 ml-4 rounded-sm mt-9 font-medium'>Select Plan</button>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 hover:bg-[#2c445364] rounded-lg hover:scale-110">
        <div className="h-full text-center ">
        <h1 className="text-white text-3xl">Fit</h1>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <p className="leading-relaxed">Plan Exp.  16/11/2024</p>
          <h2 className="text-gray-500 mt-6 font-medium title-font tracking-wider text-sm">$1500 /Month</h2>
          <button className='border-[#31b6aa] border-2 max-[900px]:ml-0 text-white px-6 py-2 ml-8 rounded-sm mt-9 font-medium'>Select Plan</button>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4 hover:bg-[#2c445364] rounded-lg hover:scale-110">
        <div className="h-full text-center">
        <h1 className="text-white text-3xl">Fit</h1>
        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <p className="leading-relaxed">Plan Exp.  16/11/2024</p>
          <h2 className="text-gray-500 mt-6 font-medium title-font tracking-wider text-sm">$2000 /Month</h2>
          <button className='border-[#31b6aa] border-2 max-[900px]:ml-0 text-white px-6 py-2 ml-4 rounded-sm mt-9 font-medium'>Select Plan</button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
