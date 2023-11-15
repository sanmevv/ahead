const Navbar = () => (
  <nav className='py-4 relative flex justify-center items-center bg-white shadow-md fadeOutBottom'>
    <div className="flex justify-between items-center rounded-lg w-full max-w-6xl">
      <div className="logo flex justify-start">
        <img
          src="/ahead_logo.png"
          alt="logo"
          className="w-10 h-10"
        />
      </div>
      <div className="nav-items flex justify-center gap-10 text-black rounded-full">
        <a href="#explore" className="nav-link">Emotions</a>
        <a href="#whats-new" className="nav-link">Manifesto</a>
        <a href="#world" className="nav-link">Self-awareness test</a>
        <a href="#feedback" className="nav-link">Work With Us</a>
      </div>

      <div className="download-app flex justify-end">
        <a 
          href="https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <button type="button" className="py-2 px-4 bg-black text-white rounded-full">
            Download app
          </button>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
