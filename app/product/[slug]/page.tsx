import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className="h-screen bg-[#a3bde4]">
      <div className="w-11/12 flex gap-4 h-full mx-auto p-4">
        
        <div className="flex flex-col justify-between bg-black rounded-2xl p-8 text-white w-1/2">
            <div className='flex   gap-4'>
                    <div className='rounded-full bg-amber-400 h-12 w-12'></div>
                    <div className='rounded-full bg-red-400 h-12 w-12'></div>
                    <div className='rounded-full bg-green-400 h-12 w-12'></div>
                    <div className='rounded-full bg-pink-400 h-12 w-12'></div>

            </div>
          <h1 className="text-9xl leading-tight uppercase font-bold">3D <br /> Texture</h1>
        </div>

        <div className="flex flex-col justify-between w-1/2 pt-4">
          
          <p className="max-w-prose text-lg leading-relaxed text-black/80">
            Lorem ipsum dolor sit amet consecteturorum ullam, illum a quasi facilis facere voluptatum dignissimos molestias aspernatur eligendi consectetur? Praesentium autem fugiat reiciendis?
          </p>

          <div className="flex gap-4 mb-12 justify-between ">
            <Image src="/burger.jpg" alt="Burger" width={250} height={100} className="rounded-4xl" />
            <Image src="/curry.jpg" alt="Curry" width={250} height={100} className="rounded-4xl" />
            <Image src="/macncheese.jpg" alt="Mac & Cheese" width={250} height={100} className="rounded-4xl" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default page
