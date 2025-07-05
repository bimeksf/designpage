'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Navbar from "@/components/ui/Navbar";

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
      <section className="bg-[#a3bde4] h-screen pt-4">
<motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeInOut" ,delay:0.5}} 
>
  <Navbar />
</motion.div>

        <div className="w-11/12 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
                  custom={1.5}
            variants={boxVariants}
            className="bg-black rounded-2xl p-8 text-white mb-4 origin-center"
          >
            <h1 className="uppercase text-white text-6xl">
              more than A <br />
              <span className="font-bold">design</span>
            </h1>
            <p className="max-w-prose mt-4 text-lg leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet consecteturorum ullam, illum a quasi facilis facere voluptatum dignissimos molestias aspernatur eligendi consectetur? Praesentium autem fugiat reiciendis?
            </p>
          </motion.div>

          <div className="flex justify-between gap-8">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                      custom={1.2}
                initial="hidden"
                animate="visible"
                variants={boxVariants}
                className="flex flex-col justify-between bg-black text-white p-4 rounded-2xl w-full max-w-xl h-80 origin-center"
              >
                <h2 className="uppercase text-2xl font-bold w-1/2">
                  {i === 2 ? "Laptop" : "3D"} <br /> {i === 2 ? "mockups" : "texture"}
                </h2>
                <Link
                  href="/product/1"
                  className="bg-[#a3bde4] rounded-3xl p-4 w-1/2 pb-4 text-black"
                >
                  Find More
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              className="flex flex-col gap-4 bg-black rounded-3xl text-white p-8 justify-center items-center origin-center"
            >
              <Facebook />
              <Instagram />
              <Youtube />
              <Twitter />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
