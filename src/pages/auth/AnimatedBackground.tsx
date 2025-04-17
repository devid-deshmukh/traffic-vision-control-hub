
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#0a0a0a] overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent z-0"></div>
      
      <svg 
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(147, 51, 234, 1)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(236, 72, 153, 1)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
          </radialGradient>
        </defs>

        <rect 
          x="13.744%" 
          y="1.18473%" 
          width="100%" 
          height="100%" 
          fill="url(#Gradient1)" 
          transform="rotate(334.41 50 50)"
        >
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 50 50" 
            to="360 50 50" 
            dur="7s" 
            repeatCount="indefinite"
          />
        </rect>
        
        <rect 
          x="-2.17916%" 
          y="35.4267%" 
          width="100%" 
          height="100%" 
          fill="url(#Gradient2)" 
          transform="rotate(255.072 50 50)"
        >
          <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 50 50" 
            to="360 50 50" 
            dur="12s" 
            repeatCount="indefinite"
          />
        </rect>
        
        <rect 
          x="9.00483%" 
          y="14.5733%" 
          width="100%" 
          height="100%" 
          fill="url(#Gradient3)" 
          transform="rotate(139.903 50 50)"
        >
          <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
          <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="360 50 50" 
            to="0 50 50" 
            dur="9s" 
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
