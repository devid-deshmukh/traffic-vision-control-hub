
import React from "react";
import { CityTrafficAnimation } from "@/components/animations/TrafficAnimations";

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

      {/* City traffic animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl opacity-30">
        <CityTrafficAnimation className="w-full h-40" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
