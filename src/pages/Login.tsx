import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      toast({
        title: "Login successful! (Simulated)",
        description: "You have been logged in successfully.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate signup
    setTimeout(() => {
      toast({
        title: "Account created! (Simulated)",
        description: "Your account has been successfully created.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-8 text-center">
              Welcome <span className="text-accent">Back</span>
            </h1>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="font-bold">Login</TabsTrigger>
                <TabsTrigger value="signup" className="font-bold">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      required 
                      className="border border-border rounded-md px-3 py-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input 
                      id="login-password" 
                      type="password" 
                      required 
                      className="border border-border rounded-md px-3 py-2"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <Link to="#" className="text-accent hover:underline">
                      Forgot password?
                    </Link>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground font-bold py-2 rounded-md hover:bg-accent/90"
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-firstname">First Name</Label>
                      <Input 
                        id="signup-firstname" 
                        required 
                        className="border border-border rounded-md px-3 py-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-lastname">Last Name</Label>
                      <Input 
                        id="signup-lastname" 
                        required 
                        className="border border-border rounded-md px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      required 
                      className="border border-border rounded-md px-3 py-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password" 
                      required 
                      className="border border-border rounded-md px-3 py-2"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">Confirm Password</Label>
                    <Input 
                      id="signup-confirm" 
                      type="password" 
                      required 
                      className="border border-border rounded-md px-3 py-2"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    By signing up, you agree to our{" "}
                    <Link to="/terms" className="text-accent hover:underline">Terms & Conditions</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground font-bold py-2 rounded-md hover:bg-accent/90"
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
