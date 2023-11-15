'use client';
import { motion } from 'framer-motion';
import styles from '../styles';

const GetStarted = () => {

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className={`${styles.paddings} relative z-10 flex justify-center items-center`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants} 
        className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
      >
        {/* Privacy notice */}
        <motion.div
          variants={textVariants} 
          initial="hidden"
          animate="visible"
          className="text-center mb-4"
        >
          <p className="text-m ">We take privacy seriously</p>
        </motion.div>

        {/* Main title */}
        <motion.h2
          variants={textVariants} 
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-6"
        >
          Before <span>you get started</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={textVariants} 
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          "We won't share your answers with anyone [and won't ever tell you which friends said what about you]"
        </motion.p>

        {/* Signature */}
        <motion.div
          variants={textVariants} 
          className="text-center mb-6"
        >
          <p className="italic text-lg" style={{ fontFamily: 'Dancing Script' }}>with love, Team Ahead</p>
        </motion.div>

        {/* Start button */}
        <motion.a 
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          href="https://selfawareness.ahead-app.com/" 
          className="bg-black text-white py-2 px-4 rounded-full mb-4"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          Start a test
        </motion.a>

        {/* Time estimate */}
        <motion.div
          variants={textVariants} 
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <p className="text-sm">Takes only 5 minutes</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
