import { Rocket, Headphones, Users, Lock, Target, Smartphone } from "lucide-react";

const features = [
  { icon: Rocket, title: "Fast onboarding" },
  { icon: Headphones, title: "Expert support" },
  { icon: Users, title: "Consulting partners" },
  { icon: Lock, title: "High-end security" },
  { icon: Target, title: "Specialist help" },
  { icon: Smartphone, title: "All-in-one app" },
];

const Support = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-3 p-6 border border-border bg-card hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 group"
            >
              <feature.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              <p className="text-center text-sm font-mono">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
