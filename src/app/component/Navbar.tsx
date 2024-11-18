
import Link from 'next/link'



export default function Navbar() {

  return (
    <div className='flex justify-end gap-x-16  pt-4  max-[500px]:justify-around max-[500px]:ml-3 max-[900px]:mr-6' >
      <Link href={'/'} className='justify-between text-white  max-[900px]:text-sm font-semibold text-xl'>Home</Link>
      <Link href={'#about'} className='justify-between text-white  max-[900px]:text-sm font-semibold text-xl'>About</Link>
      <Link href={'#plans'} className='justify-between  max-[900px]:text-sm  text-white font-semibold text-xl'>Services</Link>
      <Link href={'#Contact'} className='justify-between max-[500px]:text-sm text-white font-semibold text-xl hover:text-[#b99f37]'>Contact-us</Link>
      <button className='bg-[#FF921B] items-end justify-evenly max-[900px]:hidden text-white mr-20 px-4 rounded-sm py-2  text-xl font-semibold'>Join us</button>

      
    </div>
 
  
  )
}
