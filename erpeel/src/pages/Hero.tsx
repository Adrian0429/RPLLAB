"use client";
import RedButton from "components/RedButton";
import WhiteButton from "components/WhiteButton";
import { motion } from "framer-motion";

import styles from "../styles";

const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const Hero = () => (
  <section>
    <motion.div
      variants={staggerContainer(1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-[url('/assets/top-down.jpg')] bg-cover bg-left bg-no-repeat pb:6 pl:6 sm:pb-14 sm:pl-14 lg:pl-28 lg:pb-28 flex flex-col`}
    >
      <section className="relative">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25 lg:rounded-xl">

          <motion.h1 variants={textVariant(1)}
              className="text-3xl font-extrabold sm:text-5xl">
          </motion.h1>
        </div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl text-center sm:text-left">
            <motion.h1
              variants={textVariant(1)}
              className="font-extrabold text-2xl sm:text-3xl lg:text-6xl text-gray-800 uppercase"
            >
              Find keyboard that
              <strong className="block font-extrabold text-rose-600 my-2">
                matches your soul
              </strong>
            </motion.h1>

            <motion.p
              variants={textVariant(0.7)}
              className="mt-4 max-w-2xl sm:text-2xl sm:leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
            <WhiteButton title="Get Started"/>
            <RedButton title="kok ga merash sih"/>
            {/* <RedButton title="Learn More"/> */}

            </div>
          </div>
        </div>
      </section>
    </motion.div>
  </section>
);

export default Hero;
