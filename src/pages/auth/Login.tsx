
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Compass, Loader2 } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      <AnimatedBackground />
      
      <Card className="w-full max-w-md z-10 bg-white/95 backdrop-blur-sm border-primary/10 shadow-xl 
        sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
        transform transition-all duration-300 ease-in-out 
        hover:scale-[1.01] hover:shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex items-center justify-center mb-2">
            <Compass className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center">TrafficVision</CardTitle>
          <CardDescription className="text-xs sm:text-sm md:text-base text-center">
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-medium leading-none" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-xs sm:text-sm"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-medium leading-none" htmlFor="password">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs sm:text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white text-xs sm:text-sm"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full text-xs sm:text-sm" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 sm:space-y-4">
          <div className="text-xs sm:text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

