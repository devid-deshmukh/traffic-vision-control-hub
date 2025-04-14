
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, AlertCircle, Gauge, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function TrafficControlPanel() {
  const [trafficLightMode, setTrafficLightMode] = useState<"auto" | "manual">("auto");
  const [congestionResponse, setCongestionResponse] = useState<"low" | "medium" | "high">("medium");
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gauge className="h-5 w-5 text-primary" />
          Traffic Control Center
        </CardTitle>
        <CardDescription>
          Monitor and optimize traffic flow in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <Tabs defaultValue="signals" className="space-y-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="signals">Traffic Signals</TabsTrigger>
            <TabsTrigger value="response">Response Actions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signals" className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  Signal Control Mode
                </Label>
                <div className="flex items-center gap-2">
                  <span className={`text-xs ${trafficLightMode === "auto" ? "text-primary" : "text-muted-foreground"}`}>Auto</span>
                  <Switch 
                    checked={trafficLightMode === "manual"} 
                    onCheckedChange={(checked) => setTrafficLightMode(checked ? "manual" : "auto")}
                  />
                  <span className={`text-xs ${trafficLightMode === "manual" ? "text-primary" : "text-muted-foreground"}`}>Manual</span>
                </div>
              </div>
              
              <Card className="border border-border/40">
                <CardContent className="p-3 space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="downtown-timing" className="text-xs flex items-center justify-between">
                      Downtown Corridor Timing
                      <span className="text-primary text-xs font-mono">45s</span>
                    </Label>
                    <Slider 
                      id="downtown-timing" 
                      defaultValue={[45]} 
                      max={120} 
                      step={5} 
                      disabled={trafficLightMode === "auto"}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="highway-timing" className="text-xs flex items-center justify-between">
                      Highway Exit Timing
                      <span className="text-primary text-xs font-mono">30s</span>
                    </Label>
                    <Slider 
                      id="highway-timing" 
                      defaultValue={[30]} 
                      max={120} 
                      step={5} 
                      disabled={trafficLightMode === "auto"}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="residential-timing" className="text-xs flex items-center justify-between">
                      Residential Area Timing
                      <span className="text-primary text-xs font-mono">60s</span>
                    </Label>
                    <Slider 
                      id="residential-timing" 
                      defaultValue={[60]} 
                      max={120} 
                      step={5} 
                      disabled={trafficLightMode === "auto"}
                    />
                  </div>
                </CardContent>
                
                <CardFooter className="px-3 py-2 border-t border-border/40 flex justify-between">
                  <Button size="sm" variant="outline" className="gap-1" disabled={trafficLightMode === "auto"}>
                    <RefreshCw className="h-3.5 w-3.5" />
                    Reset
                  </Button>
                  <Button size="sm" disabled={trafficLightMode === "auto"}>Apply Changes</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">Traffic Flow Priority</Label>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-2 justify-start gap-2 border-green-500/20 hover:bg-green-500/10">
                  <div className="h-3 w-3 rounded-full bg-traffic-green"></div>
                  North-South
                </Button>
                <Button variant="outline" className="h-auto py-2 justify-start gap-2 border-primary/20 bg-primary/5 hover:bg-primary/10">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  East-West
                </Button>
                <Button variant="outline" className="h-auto py-2 justify-start gap-2 border-yellow-500/20 hover:bg-yellow-500/10">
                  <div className="h-3 w-3 rounded-full bg-traffic-yellow"></div>
                  Public Transit
                </Button>
                <Button variant="outline" className="h-auto py-2 justify-start gap-2 border-red-500/20 hover:bg-red-500/10">
                  <div className="h-3 w-3 rounded-full bg-traffic-red"></div>
                  Emergency Routes
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="response" className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                Congestion Response Level
              </Label>
              
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant={congestionResponse === "low" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setCongestionResponse("low")}
                  className={congestionResponse === "low" ? "" : "border-green-500/20 text-green-500 hover:text-green-500 hover:bg-green-500/10"}
                >
                  Low
                </Button>
                <Button 
                  variant={congestionResponse === "medium" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setCongestionResponse("medium")}
                  className={congestionResponse === "medium" ? "" : "border-yellow-500/20 text-yellow-500 hover:text-yellow-500 hover:bg-yellow-500/10"}
                >
                  Medium
                </Button>
                <Button 
                  variant={congestionResponse === "high" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setCongestionResponse("high")}
                  className={congestionResponse === "high" ? "" : "border-red-500/20 text-red-500 hover:text-red-500 hover:bg-red-500/10"}
                >
                  High
                </Button>
              </div>
            </div>
            
            <Card className="border border-border/40">
              <CardHeader className="p-3 pb-2">
                <CardTitle className="text-sm">Response Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0 space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="reroute" className="text-xs flex items-center gap-1.5">
                    Activate Detour Routes
                  </Label>
                  <Switch id="reroute" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="emergency" className="text-xs flex items-center gap-1.5">
                    Emergency Vehicle Priority
                  </Label>
                  <Switch id="emergency" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="variable" className="text-xs flex items-center gap-1.5">
                    Variable Speed Limits
                  </Label>
                  <Switch id="variable" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="messaging" className="text-xs flex items-center gap-1.5">
                    Dynamic Message Signs
                  </Label>
                  <Switch id="messaging" defaultChecked />
                </div>
              </CardContent>
              
              <CardFooter className="px-3 py-2 border-t border-border/40">
                <Button size="sm" className="w-full">Deploy Response Plan</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
