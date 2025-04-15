
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, Map as MapIcon, Activity, AlertTriangle, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, MinusCircle, PlusCircle } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "@/context/ThemeContext";

// This is a placeholder for the 3D map - in a real app, you'd use something like MapBox, Google Maps, or Three.js
export default function CityMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("traffic");
  const [mapMode, setMapMode] = useState<"2d" | "3d">("3d");
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [showTrafficLayers, setShowTrafficLayers] = useState({
    congestion: true,
    volume: true,
    speed: true,
    signals: false
  });
  const [incidentLayers, setIncidentLayers] = useState({
    accidents: true,
    construction: true,
    events: false,
    closures: true
  });
  const [forecastTime, setForecastTime] = useState(30);
  const { toast } = useToast();
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Map loaded",
        description: "Traffic map is now ready to use.",
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [toast]);

  // Functions for map interactions
  const zoomIn = () => {
    if (zoom < 3) {
      setZoom(prev => Math.min(prev + 0.2, 3));
      toast({
        title: "Zoomed in",
        description: "Map zoom level increased.",
        duration: 1500,
      });
    }
  };

  const zoomOut = () => {
    if (zoom > 0.5) {
      setZoom(prev => Math.max(prev - 0.2, 0.5));
      toast({
        title: "Zoomed out",
        description: "Map zoom level decreased.",
        duration: 1500,
      });
    }
  };

  const rotate = (direction: 'clockwise' | 'counterclockwise') => {
    if (direction === 'clockwise') {
      setRotation(prev => (prev + 45) % 360);
    } else {
      setRotation(prev => (prev - 45 + 360) % 360);
    }
    
    toast({
      title: "Map rotated",
      description: `Rotated ${direction === 'clockwise' ? 'clockwise' : 'counterclockwise'} by 45°`,
      duration: 1500,
    });
  };

  const resetMapView = () => {
    setZoom(1);
    setRotation(0);
    setMapPosition({ x: 0, y: 0 });
    toast({
      title: "View reset",
      description: "Map view has been reset to default.",
      duration: 1500,
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left click only
      setMouseDown(true);
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDown) {
      setIsDragging(true);
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;
      setMapPosition({
        x: mapPosition.x + dx / 50,
        y: mapPosition.y + dy / 50
      });
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    if (mouseDown && !isDragging) {
      // Handle map click/tap
      const randomLocation = {
        name: ["Downtown Junction", "North Heights", "Riverside Avenue", "Tech Park", "Central Station"][Math.floor(Math.random() * 5)],
        status: ["Heavy traffic", "Moderate flow", "Light traffic", "Clear", "Accident reported"][Math.floor(Math.random() * 5)]
      };
      
      toast({
        title: `Selected: ${randomLocation.name}`,
        description: `Status: ${randomLocation.status}`,
      });
    }
    
    setMouseDown(false);
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleTrafficLayerChange = (id: keyof typeof showTrafficLayers) => {
    setShowTrafficLayers(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      toast({
        title: newState[id] ? `${id.charAt(0).toUpperCase() + id.slice(1)} layer enabled` : `${id.charAt(0).toUpperCase() + id.slice(1)} layer disabled`,
        description: newState[id] ? `Showing ${id} data on the map.` : `Hidden ${id} data from the map.`,
        duration: 2000,
      });
      return newState;
    });
  };

  const handleIncidentLayerChange = (id: keyof typeof incidentLayers) => {
    setIncidentLayers(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      toast({
        title: newState[id] ? `${id.charAt(0).toUpperCase() + id.slice(1)} layer enabled` : `${id.charAt(0).toUpperCase() + id.slice(1)} layer disabled`,
        description: newState[id] ? `Showing ${id} data on the map.` : `Hidden ${id} data from the map.`,
        duration: 2000,
      });
      return newState;
    });
  };

  const handleForecastTimeChange = (value: number[]) => {
    setForecastTime(value[0]);
    toast({
      title: "Forecast time updated",
      description: `Showing traffic prediction for +${value[0]} minutes.`,
      duration: 2000,
    });
  };

  const handleMapModeChange = (value: "2d" | "3d") => {
    if (value) {
      setMapMode(value);
      toast({
        title: `${value.toUpperCase()} Mode Activated`,
        description: value === "3d" ? "Showing 3D traffic visualization" : "Showing 2D traffic map view",
      });
      
      // Reset view on mode change
      setZoom(1);
      setRotation(0);
      setMapPosition({ x: 0, y: 0 });
    }
  };

  return (
    <Card className="h-full overflow-hidden relative border-border/80 shadow-md">
      <Tabs 
        defaultValue="traffic" 
        className="h-full flex flex-col"
        value={selectedTab}
        onValueChange={setSelectedTab}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <MapIcon className="h-5 w-5 text-primary" />
            <h3 className="font-medium">{mapMode === "3d" ? "3D City Map" : "2D Traffic Map"}</h3>
          </div>
          <div className="flex items-center gap-2">
            <ToggleGroup type="single" value={mapMode} onValueChange={(value) => {
              if (value) handleMapModeChange(value as "2d" | "3d");
            }}>
              <ToggleGroupItem value="2d" size="sm" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">2D</ToggleGroupItem>
              <ToggleGroupItem value="3d" size="sm" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">3D</ToggleGroupItem>
            </ToggleGroup>
            <TabsList>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              {mapMode === "2d" && <TabsTrigger value="weather">Weather</TabsTrigger>}
              <TabsTrigger value="incidents">Incidents</TabsTrigger>
            </TabsList>
          </div>
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
                className={`h-full w-full relative ${mapMode === "3d" ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-[#F1F5F9]"}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ 
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  transition: "transform 0.3s ease",
                  cursor: mouseDown ? 'grabbing' : 'grab'
                }}
              >
                {/* Placeholder map with traffic visualization */}
                <div className="w-full h-full relative overflow-hidden" style={{ 
                  transform: `translate(${mapPosition.x}%, ${mapPosition.y}%)`,
                }}>
                  {/* City grid overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke={theme === "light" ? "#94A3B8" : "#6366f1"} strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                  
                  {/* Main roads with traffic indicators */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Horizontal main road with heavy traffic (red) */}
                    <path 
                      d="M 0,250 L 1000,250" 
                      stroke={showTrafficLayers.congestion ? "hsl(var(--traffic-red))" : "#999999"} 
                      strokeWidth={mapMode === "3d" ? "8" : "12"}
                      strokeLinecap="round"
                      style={{ display: showTrafficLayers.congestion || showTrafficLayers.volume ? "block" : "none" }}
                    />
                    
                    {/* Vertical main road with moderate traffic (yellow) */}
                    <path 
                      d="M 500,0 L 500,600" 
                      stroke={showTrafficLayers.congestion ? "hsl(var(--traffic-yellow))" : "#999999"} 
                      strokeWidth={mapMode === "3d" ? "8" : "12"}
                      strokeLinecap="round"
                      style={{ display: showTrafficLayers.congestion || showTrafficLayers.volume ? "block" : "none" }}
                    />
                    
                    {/* Secondary roads with free-flowing traffic (green) */}
                    <path 
                      d="M 200,0 L 200,600" 
                      stroke={showTrafficLayers.congestion ? "hsl(var(--traffic-green))" : "#999999"} 
                      strokeWidth={mapMode === "3d" ? "5" : "8"}
                      strokeLinecap="round"
                      style={{ display: showTrafficLayers.congestion || showTrafficLayers.volume ? "block" : "none" }}
                    />
                    <path 
                      d="M 800,0 L 800,600" 
                      stroke={showTrafficLayers.congestion ? "hsl(var(--traffic-green))" : "#999999"} 
                      strokeWidth={mapMode === "3d" ? "5" : "8"}
                      strokeLinecap="round"
                      style={{ display: showTrafficLayers.congestion || showTrafficLayers.volume ? "block" : "none" }}
                    />
                    <path 
                      d="M 0,400 L 1000,400" 
                      stroke={showTrafficLayers.congestion ? "hsl(var(--traffic-green))" : "#999999"} 
                      strokeWidth={mapMode === "3d" ? "5" : "8"}
                      strokeLinecap="round"
                      style={{ display: showTrafficLayers.congestion || showTrafficLayers.volume ? "block" : "none" }}
                    />
                    <path 
                      d="M 0,100 L 1000,100" 
                      stroke={showTrafficLayers.congestion ? "hsl(var(--traffic-green))" : "#999999"} 
                      strokeWidth={mapMode === "3d" ? "5" : "8"}
                      strokeLinecap="round"
                      style={{ display: showTrafficLayers.congestion || showTrafficLayers.volume ? "block" : "none" }}
                    />
                    
                    {/* Traffic flow animation */}
                    <path 
                      d="M 0,250 L 1000,250" 
                      stroke="rgba(255,255,255,0.6)" 
                      strokeWidth="2"
                      strokeDasharray="10,15"
                      className="animate-traffic-flow"
                      style={{ display: showTrafficLayers.speed ? "block" : "none" }}
                    />
                    <path 
                      d="M 500,0 L 500,600" 
                      stroke="rgba(255,255,255,0.6)" 
                      strokeWidth="2"
                      strokeDasharray="10,15"
                      className="animate-traffic-flow"
                      style={{ display: showTrafficLayers.speed ? "block" : "none" }}
                    />
                    
                    {/* Incident markers */}
                    {incidentLayers.accidents && (
                      <g style={{ cursor: "pointer" }} onClick={() => {
                        toast({
                          title: "Accident Selected",
                          description: "Major collision at Downtown Intersection, 2 vehicles involved.",
                        });
                      }}>
                        <circle cx="500" cy="250" r="15" fill="hsl(var(--traffic-red))" className="animate-pulse-slow" />
                        <text x="500" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">!</text>
                      </g>
                    )}
                    
                    {incidentLayers.construction && (
                      <g style={{ cursor: "pointer" }} onClick={() => {
                        toast({
                          title: "Construction Selected",
                          description: "Road work on Northern Avenue, expected completion in 3 days.",
                        });
                      }}>
                        <circle cx="200" cy="400" r="15" fill="hsl(var(--traffic-yellow))" className="animate-pulse-slow" />
                        <text x="200" y="405" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">C</text>
                      </g>
                    )}
                    
                    {selectedTab === "weather" && mapMode === "2d" && (
                      <>
                        {/* Simple weather overlay for 2D mode only */}
                        <rect x="0" y="0" width="100%" height="100%" fill="rgba(0, 0, 255, 0.05)" />
                        {/* Rain drops */}
                        {Array.from({ length: 30 }).map((_, i) => (
                          <line 
                            key={i}
                            x1={Math.random() * 1000} 
                            y1={Math.random() * 600}
                            x2={Math.random() * 1000 + 10} 
                            y2={Math.random() * 600 + 10}
                            stroke="rgba(135, 206, 250, 0.6)"
                            strokeWidth="1"
                            className="animate-pulse-slow"
                          />
                        ))}
                      </>
                    )}
                  </svg>
                  
                  {/* Traffic signals */}
                  {showTrafficLayers.signals && (
                    <div style={{ position: "absolute", left: "495px", top: "240px", cursor: "pointer" }}
                      onClick={() => {
                        toast({
                          title: "Traffic Signal Selected",
                          description: "Main intersection signal. Current phase: North-South green.",
                        });
                      }}
                    >
                      <div className="h-10 w-10 bg-black/50 rounded-md flex items-center justify-center border-2 border-white">
                        <div className="h-6 w-6 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Buildings - only show in 3D mode */}
                  {mapMode === "3d" && (
                    <>
                      <div className="absolute left-[420px] top-[160px] w-20 h-40 bg-blue-900/80 rounded"></div>
                      <div className="absolute left-[460px] top-[170px] w-15 h-30 bg-blue-800/80 rounded"></div>
                      <div className="absolute left-[380px] top-[170px] w-25 h-25 bg-blue-700/80 rounded"></div>
                      <div className="absolute left-[440px] top-[300px] w-30 h-60 bg-blue-900/80 rounded"></div>
                      <div className="absolute left-[540px] top-[300px] w-25 h-50 bg-blue-800/80 rounded"></div>
                      <div className="absolute left-[340px] top-[300px] w-40 h-30 bg-blue-700/80 rounded"></div>
                    </>
                  )}
                  
                  {/* 2D specific elements */}
                  {mapMode === "2d" && (
                    <>
                      <div className="absolute left-[420px] top-[160px] w-20 h-30 bg-blue-500/20 border border-blue-500 rounded"></div>
                      <div className="absolute left-[460px] top-[170px] w-15 h-20 bg-blue-500/20 border border-blue-500 rounded"></div>
                      <div className="absolute left-[380px] top-[170px] w-25 h-25 bg-blue-500/20 border border-blue-500 rounded"></div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                  onClick={zoomIn}
                  title="Zoom In"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                  onClick={zoomOut}
                  title="Zoom Out"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                {mapMode === "3d" && (
                  <>
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                      onClick={() => rotate('clockwise')}
                      title="Rotate Clockwise"
                    >
                      <RotateCw className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                      onClick={() => rotate('counterclockwise')}
                      title="Rotate Counter-clockwise"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </>
                )}
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                  onClick={resetMapView}
                  title="Reset View"
                >
                  <Maximize className="h-4 w-4" />
                </Button>
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
                        <Switch 
                          id="congestion" 
                          checked={showTrafficLayers.congestion}
                          onCheckedChange={() => handleTrafficLayerChange('congestion')}
                        />
                        <Label htmlFor="congestion">Congestion</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch 
                          id="volume" 
                          checked={showTrafficLayers.volume}
                          onCheckedChange={() => handleTrafficLayerChange('volume')}
                        />
                        <Label htmlFor="volume">Volume</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch 
                          id="speed" 
                          checked={showTrafficLayers.speed}
                          onCheckedChange={() => handleTrafficLayerChange('speed')}
                        />
                        <Label htmlFor="speed">Speed</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch 
                          id="signals" 
                          checked={showTrafficLayers.signals}
                          onCheckedChange={() => handleTrafficLayerChange('signals')}
                        />
                        <Label htmlFor="signals">Signals</Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="time">Time Forecast (Minutes)</Label>
                        <span className="text-xs text-muted-foreground">+{forecastTime} min</span>
                      </div>
                      <Slider 
                        id="time" 
                        value={[forecastTime]} 
                        max={60} 
                        step={5} 
                        onValueChange={handleForecastTimeChange}
                        className="[&>[role=slider]]:bg-primary"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="weather" className="m-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Weather Conditions</h4>
                      <div className="text-sm text-muted-foreground">Available in 2D mode only</div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center justify-center gap-2 p-4 rounded-md bg-secondary/20">
                        <Activity className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Weather data visualization is simplified in 2D mode</span>
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
                        <Switch 
                          id="accidents" 
                          checked={incidentLayers.accidents}
                          onCheckedChange={() => handleIncidentLayerChange('accidents')}
                        />
                        <Label htmlFor="accidents">Accidents</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch 
                          id="construction" 
                          checked={incidentLayers.construction}
                          onCheckedChange={() => handleIncidentLayerChange('construction')}
                        />
                        <Label htmlFor="construction">Construction</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch 
                          id="events" 
                          checked={incidentLayers.events}
                          onCheckedChange={() => handleIncidentLayerChange('events')}
                        />
                        <Label htmlFor="events">Events</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch 
                          id="closures" 
                          checked={incidentLayers.closures}
                          onCheckedChange={() => handleIncidentLayerChange('closures')}
                        />
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
