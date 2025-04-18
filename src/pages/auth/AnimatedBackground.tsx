
import React from "react";
import { CityTrafficAnimation } from "@/components/animations/TrafficAnimations";
import { cn } from "@/lib/utils";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Background with city traffic animation */}
      <div className="absolute inset-0 w-full h-full bg-slate-800">
        <CityTrafficAnimation className="w-full h-full" />
      </div>
      
      {/* Overlay gradient for better contrast while preserving animation visibility */}
      <div className="absolute inset-0 w-full h-full bg-white/40 backdrop-blur-[1px]" />
    </div>
  );
};

export default AnimatedBackground;
