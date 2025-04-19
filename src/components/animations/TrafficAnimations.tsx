import React from "react";
import { cn } from "@/lib/utils";
import { Car, Bike, Truck, CarFront, Bus } from "lucide-react";

/**
 * A looping car animation that drives on a road
 */
export const CarRoadAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-10 overflow-hidden mt-4">
      {/* Road with dashed line */}
      <div className="absolute bottom-2 left-0 right-0 h-1 bg-gray-600"></div>
      <div className="absolute bottom-2 left-0 right-0 h-1">
        <div className="h-0.5 w-full flex items-center justify-around">
          <div className="h-0.5 w-[10%] bg-yellow-400"></div>
          <div className="h-0.5 w-[10%] bg-yellow-400"></div>
          <div className="h-0.5 w-[10%] bg-yellow-400"></div>
          <div className="h-0.5 w-[10%] bg-yellow-400"></div>
          <div className="h-0.5 w-[10%] bg-yellow-400"></div>
          <div className="h-0.5 w-[10%] bg-yellow-400"></div>
        </div>
      </div>
      
      {/* Animated car */}
      <div className="absolute bottom-3 left-0 h-4 w-8 bg-primary rounded-md animate-car-drive">
        {/* Windshield */}
        <div className="absolute top-0.5 right-1 left-1 h-1.5 bg-blue-200 rounded-sm"></div>
      </div>
    </div>
  );
};

/**
 * A top-down city traffic view animation
 */
export const CityTrafficAnimation: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("relative w-full h-24 overflow-hidden bg-slate-800 rounded-lg", className)}>
      {/* Roads */}
      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-8 bg-gray-700">
        <div className="h-full w-full flex items-center justify-around">
          <div className="h-0.5 w-[8%] bg-yellow-400"></div>
          <div className="h-0.5 w-[8%] bg-yellow-400"></div>
          <div className="h-0.5 w-[8%] bg-yellow-400"></div>
          <div className="h-0.5 w-[8%] bg-yellow-400"></div>
          <div className="h-0.5 w-[8%] bg-yellow-400"></div>
          <div className="h-0.5 w-[8%] bg-yellow-400"></div>
        </div>
      </div>
      
      {/* Vertical road */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-8 bg-gray-700">
        <div className="h-full w-full flex flex-col items-center justify-around">
          <div className="w-0.5 h-[8%] bg-yellow-400"></div>
          <div className="w-0.5 h-[8%] bg-yellow-400"></div>
          <div className="w-0.5 h-[8%] bg-yellow-400"></div>
          <div className="w-0.5 h-[8%] bg-yellow-400"></div>
          <div className="w-0.5 h-[8%] bg-yellow-400"></div>
        </div>
      </div>

      {/* Left to Right Vehicles */}
      <div className="absolute top-[calc(50%-12px)] left-0 animate-car-horizontal-slow vehicle-hover">
        <Car className="text-[#ea384c] fill-[#ea384c]" size={24} />
      </div>
      <div className="absolute top-[calc(50%-10px)] left-[-150px] animate-car-horizontal-slow vehicle-hover">
        <Truck className="text-[#F97316] fill-[#F97316]" size={20} />
      </div>

      {/* Right to Left Vehicles */}
      <div className="absolute top-[calc(50%-8px)] right-0 -scale-x-100 animate-car-horizontal-reverse-slow vehicle-hover">
        <CarFront className="text-[#0EA5E9] fill-[#0EA5E9]" size={16} />
      </div>
      <div className="absolute top-[calc(50%-10px)] right-[-150px] -scale-x-100 animate-car-horizontal-reverse-slow vehicle-hover">
        <Bus className="text-[#FEF7CD] fill-[#FEF7CD]" size={20} />
      </div>

      {/* Top to Bottom Vehicles */}
      <div className="absolute top-0 left-[calc(50%-8px)] rotate-90 animate-car-vertical-slow vehicle-hover">
        <Bike className="text-[#F2FCE2] fill-[#F2FCE2]" size={16} />
      </div>
      <div className="absolute top-[-150px] left-[calc(50%-10px)] rotate-90 animate-car-vertical-slow vehicle-hover">
        <Car className="text-[#0EA5E9] fill-[#0EA5E9]" size={20} />
      </div>

      {/* Bottom to Top Vehicles */}
      <div className="absolute bottom-0 left-[calc(50%-8px)] -rotate-90 animate-car-vertical-reverse-slow vehicle-hover">
        <CarFront className="text-[#ea384c] fill-[#ea384c]" size={16} />
      </div>
      <div className="absolute bottom-[-150px] left-[calc(50%-10px)] -rotate-90 animate-car-vertical-reverse-slow vehicle-hover">
        <Truck className="text-[#F97316] fill-[#F97316]" size={20} />
      </div>
    </div>
  );
};

