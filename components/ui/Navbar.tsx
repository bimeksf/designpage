import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <header className='bg-black rounded-3xl p-4  mb-8 w-[98%] mx-auto'>

        <nav className='flex justify-between'>
                         <Link href={"/"} className="bg-[#a3bde4] text-black font-bold px-4 py-2 rounded-3xl transition-all duration-300  hover:scale-105 hover:shadow-lg">Find More</Link>

                <ul className='flex space-x-2 justify-center items-center'>
            
                    <li><Link href={"/"}   className=" text-white px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#a3bde4] hover:text-black hover:scale-105 hover:shadow-lg">Find More</Link></li>
                    <li><Link href={"/"}   className=" text-white px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#a3bde4] hover:text-black hover:scale-105 hover:shadow-lg">Find More</Link></li>
                    <li><Link href={"/"}   className=" text-white px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#a3bde4] hover:text-black hover:scale-105 hover:shadow-lg">Find More</Link></li>
                    <li><Link href={"/"}   className=" text-white px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#a3bde4] hover:text-black hover:scale-105 hover:shadow-lg">Find More</Link></li>


                </ul>

        </nav>


    </header>
  )
}



export default Navbar