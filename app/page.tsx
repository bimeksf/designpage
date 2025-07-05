'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { products } from "../data/data"

const boxVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    originX: 0.5,
  },
  visible: (custom:number) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
           duration: custom, 
      ease: 'easeInOut' as const,
    },
  }),
};



export default function Home() {
  return (
    <>
      <section className="bg-[#a3bde4] h-screen pt-28 ">


        <div className="w-11/12 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
             custom={1.5}
            variants={boxVariants}

             style={{
            backgroundImage: `url(/main.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}


            className="bg-black rounded-2xl p-8 text-white mb-4 origin-center sm:h-120"
          >
            <h1 className="uppercase text-white text-3xl  sm:text-6xl">
              more than A <br />
              <span className="font-bold">design</span>
            </h1>
            <p className="max-w-prose mt-4  text-xs   sm:text-lg leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet consecteturorum ullam, illum a quasi facilis facere voluptatum dignissimos molestias aspernatur eligendi consectetur? Praesentium autem fugiat reiciendis?
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-4 h-[400px]  ">
            {products.map((item, i) => (
              <motion.div
                key={i}
                custom={1.2}
                initial="hidden"
                animate="visible"
                variants={boxVariants}
                 whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}

                    style={{
            originX: 0,
            originY: 1,
            backgroundImage: `url(${item.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}


                className="flex  sm:flex-col sm:items-baseline items-center  sm:justify-between bg-black text-white p-4 rounded-2xl  h-20 sm:h-100 origin-center flex-1 "
              >
                <h2 className="uppercase  text-xl sm:text-2xl font-bold w-1/2">
                  {item.title}
                </h2>
                <Link
                  href={`/product/${item.id}`}
                  className="bg-[#a3bde4] rounded-3xl p-4 w-1/2 pb-4 text-black transition-all duration-300 hover:bg-[#a3bde4] hover:text-black hover:scale-105 hover:shadow-lg hover:font-bold"
                >
                  Find More
                </Link>
              </motion.div>
              
            ))}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={boxVariants}
        className="flex sm:flex-col gap-4 sm:gap-8 bg-black rounded-3xl text-white p-4 sm:p-8 justify-center items-center origin-center h-full sm:h-100 "
            >
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
    >
      <Icon />
    </motion.div>
  ))}
            </motion.div>
          </div>


          
        </div>
      </section>
    </>
  );
}