/**
 * A neon car with light trails animation
 */
export const NeonCarAnimation: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={cn("relative w-full h-16 overflow-hidden bg-slate-900 rounded-lg", className)}>
      {/* Road with neon markers */}
      <div className="absolute bottom-2 left-0 right-0 h-1 bg-slate-800"></div>
      <div className="absolute bottom-2 left-0 right-0 h-1">
        <div className="h-0.5 w-full flex items-center justify-around">
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
          <div className="h-0.5 w-[5%] bg-purple-500 opacity-70 shadow-glow"></div>
        </div>
      </div>
      
      {/* Animated neon car with trail */}
      <div className="absolute bottom-3 left-0 animate-neon-car-drive">
        <div className="relative h-4 w-8 bg-cyan-500 rounded-md shadow-neon-cyan">
          {/* Windshield */}
          <div className="absolute top-0.5 right-1 left-1 h-1.5 bg-white/30 rounded-sm"></div>
          
          {/* Neon trail */}
          <div className="absolute right-full top-0 bottom-0 w-12 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * A smart route navigation animation
 */
export const SmartRouteAnimation: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={cn("relative w-full h-20 overflow-hidden rounded-lg", className)}>
      {/* Route path */}
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <path 
          d="M10,40 C30,10 50,70 90,40 S130,10 170,40 190,70" 
          fill="none" 
          stroke="#DDE1E6" 
          strokeWidth="2"
          strokeDasharray="3,3"
        />
        
        {/* Animated car on path */}
        <circle cx="0" cy="0" r="5" fill="#3742FA" className="animate-follow-path">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M10,40 C30,10 50,70 90,40 S130,10 170,40 190,70"
          />
        </circle>
        
        {/* Checkpoints */}
        <circle cx="10" cy="40" r="3" fill="#FF4757" />
        <circle cx="90" cy="40" r="3" fill="#FFA502" />
        <circle cx="170" cy="40" r="3" fill="#2ED573" />
      </svg>
    </div>
  );
};

/**
 * A traffic light loader animation
 */
export const TrafficLightLoader: React.FC<{loading?: boolean}> = ({loading = false}) => {
  return (
    <div className="flex space-x-2 items-center justify-center mt-2">
      <div className={`h-3 w-3 rounded-full ${loading ? 'animate-traffic-red' : 'bg-[#FF4757]'}`}></div>
      <div className={`h-3 w-3 rounded-full ${loading ? 'animate-traffic-amber' : 'bg-[#FFA502]'}`}></div>
      <div className={`h-3 w-3 rounded-full ${loading ? 'animate-traffic-green' : 'bg-[#2ED573]'}`}></div>
    </div>
  );
};

/**
 * Button with microinteraction car animation
 */
export const CarButtonAnimation: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}> = ({children, onClick, className, disabled}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative w-full group overflow-hidden text-xs sm:text-sm",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md",
        "font-medium transition-colors focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "h-10 px-4 py-2",
        className
      )}
    >
      {children}
      <div className="absolute -bottom-6 left-0 right-0 h-6 opacity-0 group-hover:opacity-100">
        <div className="absolute bottom-3 left-2 h-3 w-5 bg-white/80 rounded-md animate-button-car-drive"></div>
      </div>
    </button>
  );
};
