"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { products } from "../../../data/data";

import { notFound } from "next/navigation";
const circleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5 + i * 0.2,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1 + i * 0.2,
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  }),
};

const images = [
  { src: "/example.jpg", alt: "example" },
  { src: "/main.jpg", alt: "main" },
  { src: "/3d.jpg", alt: "3d" },
];

type Props = {
  params: {
    slug: string;
  };
};

const Page: React.FC<Props> = ({ params }) => {
  const product = products.find((p) => p.id === params.slug);

  if (!product) return notFound();

  return (
    <section className="h-screen bg-[#a3bde4] pt-28">
      <div className="w-11/12   h-full mx-auto p-4 flex flex-col gap-8 sm:flex-row">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          style={{
            originX: 0,
            originY: 1,
            backgroundImage: `url(${product.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`flex flex-col justify-between bg-black rounded-2xl p-8 text-white sm:w-1/2  flex-1  bg-${product.url} `}
        >
          <div className="flex gap-4">
            {["bg-amber-400", "bg-red-400", "bg-green-400", "bg-pink-400"].map(
              (color, i) => (
                <motion.div
                  key={i}
                  className={`rounded-full h-6 w-6 sm:h-12 sm:w-12 ${color}  `}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  variants={circleVariants}
                />
              )
            )}
          </div>

          <h1 className="sm:text-9xl text-2xl leading-tight uppercase font-bold">
            {product.title}
          </h1>
        </motion.div>

        <div className="flex flex-col justify-between sm:w-1/2 pt-4">
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            className="max-w-prose text-lg leading-relaxed text-black/80 pb-8 sm:pb-0"
          >
            {product.description}
          </motion.p>

          <div className="flex   gap-4 mb-12 justify-between">
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                className=" relative  rounded-4xl   w-full h-40 sm:h-60 overflow-hidden"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <Image
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="rounded-4xl object-cover "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
