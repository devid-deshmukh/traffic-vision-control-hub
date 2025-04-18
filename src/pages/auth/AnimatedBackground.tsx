
import React from "react";
import { CityTrafficAnimation } from "@/components/animations/TrafficAnimations";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Background with city traffic animation */}
      <div className="absolute inset-0 w-full h-full bg-slate-800">
        <CityTrafficAnimation className="w-full h-full" />
      </div>
      
      {/* Overlay gradient for better contrast - reduced opacity for better visibility of animation */}
      <div className="absolute inset-0 w-full h-full bg-white/50 backdrop-blur-[2px]" />
    </div>
  );
};

export default AnimatedBackground;
