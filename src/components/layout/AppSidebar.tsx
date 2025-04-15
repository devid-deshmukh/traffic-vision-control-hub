
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Compass,
  Gauge,
  Settings,
  LayoutDashboard,
  Map,
  LogOut,
  BellRing,
  MessageSquare,
  AlertTriangle,
  PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [alerts, setAlerts] = useState(3);
  
  const navigationItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "3D Map View",
      path: "/map",
      icon: Map,
    },
    {
      title: "Traffic Simulation",
      path: "/simulation",
      icon: PlayCircle,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const handleAlertsClick = () => {
    if (alerts > 0) {
      setAlerts(0);
      toast({
        title: "Alerts cleared",
        description: "All notifications have been marked as read",
      });
    } else {
      toast({
        title: "No new alerts",
        description: "You're all caught up!",
      });
    }
  };

  const handleAlertClick = () => {
    navigate("/map");
    toast({
      title: "Incident located",
      description: "The map has been centered on the incident location",
    });
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out",
      description: "You have been logged out of your account.",
    });
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight">TrafficVision</h1>
        </div>
        <SidebarTrigger className="absolute right-2 top-4 lg:hidden" />
      </SidebarHeader>
      
      <SidebarContent>
        <div className="px-4 py-2">
          <div className="flex items-center gap-4 mb-6">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">TA</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Traffic Admin</p>
              <p className="text-xs text-muted-foreground">City Operations</p>
            </div>
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild 
                    className={cn(
                      location.pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : "transparent",
                      "transition-colors hover:bg-sidebar-accent/50"
                    )}
                  >
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="transition-colors hover:bg-sidebar-accent/50 group" onClick={handleAlertClick}>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive group-hover:text-destructive" />
                    <span>Incidents</span>
                    <Badge variant="destructive" className="ml-auto">2</Badge>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="transition-colors hover:bg-sidebar-accent/50 group" onClick={handleAlertsClick}>
                  <div className="flex items-center gap-3">
                    <BellRing className="h-5 w-5 text-primary group-hover:text-primary" />
                    <span>Notifications</span>
                    <Badge variant="default" className="ml-auto">{alerts}</Badge>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="transition-colors hover:bg-sidebar-accent/50">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <span>Team Chat</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-border/50 p-4">
        <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={handleSignOut}>
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
