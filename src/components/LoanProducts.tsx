import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, User, Building, Briefcase, CheckCircle } from "lucide-react";

const products = [
  {
    icon: User,
    title: "Personal Loans",
    subtitle: "For everyday needs",
    description: "Get quick funds for debt consolidation, home improvement, medical expenses, or any personal need. Fast approval with competitive fixed rates.",
    range: "$2,000 – $35,000",
    rate: "From 6.99% APR",
    term: "12 – 60 months",
    features: ["No collateral required", "Fixed monthly payments", "No prepayment fees"],
    type: "personal",
    gradient: "linear-gradient(135deg, hsl(216 68% 18%), hsl(216 68% 28%))",
    badge: "Most Popular",
  },

];

const LoanProducts = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "hsl(210 30% 98%)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "hsl(160 60% 45% / 0.1)", color: "hsl(160 60% 35%)", border: "1px solid hsl(160 60% 45% / 0.2)" }}>
            Our Loan Products
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            Choose the Right Loan for You
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you need personal funds, business capital, or quick cash, we have a loan product designed for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ border: "1px solid hsl(214 32% 91%)" }}>
              
              {product.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10"
                  style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))" }}>
                  {product.badge}
                </div>
              )}

              {/* Header */}
              <div className="p-8 text-white relative overflow-hidden" style={{ background: product.gradient }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "radial-gradient(circle at 70% 20%, white, transparent 50%)" }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative"
                  style={{ background: "rgba(255,255,255,0.15)" }}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium text-white/70 mb-1">{product.subtitle}</p>
                <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {product.title}
                </h3>
                <p className="text-xl font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {product.range}
                </p>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{product.description}</p>

                <div className="space-y-2 mb-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-medium">Rate</span>
                    <span className="font-bold text-primary">{product.rate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-medium">Term</span>
                    <span className="font-bold text-primary">{product.term}</span>
                  </div>
                </div>

                <div className="h-px bg-gray-100 my-5" />

                <div className="space-y-2.5 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(142 71% 40%)" }} />
                      <span className="text-sm font-medium text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/apply/${product.type}`}>
                  <Button
                    className="w-full font-bold py-5 h-auto rounded-xl group-hover:scale-105 transition-transform duration-300"
                    style={{
                      background: product.gradient,
                      color: "white",
                    }}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Not sure which loan is right for you?{" "}
            <Link to="/contact" className="font-semibold hover:underline" style={{ color: "hsl(160 60% 40%)" }}>
              Talk to an advisor →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoanProducts;
