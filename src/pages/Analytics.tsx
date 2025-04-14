
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Calendar, BarChart3, LineChart, PieChart, Share2 } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for charts
const trafficVolumeData = [
  { name: 'Mon', downtown: 4000, residential: 2400, highway: 8000 },
  { name: 'Tue', downtown: 5000, residential: 2200, highway: 9800 },
  { name: 'Wed', downtown: 6000, residential: 2600, highway: 10000 },
  { name: 'Thu', downtown: 5500, residential: 3000, highway: 9500 },
  { name: 'Fri', downtown: 7000, residential: 3400, highway: 12000 },
  { name: 'Sat', downtown: 5000, residential: 4000, highway: 8000 },
  { name: 'Sun', downtown: 4000, residential: 4200, highway: 6500 },
];

const congestionData = [
  { time: '6am', level: 20 },
  { time: '8am', level: 85 },
  { time: '10am', level: 45 },
  { time: '12pm', level: 50 },
  { time: '2pm', level: 40 },
  { time: '4pm', level: 70 },
  { time: '6pm', level: 90 },
  { time: '8pm', level: 60 },
  { time: '10pm', level: 30 },
];

const incidentData = [
  { name: 'Accidents', value: 42, color: '#ef4444' },
  { name: 'Construction', value: 23, color: '#f59e0b' },
  { name: 'Weather Events', value: 15, color: '#3b82f6' },
  { name: 'Vehicle Breakdown', value: 18, color: '#8b5cf6' },
  { name: 'Other', value: 12, color: '#6b7280' },
];

const Analytics = () => {
  return (
    <Layout
      title="Traffic Analytics"
      subtitle="Analyze traffic patterns and identify trends"
    >
      <div className="p-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Card className="sm:w-80">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Date Range</CardTitle>
              <CardDescription>Select analysis period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex-1 gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Last 7 Days</span>
                </Button>
                <Select defaultValue="week">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="quarter">Quarter</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Key Metrics Summary</CardTitle>
              <CardDescription>Week-over-week performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="p-2">
                  <p className="text-muted-foreground text-xs">Avg Travel Time</p>
                  <p className="text-2xl font-bold">18.4 min</p>
                  <p className="text-xs text-green-500">↓ 12% from last week</p>
                </div>
                <div className="p-2">
                  <p className="text-muted-foreground text-xs">Total Incidents</p>
                  <p className="text-2xl font-bold">87</p>
                  <p className="text-xs text-red-500">↑ 8% from last week</p>
                </div>
                <div className="p-2">
                  <p className="text-muted-foreground text-xs">Traffic Volume</p>
                  <p className="text-2xl font-bold">876K</p>
                  <p className="text-xs text-green-500">↑ 3% from last week</p>
                </div>
                <div className="p-2">
                  <p className="text-muted-foreground text-xs">Avg Speed</p>
                  <p className="text-2xl font-bold">27 mph</p>
                  <p className="text-xs text-green-500">↑ 5% from last week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  Traffic Volume by Area
                </CardTitle>
                <CardDescription>Weekly traffic count by city area</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={trafficVolumeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
                    <YAxis tick={{ fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        borderColor: 'rgba(107, 114, 128, 0.3)',
                        color: '#f3f4f6'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="downtown" name="Downtown" fill="#8b5cf6" />
                    <Bar dataKey="residential" name="Residential" fill="#0ea5e9" />
                    <Bar dataKey="highway" name="Highway" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-primary" />
                  Daily Congestion Patterns
                </CardTitle>
                <CardDescription>Hourly traffic congestion levels</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={congestionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="colorCongestion" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" tick={{ fill: '#9ca3af' }} />
                    <YAxis tick={{ fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        borderColor: 'rgba(107, 114, 128, 0.3)',
                        color: '#f3f4f6'
                      }} 
                      formatter={(value) => [`${value}%`, 'Congestion']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="level" 
                      stroke="#ef4444" 
                      fillOpacity={1}
                      fill="url(#colorCongestion)" 
                      name="Congestion Level"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <Tabs defaultValue="hour">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Detailed Traffic Analysis</CardTitle>
                  <TabsList>
                    <TabsTrigger value="hour">Hourly</TabsTrigger>
                    <TabsTrigger value="day">Daily</TabsTrigger>
                    <TabsTrigger value="week">Weekly</TabsTrigger>
                  </TabsList>
                </div>
                <CardDescription>Comprehensive traffic metrics over time</CardDescription>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={trafficVolumeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
                    <YAxis tick={{ fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        borderColor: 'rgba(107, 114, 128, 0.3)',
                        color: '#f3f4f6'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="downtown" name="Downtown" stroke="#8b5cf6" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="residential" name="Residential" stroke="#0ea5e9" />
                    <Line type="monotone" dataKey="highway" name="Highway" stroke="#22c55e" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <PieChart className="h-4 w-4 text-primary" />
                  Incident Breakdown
                </CardTitle>
                <CardDescription>Types of traffic incidents</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={incidentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {incidentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        borderColor: 'rgba(107, 114, 128, 0.3)',
                        color: '#f3f4f6'
                      }} 
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
                {incidentData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
