
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { PlayCircle, PauseCircle, SkipForward, RotateCcw, Download, Share2, Save } from "lucide-react";
import { useState } from "react";

const Simulation = () => {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  
  return (
    <Layout
      title="Traffic Simulation"
      subtitle="Test scenarios and simulate traffic patterns"
    >
      <div className="p-6 space-y-6">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Simulation Scenario</CardTitle>
                <CardDescription>
                  Test different traffic scenarios and see their impact
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                  {/* Simplified placeholder for simulation visualization */}
                  <div className="w-full h-full relative">
                    {/* City grid */}
                    <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#6366f1" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                    
                    {/* Road network */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        {isSimulationRunning ? (
                          <div className="space-y-4">
                            <div className="text-xl font-bold text-primary">Simulation Running</div>
                            <div className="animate-pulse-slow text-sm text-muted-foreground">Processing traffic data...</div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="text-xl font-bold">Start Simulation</div>
                            <div className="text-sm text-muted-foreground">Configure settings and press Play</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Simulation control overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-background/80 backdrop-blur-sm border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button 
                          size="icon" 
                          variant={isSimulationRunning ? "destructive" : "default"}
                          onClick={() => setIsSimulationRunning(!isSimulationRunning)}
                        >
                          {isSimulationRunning ? 
                            <PauseCircle className="h-5 w-5" /> : 
                            <PlayCircle className="h-5 w-5" />
                          }
                        </Button>
                        <Button size="icon" variant="outline" disabled={!isSimulationRunning}>
                          <SkipForward className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="outline">
                          <RotateCcw className="h-5 w-5" />
                        </Button>
                        <Separator orientation="vertical" className="mx-2 h-6" />
                        <div className="flex items-center gap-2">
                          <Label htmlFor="sim-speed" className="text-xs">Speed: {simulationSpeed}x</Label>
                          <Slider 
                            id="sim-speed"
                            className="w-24"
                            defaultValue={[1]}
                            min={0.5}
                            max={4}
                            step={0.5}
                            value={[simulationSpeed]}
                            onValueChange={(val) => setSimulationSpeed(val[0])}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Save className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between py-3">
                <div className="text-sm">
                  {isSimulationRunning ? 
                    <span className="text-primary">Simulation active: 00:02:34</span> : 
                    <span className="text-muted-foreground">Simulation ready</span>
                  }
                </div>
                <Select defaultValue="downtown">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown">Downtown Core</SelectItem>
                    <SelectItem value="highway">Highway Network</SelectItem>
                    <SelectItem value="residential">Residential Area</SelectItem>
                    <SelectItem value="industrial">Industrial Zone</SelectItem>
                  </SelectContent>
                </Select>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Simulation Results</CardTitle>
                <CardDescription>Key metrics and data points from simulation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Traffic Flow Rate</p>
                    <p className="text-lg font-medium">1,856 veh/hr</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Average Speed</p>
                    <p className="text-lg font-medium">28.3 mph</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Intersection Delay</p>
                    <p className="text-lg font-medium">36.5 sec</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Congestion Level</p>
                    <p className="text-lg font-medium">47%</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Traffic Efficiency</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Overall Flow Efficiency</span>
                        <span className="font-medium">64%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "64%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Signal Timing Efficiency</span>
                        <span className="font-medium">72%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Route Optimization</span>
                        <span className="font-medium">58%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Environmental Impact</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>CO2 Emissions</span>
                        <span className="font-medium">-12%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Noise Pollution</span>
                        <span className="font-medium">-8%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Fuel Consumption</span>
                        <span className="font-medium">-15%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scenario Options</CardTitle>
                <CardDescription>Configure simulation parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Scenario Type</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start h-auto py-2">
                      <div className="flex flex-col items-start">
                        <span className="text-xs font-normal">Standard</span>
                        <span className="text-sm font-medium">Normal Flow</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-2 bg-primary/10 border-primary/20">
                      <div className="flex flex-col items-start">
                        <span className="text-xs font-normal">Incident</span>
                        <span className="text-sm font-medium">Accident</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-2">
                      <div className="flex flex-col items-start">
                        <span className="text-xs font-normal">Scheduled</span>
                        <span className="text-sm font-medium">Construction</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-2">
                      <div className="flex flex-col items-start">
                        <span className="text-xs font-normal">Special</span>
                        <span className="text-sm font-medium">Event</span>
                      </div>
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Traffic Conditions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label htmlFor="volume" className="text-sm">Traffic Volume</Label>
                      <span className="text-xs text-muted-foreground">75%</span>
                    </div>
                    <Slider id="volume" defaultValue={[75]} />
                    
                    <div className="flex justify-between">
                      <Label htmlFor="density" className="text-sm">Vehicle Density</Label>
                      <span className="text-xs text-muted-foreground">60%</span>
                    </div>
                    <Slider id="density" defaultValue={[60]} />
                    
                    <div className="flex justify-between">
                      <Label htmlFor="transit" className="text-sm">Public Transit</Label>
                      <span className="text-xs text-muted-foreground">40%</span>
                    </div>
                    <Slider id="transit" defaultValue={[40]} />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Incident Parameters</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="multiple-lanes" className="text-sm">Multiple Lanes Blocked</Label>
                      <Switch id="multiple-lanes" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="emergency" className="text-sm">Emergency Response</Label>
                      <Switch id="emergency" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="reroute" className="text-sm">Dynamic Rerouting</Label>
                      <Switch id="reroute" defaultChecked />
                    </div>
                    
                    <div className="flex justify-between">
                      <Label htmlFor="duration" className="text-sm">Incident Duration</Label>
                      <span className="text-xs text-muted-foreground">45 min</span>
                    </div>
                    <Slider id="duration" defaultValue={[45]} min={10} max={120} step={5} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Scenario Settings</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Saved Scenarios</CardTitle>
                <CardDescription>Previously configured simulations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-between">
                  <span>Rush Hour - Downtown</span>
                  <PlayCircle className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Major Accident - Highway</span>
                  <PlayCircle className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Stadium Event</span>
                  <PlayCircle className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Severe Weather</span>
                  <PlayCircle className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Simulation;
