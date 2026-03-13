import React, { useState } from "react";
import "./Credits.css";

const Credits: React.FC = () => {

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 5;
    const moveY = (y - centerY) / 5;

    e.currentTarget.style.transform =
      `scale(1.2) rotate(5deg) translate(${moveX}px, ${moveY}px)`;

    setTooltip({
      visible: true,
      x: e.clientX + 16,
      y: e.clientY - 5
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = "scale(1)";
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="credits-container">

      <p className="credits-text"> 
        Created by{' '} 
        <span className="name-wrapper"> 
          <span className="credits-name">Arin</span> 
          <svg className="credits-underline" xmlns="http://www.w3.org/2000/svg" width="46" height="5" viewBox="0 0 46 5" fill="none"> 
          <path d="M1.66681 2.4167C10.6668 1.41676 33.6668 1.41675 43.6668 2.4167" stroke="#91D0BF" strokeWidth="3.33333" strokeLinecap="round"/> </svg> 
        </span>
      </p>

      <img
        src="/Easter-Egg.svg"
        alt='For someone very special — one of the reason this site exists. "A small piece from the trip I wish I had taken."'
        className="credits-easter-egg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      <div
        className={`cursor-tooltip ${tooltip.visible ? "show" : ""}`}
        style={{
          left: tooltip.x,
          top: tooltip.y
        }}
      >
        !nspect
      </div>

    </div>
  );
};

export default Credits;