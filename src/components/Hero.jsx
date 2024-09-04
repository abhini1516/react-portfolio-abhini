import React from "react";
import profilePic from "../assets/profilePicture.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition: {duration:0.5,delay:delay},

  }
})

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-16 relative px-4 lg:px-0">
      <div className="flex flex-wrap lg:flex-nowrap">
        
        <div className="w-full flex justify-center  lg:w-1/2 lg:pl-8 mt-4 lg:mt-0 order-1 lg:order-2">
          <motion.img initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1,delay:1.2}}

            src={profilePic}
            alt="Profile Picture"
            className="w-40 h-40 lg:w-80 lg:h-80 object-cover object-top"
          />
        </div>

        
        <div className="w-full flex flex-col items-center lg:items-start lg:w-1/2 order-2 lg:order-1">
          <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible" 
          
          className="text-4xl text-white font-thin tracking-tight lg:mt-2 lg:ml-6 lg:text-6xl mt-1">
            ABHINI S
          </motion.h1>
          <motion.span variants={container(0.5)}
          initial="hidden"
          animate="visible"  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent lg:ml-6 mt-2">
            Data Science Aspirant
          </motion.span>
          <motion.p variants={container(1)}
          initial="hidden"
          animate="visible" className="my-2 max-w-xl text-sm lg:text-base py-2 font-light tracking-tighter lg:ml-6 mt-2">
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
