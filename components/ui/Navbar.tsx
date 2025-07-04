import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <header className='bg-black rounded-3xl p-4  mb-8 w-[98%] mx-auto'>

        <nav className='flex justify-between'>
                         <Link href={"/"} className="bg-[#a3bde4] rounded-3xl p-4  w-1/2 pb-4 text-black">Find More</Link>

                <ul className='flex space-x-2 justify-center items-center'>
                    <li><Link href={"/"} className="bg-[#a3bde4] rounded-3xl p-4  w-1/2 pb-4 text-black">Find More</Link></li>
                    <li><Link href={"/"} className="bg-[#a3bde4] rounded-3xl p-4  w-1/2 pb-4 text-black">Find More</Link></li>
                    <li><Link href={"/"} className="bg-[#a3bde4] rounded-3xl p-4  w-1/2 pb-4 text-black">Find More</Link></li>
                    <li><Link href={"/"} className="bg-[#a3bde4] rounded-3xl p-4  w-1/2 pb-4 text-black">Find More</Link></li>


                </ul>

        </nav>


    </header>
  )
}



export default Navbar