import React from "react";
import { CityTrafficAnimation } from "@/components/animations/TrafficAnimations";
import { cn } from "@/lib/utils";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Background with city traffic animation */}
      <div className="absolute inset-0 w-full h-full">
        <CityTrafficAnimation className="w-full h-full" />
      </div>

      {/* Optional Overlay with lower opacity and no blur (or no overlay at all) */}
      <div className="absolute inset-0 w-full h-full bg-white/ backdrop-blur-[0px]" />
    </div>
  );
};

export default AnimatedBackground;
