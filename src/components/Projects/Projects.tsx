import './Projects.css';

type ProjectsProps = {
  isDevMode: boolean;
}

const Projects = ({ isDevMode }: ProjectsProps) => {
  return (
    <section className="projects-container" id="work">
      <div className="projects-content">
        
        {/* Centered Title */}
        <div className="projects-header">
          <div className="projects-title-wrapper">
            <h2 className={`projects-title ${isDevMode ? 'font-dev-heading' : ''}`} style={isDevMode ? { color: '#569CB3' } : undefined}>Projects</h2>
            {isDevMode ? (
              <svg className="projects-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 10" fill="none" preserveAspectRatio="none">
                <defs>
                  <pattern id="squiggle-projects" width="14" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 0,5 Q 3.5,1 7,5 T 14,5" fill="none" stroke="#F14C4C" strokeWidth="2" strokeLinecap="round" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#squiggle-projects)" />
              </svg>
            ) : (
              <svg className="projects-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 7" fill="none" preserveAspectRatio="none">
                <path d="M1.66679 4.39222C37.447 0.836662 138.985 0.68053 177.667 4.39222" stroke="#91D0BF" strokeWidth="3.33333" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="projects-grid">
          <div className={`project-box ${isDevMode ? 'dev' : ''}`}></div>
          <div className={`project-box ${isDevMode ? 'dev' : ''}`}></div>
          <div className={`project-box ${isDevMode ? 'dev' : ''}`}></div>
          <div className={`project-box ${isDevMode ? 'dev' : ''}`}></div>
        </div>

        {/* Show More Button */}
        <div className="projects-footer">
          <a href="https://www.behance.net/aringoyal" target="_blank" rel="noreferrer" className={`show-more-btn ${isDevMode ? 'dev' : ''}`}>
            Show More
            <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M0.292893 10.8995C-0.0976311 11.29 -0.0976311 11.9232 0.292893 12.3137C0.683418 12.7042 1.31658 12.7042 1.70711 12.3137L1 11.6066L0.292893 10.8995ZM12.6066 1C12.6066 0.447715 12.1589 -8.19855e-08 11.6066 -3.34867e-07L2.6066 -2.08426e-07C2.05432 -5.45601e-07 1.6066 0.447715 1.6066 1C1.6066 1.55228 2.05432 2 2.6066 2L10.6066 2L10.6066 10C10.6066 10.5523 11.0543 11 11.6066 11C12.1589 11 12.6066 10.5523 12.6066 10L12.6066 1ZM1 11.6066L1.70711 12.3137L12.3137 1.70711L11.6066 1L10.8995 0.292893L0.292893 10.8995L1 11.6066Z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        {/* Partition Line */}
        <div className="projects-divider" />
      </div>
    </section>
  );
};

export default Projects;
