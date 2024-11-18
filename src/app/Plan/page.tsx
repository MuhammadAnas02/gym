import React from 'react'

export default function Plans() {
  return (
    <div id='plans' className='bg-black w-full h-screen pt-20 pl-10 max-[500px]:py-[200px]'>
      <h1  className='text-white font-semibold text-3xl text-center '>Subscribe To <span className='text-[#FF921B]'>Plans</span> </h1>
      <div className='flex  max-[900px]:flex-col max-[900px]:text-center   max-[900px]:mt-10   mt-28 mx-[14vw] gap-x-24 w-100%'>
      <div className='px-4 hover:bg-[#e86d3099] md:flex-row py-9 w-30% justify-between hover:scale-125 duration-150 ease-in rounded-lg'>
            <h1 className='text-white text-6xl font-semi-bold text-center '>Fit</h1>
            <p className='text-gray-400 text-xl mt-5 text-center'>Plan Exp.  16/11/2024</p>
            <p className='text-4xl text-white mt-16'>$1000 /Month</p>
            <p className='text-xl text-gray-400 text-center mt-3'>Streaming</p>
            <button className='border-[#FF921B] border-2  max-[900px]:ml-0 text-white px-6 py-2 ml-11 rounded-sm mt-9 font-medium'>Select Plan</button>
        </div>
        <div className='px-4 hover:bg-[#e86d3099] w-30% py-9 max-[900px]:my-11 hover:scale-125 rounded-md duration-150 ease-in'>
            <h1 className='text-white text-6xl font-semi-bold text-center '>Fit</h1>
            <p className='text-gray-400 text-xl mt-5 text-center'>Plan Exp.  16/11/2024</p>
            <p className='text-4xl text-white mt-16'>$1000 /Month</p>
            <p className='text-xl text-gray-400 text-center mt-3'>Streaming</p>
            <button className='border-[#FF921B] border-2 max-[900px]:ml-0 text-white px-6 py-2 ml-11 rounded-sm mt-9 font-medium'>Select Plan</button>
        </div>
        <div className='px-4 hover:bg-[#e86d3099] w-30%  py-9 hover:scale-125 rounded-md duration-150 ease-in max-[900px]:hidden'>
            <h1 className='text-white text-6xl font-semi-bold text-center '>Fit</h1>
            <p className='text-gray-400 text-xl mt-5 text-center'>Plan Exp.  16/11/2024</p>
            <p className='text-4xl text-white mt-16'>$1000 /Month</p>
            <p className='text-xl text-gray-400 text-center mt-3'>Streaming</p>
            <button className='border-[#FF921B] border-2 max-[900px]:ml-0 text-white px-6 py-2 ml-11 rounded-sm mt-9 font-medium'>Select Plan</button>
        </div>
     </div>
    </div>
  )
}
