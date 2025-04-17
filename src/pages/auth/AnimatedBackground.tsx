
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Main background animation wrapper */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        {/* Background layers */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f9dea1] via-[#f9dea1] to-[#9bdaff]" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-[300deg] from-[#f9c3f5] via-[#f9c3f5] to-[#9bdaff] animate-bg-fade-1" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-[10deg] from-[#bab2fc] via-[#bab2fc] to-[#9bdaff] animate-bg-fade-2" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
