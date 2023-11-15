import styles from '../styles';

const Footer = () => (
  <footer className={`${styles.xPaddings} py-8 relative bg-white text-black flex justify-center items-center`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col items-center`}>
      <div className="flex flex-col items-center mb-4">
        <img
          src="/ahead_logo.png" 
          alt="Ahead logo"
          className="w-12 h-12 mb-2"
        />
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <img
              src="/loc.jpg" 
              alt="Location"
              className="w-4 h-4 mr-2"
            />
            <p className="text-sm">Auguststraße 26, 10117 Berlin</p>
          </div>
          <div className="flex items-center">
            <img
              src="/email.jpg"
              alt="Email"
              className="w-4 h-4 mr-2" 
            />
            <p className="text-sm">hi@ahead-app.com</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <a
          href="https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177" 
          className="flex items-center justify-center py-2 px-4 bg-black border border-white rounded-full"
        >
          <span className="ml-2 text-sm text-white">Download on the App Store</span>
        </a>
      </div>
      <div className="text-center text-xs">
        © 2022 Ahead app. All right reserved
      </div>
    </div>
  </footer>
);

export default Footer;
