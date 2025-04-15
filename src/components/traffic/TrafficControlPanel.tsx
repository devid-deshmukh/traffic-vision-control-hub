
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, AlertCircle, Gauge, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function TrafficControlPanel() {
  const { toast } = useToast();
  const [trafficLightMode, setTrafficLightMode] = useState<"auto" | "manual">("auto");
  const [congestionResponse, setCongestionResponse] = useState<"low" | "medium" | "high">("medium");
  const [signalTiming, setSignalTiming] = useState({
    downtown: 45,
    highway: 30,
    residential: 60
  });
  const [trafficPriority, setTrafficPriority] = useState("north-south");
  const [responseActions, setResponseActions] = useState({
    reroute: false,
    emergency: true,
    variable: false,
    messaging: true
  });
  
  const handleModeChange = (checked: boolean) => {
    const newMode = checked ? "manual" : "auto";
    setTrafficLightMode(newMode);
    toast({
      title: `${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode activated`,
      description: `Traffic signals are now in ${newMode} control mode.`,
    });
  };

  const handleSignalTimingChange = (key: keyof typeof signalTiming, value: number[]) => {
    setSignalTiming(prev => ({ ...prev, [key]: value[0] }));
  };

  const handleResetTiming = () => {
    setSignalTiming({
      downtown: 45,
      highway: 30,
      residential: 60
    });
    toast({
      title: "Signal timing reset",
      description: "Traffic signal timing has been reset to default values.",
    });
  };

  const handleApplyChanges = () => {
    toast({
      title: "Changes applied",
      description: "Traffic signal timing changes have been applied to the network.",
    });
  };

  const handlePriorityChange = (priority: string) => {
    setTrafficPriority(priority);
    toast({
      title: "Traffic priority changed",
      description: `Priority has been given to ${priority} traffic flow.`,
    });
  };

  const handleResponseLevelChange = (level: "low" | "medium" | "high") => {
    setCongestionResponse(level);
    toast({
      title: "Response level updated",
      description: `Traffic response level set to ${level}.`,
    });
  };

  const handleActionToggle = (action: keyof typeof responseActions) => {
    setResponseActions(prev => {
      const newValue = !prev[action];
      toast({
        title: newValue ? `${action.charAt(0).toUpperCase() + action.slice(1)} activated` : `${action.charAt(0).toUpperCase() + action.slice(1)} deactivated`,
        description: newValue ? `${action} response has been enabled.` : `${action} response has been disabled.`,
      });
      return { ...prev, [action]: newValue };
    });
  };

  const deployResponsePlan = () => {
    toast({
      title: "Response plan deployed",
      description: "Traffic management plan has been deployed to all affected areas.",
      variant: "success"
    });
  };

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
                    onCheckedChange={handleModeChange}
                  />
                  <span className={`text-xs ${trafficLightMode === "manual" ? "text-primary" : "text-muted-foreground"}`}>Manual</span>
                </div>
              </div>
              
              <Card className="border border-border/40">
                <CardContent className="p-3 space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="downtown-timing" className="text-xs flex items-center justify-between">
                      Downtown Corridor Timing
                      <span className="text-primary text-xs font-mono">{signalTiming.downtown}s</span>
                    </Label>
                    <Slider 
                      id="downtown-timing" 
                      value={[signalTiming.downtown]} 
                      max={120} 
                      step={5} 
                      disabled={trafficLightMode === "auto"}
                      onValueChange={(value) => handleSignalTimingChange('downtown', value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="highway-timing" className="text-xs flex items-center justify-between">
                      Highway Exit Timing
                      <span className="text-primary text-xs font-mono">{signalTiming.highway}s</span>
                    </Label>
                    <Slider 
                      id="highway-timing" 
                      value={[signalTiming.highway]} 
                      max={120} 
                      step={5} 
                      disabled={trafficLightMode === "auto"}
                      onValueChange={(value) => handleSignalTimingChange('highway', value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="residential-timing" className="text-xs flex items-center justify-between">
                      Residential Area Timing
                      <span className="text-primary text-xs font-mono">{signalTiming.residential}s</span>
                    </Label>
                    <Slider 
                      id="residential-timing" 
                      value={[signalTiming.residential]} 
                      max={120} 
                      step={5} 
                      disabled={trafficLightMode === "auto"}
                      onValueChange={(value) => handleSignalTimingChange('residential', value)}
                    />
                  </div>
                </CardContent>
                
                <CardFooter className="px-3 py-2 border-t border-border/40 flex justify-between">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="gap-1" 
                    disabled={trafficLightMode === "auto"}
                    onClick={handleResetTiming}
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Reset
                  </Button>
                  <Button 
                    size="sm" 
                    disabled={trafficLightMode === "auto"}
                    onClick={handleApplyChanges}
                  >
                    Apply Changes
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">Traffic Flow Priority</Label>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className={`h-auto py-2 justify-start gap-2 ${trafficPriority === "north-south" ? "border-green-500/20 bg-green-500/10" : "border-green-500/20 hover:bg-green-500/10"}`}
                  onClick={() => handlePriorityChange("north-south")}
                >
                  <div className="h-3 w-3 rounded-full bg-traffic-green"></div>
                  North-South
                </Button>
                <Button 
                  variant="outline" 
                  className={`h-auto py-2 justify-start gap-2 ${trafficPriority === "east-west" ? "border-primary/20 bg-primary/10" : "border-primary/20 hover:bg-primary/10"}`}
                  onClick={() => handlePriorityChange("east-west")}
                >
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  East-West
                </Button>
                <Button 
                  variant="outline" 
                  className={`h-auto py-2 justify-start gap-2 ${trafficPriority === "transit" ? "border-yellow-500/20 bg-yellow-500/10" : "border-yellow-500/20 hover:bg-yellow-500/10"}`}
                  onClick={() => handlePriorityChange("transit")}
                >
                  <div className="h-3 w-3 rounded-full bg-traffic-yellow"></div>
                  Public Transit
                </Button>
                <Button 
                  variant="outline" 
                  className={`h-auto py-2 justify-start gap-2 ${trafficPriority === "emergency" ? "border-red-500/20 bg-red-500/10" : "border-red-500/20 hover:bg-red-500/10"}`}
                  onClick={() => handlePriorityChange("emergency")}
                >
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
                  onClick={() => handleResponseLevelChange("low")}
                  className={congestionResponse === "low" ? "" : "border-green-500/20 text-green-500 hover:text-green-500 hover:bg-green-500/10"}
                >
                  Low
                </Button>
                <Button 
                  variant={congestionResponse === "medium" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => handleResponseLevelChange("medium")}
                  className={congestionResponse === "medium" ? "" : "border-yellow-500/20 text-yellow-500 hover:text-yellow-500 hover:bg-yellow-500/10"}
                >
                  Medium
                </Button>
                <Button 
                  variant={congestionResponse === "high" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => handleResponseLevelChange("high")}
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
                  <Switch 
                    id="reroute" 
                    checked={responseActions.reroute}
                    onCheckedChange={() => handleActionToggle('reroute')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="emergency" className="text-xs flex items-center gap-1.5">
                    Emergency Vehicle Priority
                  </Label>
                  <Switch 
                    id="emergency" 
                    checked={responseActions.emergency}
                    onCheckedChange={() => handleActionToggle('emergency')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="variable" className="text-xs flex items-center gap-1.5">
                    Variable Speed Limits
                  </Label>
                  <Switch 
                    id="variable" 
                    checked={responseActions.variable}
                    onCheckedChange={() => handleActionToggle('variable')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="messaging" className="text-xs flex items-center gap-1.5">
                    Dynamic Message Signs
                  </Label>
                  <Switch 
                    id="messaging" 
                    checked={responseActions.messaging}
                    onCheckedChange={() => handleActionToggle('messaging')}
                  />
                </div>
              </CardContent>
              
              <CardFooter className="px-3 py-2 border-t border-border/40">
                <Button size="sm" className="w-full" onClick={deployResponsePlan}>Deploy Response Plan</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
