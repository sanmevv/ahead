'use client';
import { motion } from 'framer-motion';
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.heroYPaddings} ${styles.flexCenter}`}>
    <div
      className={`${styles.innerWidth} mx-auto flex flex-col items-start justify-center rounded-lg overflow-hidden relative`}
      style={{
        backgroundImage: 'url(/walp.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
      }}
    >
      {/* Text and Download Button with adjusted left padding */}
      <div className="flex flex-col items-start justify-center h-full" style={{ padding: '8vh 4vw' }}> {/* Adjusted padding for left alignment */}
        {/* Subtitle */}
        <span className="text-sm uppercase text-gray-500 mb-4">
          Ahead app
        </span>
        
        {/* Main Heading */}
        <h1 className="font-bold text-[40px] leading-[48px] titlecase text-black mb-4">
          <span>Master your life</span><br/>
          <span>by mastering</span><br/>
          <span>emotions</span>
        </h1>

        {/* Download Button */}
        <a 
          href="https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '16px',
            marginBottom: '16px',
          }}
          className="mt-4"
        >
          Download on the App Store
        </a>
        
        {/* Review Count */}
        <span className="text-m text-right text-black" style={{ alignSelf: 'flex-start' }}>
          100+ AppStore reviews
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
