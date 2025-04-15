
import Layout from "@/components/layout/Layout";
import CityMap from "@/components/map/CityMap";
import { TrafficControlPanel } from "@/components/traffic/TrafficControlPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

const MapView = () => {
  const { theme } = useTheme();
  const [mapMode, setMapMode] = useState<"2d" | "3d">("3d");
  
  const handleMapModeChange = (mode: "2d" | "3d") => {
    setMapMode(mode);
  };
  
  return (
    <Layout
      title="3D Interactive Map"
      subtitle="Visualize and control traffic in real-time"
    >
      <div className="h-[calc(100vh-4rem)]">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={70} minSize={50}>
            <div className="h-full p-6">
              <CityMap />
            </div>
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={40} minSize={5}>
            <Tabs defaultValue="control" className="h-full">
              <div className="flex justify-between items-center border-b px-4 py-2">
                <h2 className="flex items-center gap-2 font-medium">
                  <MapPin className="h-4 w-4 text-primary" />
                  Map Controls
                </h2>
                <TabsList>
                  <TabsTrigger value="control">Control</TabsTrigger>
                  <TabsTrigger value="legend">Legend</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="control" className="p-6 h-[calc(100%-53px)] overflow-auto m-0">
                <TrafficControlPanel />
              </TabsContent>
              
              <TabsContent value="legend" className="p-6 h-[calc(100%-53px)] overflow-auto m-0">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-medium">Traffic Flow</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-8 bg-traffic-green rounded-full"></div>
                        <span className="text-sm">Free Flow (35+ mph)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-8 bg-traffic-yellow rounded-full"></div>
                        <span className="text-sm">Moderate (15-35 mph)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-8 bg-traffic-red rounded-full"></div>
                        <span className="text-sm">Congested (0-15 mph)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Incidents</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full flex items-center justify-center bg-red-500">
                          <span className="text-xs text-white">!</span>
                        </div>
                        <span className="text-sm">Accident</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full flex items-center justify-center bg-yellow-500">
                          <span className="text-xs text-white">C</span>
                        </div>
                        <span className="text-sm">Construction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full flex items-center justify-center bg-blue-500">
                          <span className="text-xs text-white">P</span>
                        </div>
                        <span className="text-sm">Police Activity</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full flex items-center justify-center bg-purple-500">
                          <span className="text-xs text-white">E</span>
                        </div>
                        <span className="text-sm">Event</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Infrastructure</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="h-4 w-4 border-2 border-green-500 rounded-sm"></div>
                        <span className="text-sm">Traffic Signal (normal)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-4 w-4 border-2 border-yellow-500 rounded-sm"></div>
                        <span className="text-sm">Traffic Signal (caution)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-4 w-4 border-2 border-red-500 rounded-sm"></div>
                        <span className="text-sm">Traffic Signal (emergency)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-4 w-4 border-2 border-blue-500 rounded-sm"></div>
                        <span className="text-sm">Traffic Camera</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </Layout>
  );
};

export default MapView;
