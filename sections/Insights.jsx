'use client';
import React from 'react';
import { motion } from 'framer-motion';


const styles = {
  container: 'mx-auto px-2 py-4 max-w-7xl',
  header: 'flex justify-between items-center w-full',
  sectionHeading: 'text-4xl font-bold',
  logo: 'h-12', 
  sectionContainer: 'flex flex-col lg:flex-row items-start gap-8 mt-4',
  leftColumn: 'w-60px lg:w-5/12 space-y-4',
  rightColumn: 'w-60px lg:w-6.5/12 space-y-4 overflow-y-auto py-4 max-h-[500px] scrollbar-hide', // Added max height and overflow for scrolling
  card: 'bg-[#F3F0FD] p-6 rounded-lg shadow-lg flex flex-col space-y-4',
  cardTitle: 'font-bold text-xl mb-2',
  cardText: 'text-base leading-relaxed',
  scrollbarHide: `
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;  /* Chrome, Safari, Opera*/
    }
  `,
};
const ScrollbarStyle = () => (
  <style>
    {`
      .scrollbar-hide {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    `}
  </style>
);
// Define your left-side content
const leftSideContent = [
  {
    title: "About",
    text: "At ahead our goal is to make self-improvement fun and lasting. We know there’s a way how to make it work. And that's what aHead is all about!",
    emoji: "🤔" 
  },
  {
    title: "Product",
    text: "Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...",
    emoji: "📚" 
  },
];

// Define your right-side cards content
const rightSideCards = [
  {
    title: "Power through, even when the going gets tough",
    text: "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc."
  },
  {
    title: "Learn more about who you are and where you want to go",
    text: "We ask the right questions to help you better understand why you do things the way you do."
  },
  {
    title: "Play and grow together with others on the same journey",
    text: "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!"
  },
  {
    title: "Embrace the challenge of change",
    text: "Change can be daunting, but it's also a chance for remarkable transformation. We guide you to embrace the discomfort and use it as a catalyst for growth."
  },
  {
    title: "Cultivate resilience and adaptability",
    text: "Resilience is key in an evolving world. We equip you with strategies to bounce back from setbacks and adapt to new circumstances."
  },
  {
    title: "Unlock your full potential",
    text: "Unlock your untapped potential. Our approach helps identify and leverage your unique strengths, propelling you to new heights."
  }
];
const WorkWithUsSection = () => (
  <>
    <ScrollbarStyle />
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.sectionHeading}>Work with us</h2>
        <img src="/ahead_logo_transparent.png" alt="ahead logo" className={styles.logo} />
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.leftColumn}>
          {leftSideContent.map((item, index) => (
            <motion.div key={index} className={styles.card}>
              <span className="text-3xl mr-4">{item.emoji}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className={`${styles.rightColumn} scrollbar-hide`}>
          {rightSideCards.map((card, index) => (
            <motion.div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default WorkWithUsSection;
