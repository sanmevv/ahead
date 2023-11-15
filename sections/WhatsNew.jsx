'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { StartSteps, TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
const steps = [
  {
    title: "It’s not as easy as 1-2-3.",
    description: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    icon: "🧠"
  },
  {
    title: "Old habits are hard to break.",
    description: "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use (instead of shouting at your boss).",
    icon: "🏋️"
  },
  {
    title: "You and your motivation don’t have a long-term relationship.",
    description: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises (jazzed with a healthy dose of humor) will help you stick to your goals.",
    icon: "💡"
  },
  {
    title: "Books just don’t offer practical solutions.",
    description: "Remember when you learned to ride a bike just by reading? Yeah, we don’t either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",
    icon: "📖"
  },
  {
    title: "It goes in one ear, out the other.",
    description: "By managing your goals in a realistic way, we help you avoid tackling too much at once.",
    icon: "🐥"
  },
  {
    title: "Inspiration is great, but then what.",
    description: "We make sure your energy from all the content you consume does not fizzle out.",
    icon: "🔥"
  }
  
];
const SelfImprovementSteps = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Title */}
      <TypingText title="Self-Improvement Redefined." />
      <motion.h1
        variants={fadeIn('up', 'tween', 0.3, 0)}
        className="text-left-center text-4xl font-bold my-8"
      >
        Self-improvement. Ugh.
      </motion.h1>
      <div className="scrollable-steps">
        <motion.ol
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative border-xs border-white-20"
        >
          {steps.map((step, index) => (
  <li key={index} className="mb-10 ml-4">
    <div className="flex items-start">
      <span className="flex items-center justify-center w-10 h-10 rounded-full ring-4 ring-purple-300 -ml-2 mr-4">
        <span className="text-2xl">{step.icon}</span>
      </span>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold leading-tight">{step.title}</h3>
        <p className="text-md font-normal mt-2">{step.description}</p>
      </div>
    </div>
  </li>
))}
        </motion.ol>
      </div>
    </motion.div>
  </section>
);

export default SelfImprovementSteps;
