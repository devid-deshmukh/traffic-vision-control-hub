
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, User, Bell, Shield, MapPin, Layers, Activity, MessageSquare } from "lucide-react";

const Settings = () => {
  return (
    <Layout
      title="System Settings"
      subtitle="Configure your traffic management system"
    >
      <div className="p-6 space-y-6 max-w-5xl mx-auto">
        <Tabs defaultValue="general" className="space-y-6">
          <div className="bg-card border rounded-lg p-1">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">General</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Map Settings</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Security</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your account information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Traffic Controller" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="admin@traffic.gov" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="admin">
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="operator">Traffic Operator</SelectItem>
                        <SelectItem value="analyst">Traffic Analyst</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select defaultValue="operations">
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="operations">Traffic Operations</SelectItem>
                        <SelectItem value="planning">Traffic Planning</SelectItem>
                        <SelectItem value="emergency">Emergency Response</SelectItem>
                        <SelectItem value="it">IT Department</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="theme" className="cursor-pointer">Dark Mode</Label>
                      <Switch id="theme" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="timezone" className="cursor-pointer">Use 24-hour Format</Label>
                      <Switch id="timezone" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="metrics" className="cursor-pointer">Use Metric Units</Label>
                      <Switch id="metrics" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Profile Settings
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>System Language & Region</CardTitle>
                <CardDescription>
                  Configure localization settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="language">Interface Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select defaultValue="us">
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="eu">European Union</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Time Zone</Label>
                    <Select defaultValue="et">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt">Pacific Time (PT)</SelectItem>
                        <SelectItem value="mt">Mountain Time (MT)</SelectItem>
                        <SelectItem value="ct">Central Time (CT)</SelectItem>
                        <SelectItem value="et">Eastern Time (ET)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="mdy">
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Language Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Configure how you want to receive alerts and notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Alert Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="incidents" className="cursor-pointer">Traffic Incidents</Label>
                        <p className="text-xs text-muted-foreground">Accidents, construction, road closures</p>
                      </div>
                      <Switch id="incidents" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="congestion" className="cursor-pointer">Congestion Alerts</Label>
                        <p className="text-xs text-muted-foreground">Unexpected traffic congestion levels</p>
                      </div>
                      <Switch id="congestion" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="system" className="cursor-pointer">System Notifications</Label>
                        <p className="text-xs text-muted-foreground">Updates, maintenance, downtime</p>
                      </div>
                      <Switch id="system" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weather" className="cursor-pointer">Weather Alerts</Label>
                        <p className="text-xs text-muted-foreground">Severe weather impacting traffic</p>
                      </div>
                      <Switch id="weather" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="reports" className="cursor-pointer">Daily/Weekly Reports</Label>
                        <p className="text-xs text-muted-foreground">Traffic performance summaries</p>
                      </div>
                      <Switch id="reports" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Notification Channels</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications" className="cursor-pointer">Email Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive alerts via email</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-notifications" className="cursor-pointer">Push Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive alerts on your device</p>
                      </div>
                      <Switch id="push-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sms-notifications" className="cursor-pointer">SMS Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive text message alerts</p>
                      </div>
                      <Switch id="sms-notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="desktop-notifications" className="cursor-pointer">Desktop Notifications</Label>
                        <p className="text-xs text-muted-foreground">Show alerts on your desktop</p>
                      </div>
                      <Switch id="desktop-notifications" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Notification Schedule</h3>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Notification Urgency Level</Label>
                    <Select defaultValue="high">
                      <SelectTrigger id="urgency">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Notifications</SelectItem>
                        <SelectItem value="high">High Priority Only</SelectItem>
                        <SelectItem value="medium">Medium & High Priority</SelectItem>
                        <SelectItem value="custom">Custom Settings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiet-hours">Quiet Hours</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input id="start-time" type="time" defaultValue="22:00" />
                      <Input id="end-time" type="time" defaultValue="07:00" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Only high-priority alerts will be sent during quiet hours</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <Bell className="h-4 w-4" />
                  Save Notification Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="map" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Map Configuration</CardTitle>
                <CardDescription>
                  Customize the appearance and functionality of the traffic map
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Map Display</h3>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="mapStyle">Map Style</Label>
                      <Select defaultValue="dark">
                        <SelectTrigger id="mapStyle">
                          <SelectValue placeholder="Select map style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dark">Dark Mode</SelectItem>
                          <SelectItem value="light">Light Mode</SelectItem>
                          <SelectItem value="satellite">Satellite</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                          <SelectItem value="traffic">Traffic Focused</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="defaultView">Default View</Label>
                      <Select defaultValue="city">
                        <SelectTrigger id="defaultView">
                          <SelectValue placeholder="Select default view" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="city">City Overview</SelectItem>
                          <SelectItem value="downtown">Downtown</SelectItem>
                          <SelectItem value="highway">Highway Network</SelectItem>
                          <SelectItem value="custom">Custom Area</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="3d-buildings" className="cursor-pointer">3D Buildings</Label>
                        <p className="text-xs text-muted-foreground">Show buildings in 3D on the map</p>
                      </div>
                      <Switch id="3d-buildings" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="traffic-animation" className="cursor-pointer">Traffic Flow Animation</Label>
                        <p className="text-xs text-muted-foreground">Animate traffic flow on the map</p>
                      </div>
                      <Switch id="traffic-animation" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="labels" className="cursor-pointer">Road Labels</Label>
                        <p className="text-xs text-muted-foreground">Show street and highway names</p>
                      </div>
                      <Switch id="labels" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <Layers className="h-4 w-4 text-primary" />
                    Default Map Layers
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="traffic-layer" className="cursor-pointer">Traffic Density</Label>
                      <Switch id="traffic-layer" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="incidents-layer" className="cursor-pointer">Incidents</Label>
                      <Switch id="incidents-layer" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="cameras-layer" className="cursor-pointer">Traffic Cameras</Label>
                      <Switch id="cameras-layer" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="signals-layer" className="cursor-pointer">Traffic Signals</Label>
                      <Switch id="signals-layer" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="construction-layer" className="cursor-pointer">Construction</Label>
                      <Switch id="construction-layer" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="weather-layer" className="cursor-pointer">Weather</Label>
                      <Switch id="weather-layer" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="transit-layer" className="cursor-pointer">Public Transit</Label>
                      <Switch id="transit-layer" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <Activity className="h-4 w-4 text-primary" />
                    Performance Settings
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="high-performance" className="cursor-pointer">High Performance Mode</Label>
                        <p className="text-xs text-muted-foreground">Optimize for performance on slower devices</p>
                      </div>
                      <Switch id="high-performance" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-refresh" className="cursor-pointer">Auto-refresh Interval</Label>
                        <p className="text-xs text-muted-foreground">How often the map data updates</p>
                      </div>
                      <Select defaultValue="15">
                        <SelectTrigger id="auto-refresh" className="w-[120px]">
                          <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 seconds</SelectItem>
                          <SelectItem value="15">15 seconds</SelectItem>
                          <SelectItem value="30">30 seconds</SelectItem>
                          <SelectItem value="60">1 minute</SelectItem>
                          <SelectItem value="300">5 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <MapPin className="h-4 w-4" />
                  Save Map Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage security and access controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Password & Authentication</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">Change Password</Button>
                    <Button variant="outline" className="w-full justify-start">Setup Two-Factor Authentication</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Session Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-logout" className="cursor-pointer">Auto Logout</Label>
                        <p className="text-xs text-muted-foreground">Automatically log out after inactivity</p>
                      </div>
                      <Switch id="auto-logout" defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="session-timeout">Session Timeout</Label>
                      <Select defaultValue="30">
                        <SelectTrigger id="session-timeout">
                          <SelectValue placeholder="Select timeout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="120">2 hours</SelectItem>
                          <SelectItem value="240">4 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Collaboration Settings
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="device-history" className="cursor-pointer">Show Online Status</Label>
                      <Switch id="device-history" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-notification" className="cursor-pointer">Share Activity Status</Label>
                      <Switch id="login-notification" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="team-chat" className="cursor-pointer">Enable Team Chat</Label>
                      <Switch id="team-chat" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">System Access</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="api-access" className="cursor-pointer">API Access</Label>
                        <p className="text-xs text-muted-foreground">Allow third-party system integration</p>
                      </div>
                      <Switch id="api-access" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="remote-access" className="cursor-pointer">Remote System Access</Label>
                        <p className="text-xs text-muted-foreground">Allow system access from outside the local network</p>
                      </div>
                      <Switch id="remote-access" defaultChecked />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full justify-start">Manage API Keys</Button>
                  <Button variant="outline" className="w-full justify-start">View Access Logs</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2">
                  <Shield className="h-4 w-4" />
                  Save Security Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
