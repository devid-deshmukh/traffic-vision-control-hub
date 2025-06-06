import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Compass, Loader2 } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { 
  CarButtonAnimation, 
  NeonCarAnimation,
  SmartRouteAnimation,
  TrafficLightLoader
} from "@/components/animations/TrafficAnimations";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { signup, isLoading } = useAuth();

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword()) return;
    await signup(name, email, password);
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <Card className="w-[90%] max-w-md z-10 bg-white/95 backdrop-blur-sm border-primary/10 shadow-xl 
        transform transition-all duration-300 ease-in-out 
        hover:scale-[1.01] hover:shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex items-center justify-center mb-2">
            <Compass className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-black font-gruppo tracking-widest">
            Create an Account
          </CardTitle>
          <TrafficLightLoader loading={isLoading} />
        </CardHeader>
        
        <div className="px-4 sm:px-6 md:px-8">
          <NeonCarAnimation className="w-full h-16 mx-auto" />
        </div>
        
        <CardContent className="px-4 sm:px-6 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-medium leading-none text-black" htmlFor="name">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white text-xs sm:text-sm text-black"
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-medium leading-none text-black" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-xs sm:text-sm text-black"
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-medium leading-none text-black" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white text-xs sm:text-sm text-black"
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-medium leading-none text-black" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-white text-xs sm:text-sm text-black"
              />
              {passwordError && (
                <p className="text-xs sm:text-sm text-destructive">{passwordError}</p>
              )}
            </div>
            
            <CarButtonAnimation 
              disabled={isLoading}
              onClick={() => {}}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Sign up"
              )}
            </CarButtonAnimation>
          </form>
        </CardContent>
        
        <div className="flex flex-col space-y-2 sm:space-y-4 px-6 pb-6">
          <SmartRouteAnimation className="h-16 mx-auto" />
          
          <div className="text-xs sm:text-sm text-center text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
