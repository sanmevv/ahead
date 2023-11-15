'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
const titleVariants = {
  offscreen: { x: -50, opacity: 0 },
  onscreen: { 
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 }
  }
};

const iconVariants = {
  offscreen: { rotate: 0 },
  onscreen: { 
    rotate: 360,
    transition: { type: 'spring', stiffness: 60, duration: 2 }
  }
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } }
};
const FamiliarScenarioCard = ({ emoji, text, bgColor }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex-shrink-0 flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md m-2 w-90 cursor-pointer"
    style={{
      width: '350px', 
      height: '250px', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem', 
      borderRadius: '20px', 
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)', 
      margin: '1rem', 
      backgroundColor: bgColor, 
    }}
    
  >
    <div className="text-6xl">{emoji}</div> 
    <p className="mt-4 text-center text-lg">{text}</p> {/* Larger text */}
  </motion.div>
);
const ghostVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const Explore = () => {
  const [active, setActive] = useState(null);

  const scenarios = [
    {
      emoji: '🧐',
      text: 'You squabble with your partner accusing them of doing that thing you hate (they always do it!), instead of staying calm and addressing their concerns.',
      bgColor: '#FFB4A2' // Pastel Red
    },
    {
      emoji: '😤',
      text: 'You argue with a colleague getting angry and defensive, instead of staying open and working towards common ground.',
      bgColor: '#A7BED3' // Pastel Blue
    },
    {
      emoji: '🤔',
      text: 'You ponder a problem for hours, instead of asking for help and collaborating on a solution.',
      bgColor: '#C6E2E9' // Pastel Light Blue
    },
    {
      emoji: '😅',
      text: 'You stress over meeting personal goals, ignoring the achievements you’ve already made and not rewarding yourself for them.',
      bgColor: '#F3E1D5' // Pastel Orange
    },
    {
      emoji: '🙃',
      text: 'You say yes to every request, stretching yourself thin, instead of setting healthy boundaries and prioritizing your well-being.',
      bgColor: '#E0BBE4' // Pastel Purple
    },
    {
      emoji: '😌',
      text: 'You dwell on a minor mistake you made, allowing it to overshadow your day, instead of learning from it and moving forward.',
      bgColor: '#FFDFD3' // Pastel Pink
    },
    {
      emoji: '🥳',
      text: 'You feel uneasy about celebrating your successes, worrying it’s just luck, instead of acknowledging your effort and abilities.',
      bgColor: '#B4F8C8' // Pastel Green
    },
    {
      emoji: '😓',
      text: 'You work through lunch and stay late every day, prioritizing work over health, instead of taking breaks to recharge.',
      bgColor: '#A9DEF9' // Pastel Lighter Blue
    }
  ];
  const cardStyle = {
    width: '280px', // Wider card
    height: '180px', // Shorter card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0.5rem',
  };
  return (
    <section className="p-8 bg-white-50">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="max-w-6.5xl mx-auto flex flex-col"
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-semibold mb-10"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Does this sound familiar...
          <motion.span
            variants={ghostVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1.5 }}
            role="img"
            aria-label="ghost"
            className="inline-block ml-6"
          >
            👻
          </motion.span>
        </motion.h2>

        <div className="flex overflow-x-auto gap-4 pb-4" style={{ scrollbarWidth: 'none' }}> {/* For horizontal scrolling */}
          {scenarios.map((scenario, index) => (
            <FamiliarScenarioCard
              key={index}
              emoji={scenario.emoji}
              text={scenario.text}
              bgColor={scenario.bgColor}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;