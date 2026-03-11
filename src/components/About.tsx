import './About.css';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        
        {/* Left Side: Text Content */}
        <div className="about-text-wrapper">
          <div className="about-title-container">
            <h2 className="about-title">About me</h2>
            {/* Vector Underline */}
            <svg className="title-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 7" fill="none" preserveAspectRatio="none">
              <path d="M1.66679 4.39222C37.447 0.836662 138.985 0.68053 177.667 4.39222" stroke="#91D0BF" stroke-width="3.33333" stroke-linecap="round"/>
            </svg>
          </div>

          <p className="about-paragraph">
            I’m a UI/UX designer who enjoys solving problems at the intersection of technology and human behavior. I approach design analytically, but always with a strong focus on the user’s perspective.
          </p>
          <p className="about-paragraph">
            I’m particularly interested in how small design decisions influence usability and overall experience. I enjoy breaking down complex ideas and shaping them into interfaces that are clear, intuitive, and purposeful.
          </p>
        </div>

        {/* Right Side: Photo */}
        <div className="about-image-wrapper">
          <img src="/profile-me.png" alt="Arin Goyal" className="about-photo" />
        </div>

      </div>
      <div className="about-divider" />
    </section>
  );
};

export default About;