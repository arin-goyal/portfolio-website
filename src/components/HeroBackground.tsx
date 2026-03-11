import './HeroBackground.css';

const HeroBackground = () => {
  const images = [
    '/img1.png?v=1', // Replace with your actual filenames in public folder
    '/img2.png?v=1',
    '/img3.png?v=1',
    '/img4.png?v=1',
    '/img5.png?v=1',
  ];

  return (
    <div className="hero-bg-container">
      <div className="carousel-track">
        {/* First set of images */}
        {images.map((src, index) => (
          <img key={`a-${index}`} src={src} className="carousel-img" loading="eager" alt="" />
        ))}
        {/* Duplicate set for seamless looping */}
        {images.map((src, index) => (
          <img key={`b-${index}`} src={src} className="carousel-img" loading="eager"alt="" />
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;