import React from "react";
import { motion } from "framer-motion";
import { fadeIn, scaleVariant, textVariant } from "../../assets/motion";

const Hero = () => {
  return (
    <section className="container mx-auto pt-25 pb-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center">
      {/* left */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star badge */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
        >
          <div className="flex items-center space-x-2 bg-gray-50 px-4 py-1 rounded-full hover:bg-gray-100 transition-colors duration-300 group w-max cursor-pointer ">
            <span className="text-blue-600 group-hover:scale-110 transition-transform duration-300 hover:text-amber-300">
              ★
            </span>
            <span className="text-sm font-medium">Jump star your growth</span>
          </div>
        </motion.div>
        
        <motion.h1
         variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
           className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We boost the growth for
          <span className=" text-blue-600 relative inline-block">
            startup to fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600/60"></span>
          </span>
          companies <span>⏰</span>
        </motion.h1>
        <motion.p
         variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
           className="text-lg font-medium text-gray-600 md:text-xl max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eum
          sequi distinctio atqueipisci quibusdam.
        </ motion.p>
        <motion.div 
        variants={fadeIn("down", 0.5)}
          initial="hidden"
          animate="show"
        className="flex">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs transition-all"
          />
          {/* arrow badge */}
          <button className="border bg-blue-600 hover:border-blue-700 text-white text-2xl rounded-md px-4 py-2 ml-2 font-extrabold ">
            →
          </button>
        </motion.div>
      </div>
      {/* right */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <motion.div
          variants={scaleVariant(0.8, 1, 0.5)}
          initial="hidden"
          animate="show"
          style={{ perspective: 1000 }}

        >
          {" "}
          <img
            src="/src/assets/hero-image.png"
            alt="Hero Image"
            className="rounded-lg relative z-10 hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
