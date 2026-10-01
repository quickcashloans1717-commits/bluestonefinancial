import { ArrowRight, CheckCircle, Zap, Shield, Clock, DollarSign, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "50,000+", label: "Happy Borrowers" },
  { value: "$500M+", label: "Loans Disbursed" },
  { value: "15+", label: "Years Experience" },
  { value: "45min", label: "Avg. Funding Time" },
];

const features = [
  { icon: Zap, text: "Same-day approval decision" },
  { icon: Shield, text: "256-bit bank-level security" },
  { icon: CheckCircle, text: "No prepayment penalties" },
  { icon: Clock, text: "Funds in as little as 45 minutes" },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

const Hero = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(216 68% 12%) 0%, hsl(216 68% 20%) 60%, hsl(220 60% 26%) 100%)" }}>
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, hsl(160 60% 45%), transparent 70%)" }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, hsl(38 92% 50%), transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, hsl(210 100% 70%), transparent 70%)" }} />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="text-white animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142 71% 50%)" }} />
                  <span>Trusted Lending Since 2009</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}>
                  Fast Personal Loans{" "}
                  <span className="block" style={{
                    background: "linear-gradient(135deg, hsl(38 92% 50%), hsl(160 60% 45%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    You Can Trust
                  </span>
                </h1>

                <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-lg">
                  Get approved in minutes, not days. We offer personal loans with flexible terms, fixed rates, and funding as fast as 45 minutes after approval.
                </p>

                {/* Feature list */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "hsl(160 60% 45% / 0.2)", border: "1px solid hsl(160 60% 45% / 0.4)" }}>
                        <f.icon className="w-3.5 h-3.5" style={{ color: "hsl(160 60% 60%)" }} />
                      </div>
                      <span className="text-sm text-white/80 font-medium">{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/get-started">
                    <Button
                      size="lg"
                      className="btn-shine font-bold text-base px-8 py-6 h-auto rounded-xl shadow-2xl group transition-all duration-300 hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, hsl(38 92% 50%), hsl(42 90% 44%))",
                        color: "hsl(215 75% 12%)",
                        boxShadow: "0 8px 32px hsl(38 92% 50% / 0.35)"
                      }}
                    >
                      Apply Now — It's Free
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/banking-partners">
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-semibold text-base px-8 py-6 h-auto rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "2px solid rgba(255,255,255,0.25)",
                        color: "white",
                      }}
                    >
                      Our Banking Partners
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right – Loan calculator card */}
              <div className="animate-fade-in delay-300 hidden lg:block">
                <div className="rounded-3xl p-8 shadow-2xl"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">Quick Loan Estimate</h3>
                    <p className="text-white/60 text-sm">No credit impact · 60-second check</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    {[
                      { label: "Personal", range: "$2,000 – $35,000", rate: "As low as 6.99% APR" },
                    ].map((loan, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl transition-all hover:bg-white/10 cursor-pointer"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <div>
                          <p className="text-white font-semibold text-sm">{loan.label} Loan</p>
                          <p className="text-white/60 text-xs mt-0.5">{loan.rate}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-sm" style={{ color: "hsl(38 92% 55%)" }}>{loan.range}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="/get-started" className="block">
                    <Button className="w-full font-bold rounded-xl py-5 h-auto transition-all hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, hsl(38 92% 50%), hsl(42 90% 44%))",
                        color: "hsl(215 75% 12%)",
                        boxShadow: "0 4px 20px hsl(38 92% 50% / 0.35)"
                      }}>
                      Check My Rate →
                    </Button>
                  </Link>

                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Shield className="w-4 h-4 text-white/40" />
                    <span className="text-xs text-white/40">256-bit SSL · No hard credit pull</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div ref={statsRef} className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="py-6 px-8 text-center group hover:bg-emerald-50 transition-colors duration-300">
                <div className="text-3xl font-black mb-1 transition-all"
                  style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
