import React from "react";
import './About.css';

type AboutProps = {
  isDevMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDevMode }) => {

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 10;
    const moveY = (y - centerY) / 10;

    e.currentTarget.style.transform =
      `rotate(2deg) scale(1.08) translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = "rotate(0.8deg) scale(1.03)";
  };

  return (
    <section className="about-container" id="about">
      <div className="about-content">
        
        {/* Left Side: Text Content */}
        <div className="about-text-wrapper">
          <div className="about-title-container">
            <p className={`about-title ${isDevMode ? 'font-dev-heading' : ''}`} style={isDevMode ? { color: '#569CB3' } : undefined}>About me</p>
            {/* Vector Underline */}
            {isDevMode ? (
              <svg className="title-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 10" fill="none" preserveAspectRatio="none">
                <defs>
                  <pattern id="squiggle-about" width="14" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 0,5 Q 3.5,1 7,5 T 14,5" fill="none" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#squiggle-about)" />
              </svg>
            ) : (
              <svg className="title-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 7" fill="none" preserveAspectRatio="none">
                <path d="M1.66679 4.39222C37.447 0.836662 138.985 0.68053 177.667 4.39222" stroke="#91D0BF" strokeWidth="3.33333" strokeLinecap="round"/>
              </svg>
            )}
          </div>

          {isDevMode ? (
            <>
              <p className="about-paragraph" style={{ color: '#5A6649' }}>
                ```I’m an AI/ML engineer focused on building data-driven solutions that connect ideas to real-world applications. I take an analytical approach while ensuring systems are practical and scalable.```
              </p>
              <p className="about-paragraph" style={{ color: '#5A6649' }}>
                ```I’m interested in how decisions around data, model design, and optimization affect performance. I enjoy breaking down complex problems and building solutions that are efficient, robust, and meaningful.```
              </p>
            </>
          ) : (
            <>
              <p className="about-paragraph">
                I’m a UI/UX designer who enjoys solving problems at the intersection of technology and human behavior. I approach design analytically, but always with a strong focus on the user’s perspective.
              </p>
              <p className="about-paragraph">
                I’m particularly interested in how small design decisions influence usability and overall experience. I enjoy breaking down complex ideas and shaping them into interfaces that are clear, intuitive, and purposeful.
              </p>
            </>
          )}
        </div>

        {/* Right Side: Photo */}
        <div className="about-image-wrapper">
          <img 
            src={isDevMode ? "/profile-me dev.png" : "/profile-me.png"} 
            alt="Arin Goyal" 
            className={`about-photo ${isDevMode ? 'dev' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

      </div>
      <div className="about-divider" />
    </section>
  );
};

export default About;
