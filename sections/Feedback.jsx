'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
const extendedDuration = 2;

const VacanciesSection = () => (
  <section className={`${styles.paddingY} ${styles.innerWidth} mx-auto py-12`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h2
  variants={fadeIn('up')}
  className="text-center font-bold text-2xl lg:text-3xl mb-10 ml-4" 
>
  Open vacancies
</motion.h2>

      <motion.div
        variants={staggerContainer}
        className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8 lg:mb-12" // Adjust margin-bottom as needed
      >
       
        {/* Senior Full-Stack Engineer Card */}
        <motion.div
          variants={fadeIn('left')}
          className={styles.card}
        >
          <h3 className="font-bold text-xl text-center mb-4">Senior Full-Stack Engineer</h3>
          <ul className="text-m text-center mb-4">
            <li>Full-time position</li>
            <li>Berlin or remote</li>
          </ul>
          <p className="text-m text-center mb-1">€65-85k</p>
          <p className="text-s text-center">0.5-1.50% equity share options</p>
        </motion.div>

        {/* Senior Designer Card */}
        <motion.div
          variants={fadeIn('up')}
          className={styles.card}
        >
          <h3 className="font-bold text-xl text-center mb-4">Senior Designer</h3>
          <ul className="text-m  text-center mb-4">
            <li>Full-time position</li>
            <li>Berlin or remote</li>
          </ul>
          <p className="text-m  text-center mb-1">€40-55k</p>
          <p className="text-s text-center">0.25-0.50% equity share options</p>
        </motion.div>

        {/* Superstar Intern Card */}
        <motion.div
          variants={fadeIn('right')}
          className={styles.card}
        >
          <h3 className="font-bold text-xl text-center mb-2">Superstar Intern</h3>
          <ul className="text-m  text-center mb-4">
            <li>Full-time position</li>
            <li>Berlin or remote</li>
          </ul>
          <p className="text-m text-center mb-1">€20-24k</p>
          <p className="text-s text-center">0.5-1.50% equity share options</p>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default VacanciesSection;


