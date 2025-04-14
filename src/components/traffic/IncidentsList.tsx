
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  Car,
  Hardhat,
  Clock,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Incident {
  id: string;
  type: "accident" | "construction" | "closure" | "congestion";
  location: string;
  time: string;
  severity: "low" | "medium" | "high";
  status: "active" | "cleared" | "pending";
}

const incidents: Incident[] = [
  {
    id: "inc-001",
    type: "accident",
    location: "Main St & 5th Ave",
    time: "10 mins ago",
    severity: "high",
    status: "active",
  },
  {
    id: "inc-002",
    type: "construction",
    location: "Highway 101, Mile 24",
    time: "2 hours ago",
    severity: "medium",
    status: "active",
  },
  {
    id: "inc-003",
    type: "closure",
    location: "Bridge St",
    time: "1 hour ago",
    severity: "high",
    status: "active",
  },
  {
    id: "inc-004",
    type: "accident",
    location: "Central Ave & Park Rd",
    time: "30 mins ago",
    severity: "low",
    status: "cleared",
  },
  {
    id: "inc-005",
    type: "congestion",
    location: "Downtown Exit 4",
    time: "45 mins ago",
    severity: "medium",
    status: "active",
  },
];

export default function IncidentsList() {
  const getIncidentIcon = (type: Incident["type"]) => {
    switch (type) {
      case "accident":
        return <Car className="h-4 w-4" />;
      case "construction":
        return <Hardhat className="h-4 w-4" />;
      case "closure":
        return <AlertTriangle className="h-4 w-4" />;
      case "congestion":
        return <Clock className="h-4 w-4" />;
    }
  };

  const getSeverityColor = (severity: Incident["severity"]) => {
    switch (severity) {
      case "low":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/50";
      case "medium":
        return "bg-orange-500/20 text-orange-500 border-orange-500/50";
      case "high":
        return "bg-red-500/20 text-red-500 border-red-500/50";
    }
  };

  const getStatusColor = (status: Incident["status"]) => {
    switch (status) {
      case "active":
        return "bg-red-500/20 text-red-500 border-red-500/50";
      case "cleared":
        return "bg-green-500/20 text-green-500 border-green-500/50";
      case "pending":
        return "bg-blue-500/20 text-blue-500 border-blue-500/50";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Active Incidents
            </CardTitle>
            <CardDescription>
              Real-time traffic incidents across the city
            </CardDescription>
          </div>
          <Button size="sm" variant="outline" className="gap-1">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className={cn(
                "border rounded-md p-3 transition-all",
                incident.status === "cleared"
                  ? "border-green-500/20 bg-green-500/5"
                  : "border-destructive/20 bg-destructive/5"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "p-1.5 rounded-full",
                      incident.status === "cleared"
                        ? "bg-green-500/20"
                        : "bg-destructive/20"
                    )}
                  >
                    {getIncidentIcon(incident.type)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      {incident.type.charAt(0).toUpperCase() +
                        incident.type.slice(1)}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {incident.time}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge
                    variant="outline"
                    className={cn("text-xs", getSeverityColor(incident.severity))}
                  >
                    {incident.severity}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={cn("text-xs", getStatusColor(incident.status))}
                  >
                    {incident.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="h-3.5 w-3.5" />
                {incident.location}
              </div>
              <div className="flex justify-between gap-2">
                <Button variant="secondary" size="sm" className="w-full">
                  Manage
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
