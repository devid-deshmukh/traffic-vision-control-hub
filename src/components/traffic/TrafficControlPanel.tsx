import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import {
  Activity,
  AlertTriangle,
  BarChart4,
  Clock,
  Pause,
  Play,
  RefreshCcw,
  Settings,
  Wand2,
} from "lucide-react";

export function TrafficControlPanel() {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [optimizationLevel, setOptimizationLevel] = useState(70);
  const [autonomousMode, setAutonomousMode] = useState(false);
  const [emergencyOverride, setEmergencyOverride] = useState(false);

  const handleSimulationToggle = () => {
    setIsSimulationRunning(!isSimulationRunning);
    toast(
      !isSimulationRunning
        ? "Traffic simulation started"
        : "Traffic simulation paused",
      {
        description: !isSimulationRunning
          ? "Real-time data streaming activated"
          : "Simulation state preserved",
      }
    );
  };

  const handleResetSimulation = () => {
    setIsSimulationRunning(false);
    setSimulationSpeed(1);
    toast("Simulation reset", {
      description: "All parameters restored to default values",
    });
  };

  const handleAutonomousToggle = () => {
    setAutonomousMode(!autonomousMode);
    toast(
      !autonomousMode
        ? "AI Traffic Management activated"
        : "Manual control mode activated",
      {
        description: !autonomousMode
          ? "System will automatically optimize traffic flow"
          : "Manual control enabled for traffic signals",
      }
    );
  };

  const handleEmergencyToggle = () => {
    setEmergencyOverride(!emergencyOverride);
    toast(
      !emergencyOverride
        ? "Emergency protocol activated"
        : "Normal operations resumed",
      {
        description: !emergencyOverride
          ? "All signals prioritizing emergency vehicle routes"
          : "Standard traffic patterns restored",
      }
    );
  };

  const handleOptimizeTraffic = () => {
    toast("Traffic optimization in progress", {
      description: "AI analyzing patterns and adjusting signal timings",
    });
  };

  return (
    <Card className="h-full overflow-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Traffic Control Center
          </span>
          <Badge
            variant={isSimulationRunning ? "default" : "secondary"}
            className="ml-2"
          >
            {isSimulationRunning ? "ACTIVE" : "STANDBY"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium flex items-center gap-1.5">
              <Activity className="h-4 w-4" /> Simulation Control
            </h3>
            <Button
              size="sm"
              variant="outline"
              onClick={handleResetSimulation}
            >
              <RefreshCcw className="mr-1 h-3.5 w-3.5" />
              Reset
            </Button>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Button
              onClick={handleSimulationToggle}
              variant={isSimulationRunning ? "default" : "secondary"}
              className="w-full"
            >
              {isSimulationRunning ? (
                <>
                  <Pause className="mr-1.5 h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-1.5 h-4 w-4" /> Start
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> Simulation Speed
          </h3>
          <div className="flex items-center gap-2">
            <Slider
              value={[simulationSpeed]}
              min={0.5}
              max={5}
              step={0.5}
              onValueChange={(values) => setSimulationSpeed(values[0])}
              disabled={!isSimulationRunning}
            />
            <span className="w-10 text-sm font-medium">
              {simulationSpeed}x
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium flex items-center gap-1.5">
            <BarChart4 className="h-4 w-4" /> Traffic Optimization
          </h3>
          <div className="grid gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Level</span>
                <span className="text-sm font-medium">{optimizationLevel}%</span>
              </div>
              <Slider
                value={[optimizationLevel]}
                min={0}
                max={100}
                step={5}
                onValueChange={(values) => setOptimizationLevel(values[0])}
              />
            </div>
            <Button onClick={handleOptimizeTraffic} className="w-full">
              <Wand2 className="mr-1.5 h-4 w-4" /> Optimize Now
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium">System Controls</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  checked={autonomousMode}
                  onCheckedChange={handleAutonomousToggle}
                />
                <span className="text-sm">AI Autonomous Control</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  checked={emergencyOverride}
                  onCheckedChange={handleEmergencyToggle}
                />
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-sm">Emergency Override</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
