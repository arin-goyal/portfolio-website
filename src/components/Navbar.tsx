import './Navbar.css';
import ModeToggle from './ModeToggle';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* We will place the Logo, Links, and Button here */}
        <div className="navbar-left">
            <img src="/profile.png" alt="Arin" className="profile-img" />
            <div className="profile-text">
                <span className="profile-name">Arin</span>
                <span className="profile-role">UI/UX Designer</span>
            </div>
        </div>
        {/* Right Side (Navigation Links) */}
        <div className="nav-links">
            <a href="#AboutMe" className="nav-item">About Me</a>
            <a href="#Projects" className="nav-item">Projects</a>
            <a href="/Resume.pdf" target="_blank" className="nav-item">Resume</a>
            <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;