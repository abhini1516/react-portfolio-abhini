import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaGithub } from "react-icons/fa";
import { SiC } from "react-icons/si"; 
import { IoMdAnalytics } from "react-icons/io"; 
import { IoIosBuild } from "react-icons/io"; 
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y:[10,-10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div id="technologies" className="pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}}
      initial= {{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <RiReactjsLine className="text-4xl text-cyan-400" />
          <p className="text-center mt-2">React</p>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaPython className="text-4xl text-[#FFD43B]" />
          <p className="text-center mt-2">Python</p>
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <SiC className="text-4xl text-[#00599C]" />
          <p className="text-center mt-2">C Programming</p>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <IoMdAnalytics className="text-4xl text-[#F37626]" /> 
          <p className="text-center mt-2">Jupyter</p>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <FaGithub className="text-4xl text-gray-800" />
          <p className="text-center mt-2">GitHub</p>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
          <IoIosBuild className="text-4xl text-[#4CAF50]" /> 
          <p className="text-center mt-2">IoT</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
