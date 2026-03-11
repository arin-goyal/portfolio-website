import './Credits.css';

const Credits = () => {
  return (
    <div className="credits-container">
      {/* Left side: Text */}
      <p className="credits-text">
        Created by{' '}
        <span className="name-wrapper">
          <span className="credits-name">Arin</span>
          <svg className="credits-underline" xmlns="http://www.w3.org/2000/svg" width="46" height="5" viewBox="0 0 46 5" fill="none">
            <path d="M1.66681 2.4167C10.6668 1.41676 33.6668 1.41675 43.6668 2.4167" stroke="#91D0BF" strokeWidth="3.33333" strokeLinecap="round"/>
          </svg>
        </span>
      </p>

      {/* Right side: Easter Egg PNG */}
      <img 
        src="/Easter-egg.png" 
        alt="Easter Egg" 
        className="credits-easter-egg" 
      />
    </div>
  );
};

export default Credits;