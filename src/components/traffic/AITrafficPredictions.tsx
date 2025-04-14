
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, AlertCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Prediction {
  location: string;
  currentStatus: "normal" | "moderate" | "congested";
  prediction: "improving" | "worsening" | "stable";
  confidence: number;
  timeframe: string;
}

const predictions: Prediction[] = [
  {
    location: "Downtown Core",
    currentStatus: "moderate",
    prediction: "worsening",
    confidence: 88,
    timeframe: "Next 30 min"
  },
  {
    location: "North Highway",
    currentStatus: "congested",
    prediction: "improving",
    confidence: 92,
    timeframe: "Next 45 min"
  },
  {
    location: "East Bridge",
    currentStatus: "normal",
    prediction: "worsening",
    confidence: 76,
    timeframe: "Next 60 min"
  },
  {
    location: "South Commercial District",
    currentStatus: "moderate",
    prediction: "stable",
    confidence: 84,
    timeframe: "Next 30 min"
  }
];

export default function AITrafficPredictions() {
  const getStatusColor = (status: Prediction["currentStatus"]) => {
    switch (status) {
      case "normal":
        return "bg-green-500/20 text-green-500 border-green-500/50";
      case "moderate":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/50";
      case "congested":
        return "bg-red-500/20 text-red-500 border-red-500/50";
    }
  };
  
  const getPredictionColor = (prediction: Prediction["prediction"]) => {
    switch (prediction) {
      case "improving":
        return "bg-green-500/20 text-green-500 border-green-500/50";
      case "stable":
        return "bg-blue-500/20 text-blue-500 border-blue-500/50";
      case "worsening":
        return "bg-red-500/20 text-red-500 border-red-500/50";
    }
  };
  
  const getPredictionIcon = (prediction: Prediction["prediction"]) => {
    switch (prediction) {
      case "improving":
        return "↓";
      case "stable":
        return "→";
      case "worsening":
        return "↑";
    }
  };
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Traffic Predictions
        </CardTitle>
        <CardDescription>
          Forecasting traffic patterns with machine learning
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {predictions.map((prediction, index) => (
          <div key={index} className="border border-border/40 rounded-md p-3 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">{prediction.location}</h3>
              <Badge 
                variant="outline" 
                className={cn("text-xs", getStatusColor(prediction.currentStatus))}
              >
                {prediction.currentStatus}
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  Timeframe
                </p>
                <p className="text-sm font-medium">{prediction.timeframe}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  Prediction
                </p>
                <p className="text-sm font-medium flex items-center gap-1">
                  <span 
                    className={cn(
                      "text-xs px-1 rounded", 
                      prediction.prediction === "improving" ? "bg-green-500/20" : 
                      prediction.prediction === "stable" ? "bg-blue-500/20" : 
                      "bg-red-500/20"
                    )}
                  >
                    {getPredictionIcon(prediction.prediction)}
                  </span>
                  {prediction.prediction}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  Confidence
                </p>
                <div className="flex items-center gap-1">
                  <div className="h-2 flex-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full", 
                        prediction.confidence > 85 ? "bg-green-500" : 
                        prediction.confidence > 70 ? "bg-yellow-500" : 
                        "bg-red-500"
                      )}
                      style={{ width: `${prediction.confidence}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium">{prediction.confidence}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
