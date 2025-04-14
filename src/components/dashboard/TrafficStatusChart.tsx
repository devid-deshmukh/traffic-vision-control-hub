
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data - in a real app this would come from an API
const data = [
  { time: '00:00', congestion: 15, incidents: 1, speed: 55 },
  { time: '03:00', congestion: 10, incidents: 0, speed: 60 },
  { time: '06:00', congestion: 35, incidents: 2, speed: 45 },
  { time: '09:00', congestion: 85, incidents: 5, speed: 20 },
  { time: '12:00', congestion: 60, incidents: 3, speed: 30 },
  { time: '15:00', congestion: 70, incidents: 4, speed: 25 },
  { time: '18:00', congestion: 90, incidents: 6, speed: 15 },
  { time: '21:00', congestion: 40, incidents: 2, speed: 40 },
  { time: 'Now', congestion: 30, incidents: 1, speed: 50 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 rounded-md border border-border shadow-lg">
        <p className="font-medium">{`Time: ${label}`}</p>
        <p className="text-sm text-traffic-yellow">{`Congestion: ${payload[0].value}%`}</p>
        <p className="text-sm text-traffic-red">{`Incidents: ${payload[1].value}`}</p>
        <p className="text-sm text-traffic-blue">{`Avg Speed: ${payload[2].value} mph`}</p>
      </div>
    );
  }
  return null;
};

export default function TrafficStatusChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Traffic Overview</CardTitle>
        <CardDescription>24-hour traffic activity summary</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorCongestion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" tick={{ fill: '#9ca3af' }} />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="congestion" 
                name="Congestion %" 
                stroke="#f59e0b" 
                fillOpacity={1}
                fill="url(#colorCongestion)" 
              />
              <Area 
                type="monotone" 
                dataKey="incidents" 
                name="Incidents" 
                stroke="#ef4444" 
                fillOpacity={1}
                fill="url(#colorIncidents)" 
              />
              <Area 
                type="monotone" 
                dataKey="speed" 
                name="Avg Speed (mph)" 
                stroke="#0ea5e9" 
                fillOpacity={1}
                fill="url(#colorSpeed)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
