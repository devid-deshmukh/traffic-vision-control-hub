
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, Map as MapIcon, Activity, CloudRain, AlertTriangle } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// This is a placeholder for the 3D map - in a real app, you'd use something like MapBox, Google Maps, or Three.js
export default function CityMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="h-full overflow-hidden relative">
      <Tabs defaultValue="traffic" className="h-full flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <MapIcon className="h-5 w-5 text-primary" />
            <h3 className="font-medium">3D City Map</h3>
          </div>
          <TabsList>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="weather">Weather</TabsTrigger>
            <TabsTrigger value="incidents">Incidents</TabsTrigger>
          </TabsList>
        </div>
        
        <CardContent className="flex-1 p-0 relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <>
              <div 
                ref={mapContainerRef}
                className="h-full w-full bg-gradient-to-br from-gray-900 to-gray-800"
              >
                {/* Simplified placeholder map with traffic visualization */}
                <div className="w-full h-full relative overflow-hidden">
                  {/* City grid overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#6366f1" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                  
                  {/* Main roads with traffic indicators */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Horizontal main road with heavy traffic (red) */}
                    <path 
                      d="M 0,250 L 1000,250" 
                      stroke="#ef4444" 
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    
                    {/* Vertical main road with moderate traffic (yellow) */}
                    <path 
                      d="M 500,0 L 500,600" 
                      stroke="#f59e0b" 
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    
                    {/* Secondary roads with free-flowing traffic (green) */}
                    <path 
                      d="M 200,0 L 200,600" 
                      stroke="#22c55e" 
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path 
                      d="M 800,0 L 800,600" 
                      stroke="#22c55e" 
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path 
                      d="M 0,400 L 1000,400" 
                      stroke="#22c55e" 
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path 
                      d="M 0,100 L 1000,100" 
                      stroke="#22c55e" 
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    
                    {/* Traffic flow animation */}
                    <path 
                      d="M 0,250 L 1000,250" 
                      stroke="rgba(255,255,255,0.6)" 
                      strokeWidth="2"
                      strokeDasharray="10,15"
                      className="animate-traffic-flow"
                    />
                    <path 
                      d="M 500,0 L 500,600" 
                      stroke="rgba(255,255,255,0.6)" 
                      strokeWidth="2"
                      strokeDasharray="10,15"
                      className="animate-traffic-flow"
                    />
                    
                    {/* Incident marker */}
                    <circle cx="500" cy="250" r="15" fill="#ef4444" className="animate-pulse-slow" />
                    <text x="500" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">!</text>
                  </svg>
                  
                  {/* Buildings */}
                  <div className="absolute left-[420px] top-[160px] w-20 h-40 bg-blue-900/80 rounded"></div>
                  <div className="absolute left-[460px] top-[170px] w-15 h-30 bg-blue-800/80 rounded"></div>
                  <div className="absolute left-[380px] top-[170px] w-25 h-25 bg-blue-700/80 rounded"></div>
                  <div className="absolute left-[440px] top-[300px] w-30 h-60 bg-blue-900/80 rounded"></div>
                  <div className="absolute left-[540px] top-[300px] w-25 h-50 bg-blue-800/80 rounded"></div>
                  <div className="absolute left-[340px] top-[300px] w-40 h-30 bg-blue-700/80 rounded"></div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 glass-card p-3 backdrop-blur-md inline-block">
                <TabsContent value="traffic" className="m-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Traffic Layers</h4>
                      <Layers className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Switch id="congestion" defaultChecked />
                        <Label htmlFor="congestion">Congestion</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="volume" defaultChecked />
                        <Label htmlFor="volume">Volume</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="speed" defaultChecked />
                        <Label htmlFor="speed">Speed</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="signals" />
                        <Label htmlFor="signals">Signals</Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="time">Time Forecast (Minutes)</Label>
                        <span className="text-xs text-muted-foreground">+30 min</span>
                      </div>
                      <Slider id="time" defaultValue={[30]} max={60} step={5} />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="weather" className="m-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Weather Conditions</h4>
                      <CloudRain className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Switch id="rain" />
                        <Label htmlFor="rain">Precipitation</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="temp" />
                        <Label htmlFor="temp">Temperature</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="wind" />
                        <Label htmlFor="wind">Wind</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="visibility" />
                        <Label htmlFor="visibility">Visibility</Label>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="incidents" className="m-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Incident Reports</h4>
                      <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Switch id="accidents" defaultChecked />
                        <Label htmlFor="accidents">Accidents</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="construction" defaultChecked />
                        <Label htmlFor="construction">Construction</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="events" />
                        <Label htmlFor="events">Events</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="closures" defaultChecked />
                        <Label htmlFor="closures">Road Closures</Label>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </>
          )}
        </CardContent>
      </Tabs>
    </Card>
  );
}
