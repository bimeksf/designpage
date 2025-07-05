'use client';
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const circleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5 + i * 0.2,
      duration: 0.5,
      ease: "easeOut"  as const
    }
  })
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1+ i * 0.2 ,
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  }),
};


const images = [
  { src: "/burger.jpg", alt: "Burger" },
  { src: "/curry.jpg", alt: "Curry" },
  { src: "/macncheese.jpg", alt: "Mac & Cheese" },
];


const page = () => {
  return (
    <section className="h-screen bg-[#a3bde4]">
      <div className="w-11/12 flex gap-4 h-full mx-auto p-4">

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          style={{ originX: 0, originY: 1 }}
          className="flex flex-col justify-between bg-black rounded-2xl p-8 text-white w-1/2"
        >

          <div className='flex gap-4'>
            {[ 'bg-amber-400', 'bg-red-400', 'bg-green-400', 'bg-pink-400' ].map((color, i) => (
              <motion.div
                key={i}
                className={`rounded-full h-12 w-12 ${color}`}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={circleVariants}
              />
            ))}
          </div>

          <h1 className="text-9xl leading-tight uppercase font-bold">
            3D <br /> Texture
          </h1>
        </motion.div>

        <div className="flex flex-col justify-between w-1/2 pt-4">
          <motion.p  
             initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8
           }}

           className="max-w-prose text-lg leading-relaxed text-black/80">
            Lorem ipsum dolor sit amet consecteturorum ullam, illum a quasi facilis facere voluptatum dignissimos molestias aspernatur eligendi consectetur? Praesentium autem fugiat reiciendis?
          </motion.p>


            
          

          <div className="flex gap-4 mb-12 justify-between">

            {images.map((img,i)=>(
             <motion.div
          key={img.alt}
          className="overflow-hidden rounded-4xl"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
              <Image key={i} src={img.src} alt={img.alt} width={250} height={100} className="rounded-4xl" />
                   </motion.div>
              
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default page;
