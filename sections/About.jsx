'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      initial="hidden"
      animate="show"
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-6">EQ beats IQ</h2>

        <div className="flex flex-col md:flex-row justify-between items-center w-full space-x-0 md:space-x-10">
  
          <p className="text-2xl mb-4 md:mb-0">
            People with high emotional intelligence (EQ) live more fulfilled lives.
            They tend to be happier and have healthier relationships.
          </p>

          <p className="text-2xl">
            They are more successful in their pursuits and make for inspiring leaders.
            According to science, they earn $29k a year.
          </p>
        </div>
      </div>

    </motion.div>
  </section>
);

export default About;
