
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StatCard from "@/components/dashboard/StatCard";
import TrafficStatusChart from "@/components/dashboard/TrafficStatusChart";
import IncidentsList from "@/components/traffic/IncidentsList";
import AITrafficPredictions from "@/components/traffic/AITrafficPredictions";
import { 
  Car, 
  BarChart3, 
  Gauge, 
  Clock, 
  AlertTriangle,
  ChevronRight,
  ArrowUpRight,
  BellRing,
  MessageSquare,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <Layout
      title="Traffic Control Dashboard"
      subtitle="Real-time traffic monitoring and management"
    >
      <div className="p-6 space-y-6">
        {/* Overview Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Average Traffic Flow"
            value="32 mph"
            icon={<Gauge className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 12, isPositive: false }}
            description="Average vehicle speed across monitored roads"
          />
          
          <StatCard
            title="Total Vehicles"
            value="142,587"
            icon={<Car className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 3, isPositive: true }}
            description="Vehicles tracked in the last 24 hours"
          />
          
          <StatCard
            title="Average Wait Time"
            value="4.2 min"
            icon={<Clock className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 8, isPositive: false }}
            description="Average time at traffic intersections"
          />
          
          <StatCard
            title="Active Incidents"
            value="12"
            icon={<AlertTriangle className="h-4 w-4 text-destructive" />}
            trend={{ value: 2, isPositive: false }}
            description="Current accidents, construction, closures"
          />
        </div>
        
        {/* Current Status */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <Card className="col-span-1 lg:col-span-2 p-4 border border-border/40">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Traffic Overview
                </h2>
                <p className="text-sm text-muted-foreground">
                  Real-time traffic conditions across the city
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-traffic-green/20 text-traffic-green border-traffic-green/50">
                  Normal Flow
                </Badge>
                <Badge variant="outline" className="bg-traffic-yellow/20 text-traffic-yellow border-traffic-yellow/50">
                  Moderate
                </Badge>
                <Badge variant="outline" className="bg-traffic-red/20 text-traffic-red border-traffic-red/50">
                  Congested
                </Badge>
              </div>
            </div>
            
            <div className="h-[350px]">
              <TrafficStatusChart />
            </div>
          </Card>
          
          <div className="space-y-6">
            <StatCard
              title="System Status"
              value="Operational"
              icon={<ArrowUpRight className="h-4 w-4 text-traffic-green" />}
              className="border-traffic-green/20 bg-traffic-green/5"
              footer={
                <Button variant="link" size="sm" className="w-full justify-between">
                  <span>View System Health</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              }
            />
            
            <Card className="p-4 border border-primary/20 bg-primary/5">
              <h3 className="font-medium mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button className="h-auto py-2 flex flex-col items-center gap-1" size="sm">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-xs">Report Incident</span>
                </Button>
                <Button className="h-auto py-2 flex flex-col items-center gap-1" size="sm" variant="secondary">
                  <BellRing className="h-4 w-4" />
                  <span className="text-xs">Send Alert</span>
                </Button>
                <Button className="h-auto py-2 flex flex-col items-center gap-1" size="sm" variant="secondary">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs">Team Chat</span>
                </Button>
                <Button className="h-auto py-2 flex flex-col items-center gap-1" size="sm" variant="secondary">
                  <Users className="h-4 w-4" />
                  <span className="text-xs">Dispatch Team</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Detailed Information */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <IncidentsList />
          <AITrafficPredictions />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
