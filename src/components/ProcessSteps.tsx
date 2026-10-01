import { ClipboardCheck, FileSearch, CheckSquare, BadgeDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Quick Application",
    description: "Fill out our secure, encrypted online form in under 5 minutes. No impact on your credit score to check rates.",
  },
  {
    icon: FileSearch,
    title: "Instant Review",
    description: "Our automated system reviews your application instantly, matching you with the best rates and terms.",
  },
  {
    icon: CheckSquare,
    title: "Fast Approval",
    description: "Review your tailored loan offer and e-sign your documents securely from any device.",
  },
  {
    icon: BadgeDollarSign,
    title: "Get Funded",
    description: "Receive your funds directly to your bank account, often within 45 minutes of final approval.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden text-white"
      style={{ background: "linear-gradient(145deg, hsl(216 68% 15%), hsl(216 68% 22%))" }}>
      
      {/* Abstract background graphics */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
        }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            Securing Your Funds is <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(160 60% 45%), hsl(38 92% 50%))" }}>Simple</span>
          </h2>
          <p className="text-lg text-white/70">
            We've eliminated the red tape. Our streamlined 4-step process gets you the money you need without the traditional banking delays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] z-0"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent)" }} />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-28 h-28 rounded-full mb-6 flex items-center justify-center relative transition-transform duration-500 group-hover:-translate-y-2"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                {/* Number badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                  style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))" }}>
                  {index + 1}
                </div>
                <step.icon className="w-10 h-10" style={{ color: "hsl(38 92% 50%)" }} />
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/get-started">
            <Button size="lg" className="rounded-xl px-10 py-6 font-bold text-lg transition-transform hover:scale-105 shadow-xl"
              style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", color: "white" }}>
              Start Your Application Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
