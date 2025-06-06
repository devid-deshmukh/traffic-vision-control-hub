
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Bell, 
  Search, 
  Calendar, 
  Sun, 
  Moon, 
  User 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const [date] = useState(new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, title: "Traffic Accident", message: "Major accident reported on Highway 101", time: "2 min ago" },
    { id: 2, title: "Congestion Alert", message: "Heavy congestion detected in Downtown area", time: "15 min ago" },
    { id: 3, title: "System Update", message: "New traffic analysis features available", time: "1 hour ago" }
  ]);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    toast({
      title: `${theme === 'light' ? 'Dark' : 'Light'} mode enabled`,
      description: `The interface has been switched to ${theme === 'light' ? 'dark' : 'light'} mode.`,
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="lg:hidden" />
        <div>
          <h1 className="text-xl font-semibold leading-none tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search traffic data..." 
            className="pl-9 w-[200px] lg:w-[300px] rounded-full bg-secondary"
          />
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{date}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative" onClick={handleNotificationClick}>
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
              {notifications.length}
            </span>
          </Button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-card rounded-md shadow-lg border border-border/40 z-50 overflow-hidden">
              <div className="p-3 border-b border-border/40">
                <h3 className="font-medium">Notifications</h3>
              </div>
              <div className="max-h-[350px] overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id} className="p-3 border-b border-border/40 hover:bg-muted/50 cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                  </div>
                ))}
              </div>
              <div className="p-2 flex justify-center border-t border-border/40">
                <Button variant="ghost" size="sm" className="w-full">View All Notifications</Button>
              </div>
            </div>
          )}
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleThemeToggle}
          className="hover:bg-muted"
        >
          {theme === "light" ? 
            <Moon className="h-5 w-5 text-foreground" /> : 
            <Sun className="h-5 w-5 text-foreground" />
          }
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <User className="h-5 w-5" />
              {user && (
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary"></span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              {user ? `${user.name} (${user.email})` : 'My Account'}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/settings")}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")}>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
