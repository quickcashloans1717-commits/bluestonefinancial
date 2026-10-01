import { ShieldCheck, Percent, Clock, ThumbsUp, Medal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Clock,
    title: "Lightning Fast Approvals",
    description: "Time is money. Our streamlined process provides decisions in minutes, with funding often available the same day.",
  },
  {
    icon: Percent,
    title: "Competitive Fixed Rates",
    description: "Enjoy predictably stable payments with our fixed interest rates. You always know exactly what you'll owe each month.",
  },
  {
    icon: ShieldCheck,
    title: "No Prepayment Fees",
    description: "Pay off your loan early without any hidden penalties. We believe in rewarding financial responsibility.",
  },
  {
    icon: ThumbsUp,
    title: "Personalized Support",
    description: "Our loan advisors work with you to understand your unique situation and find the perfect funding solution.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(216 68% 22%), transparent 70%)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(160 60% 45%), transparent 70%)", transform: "translate(-20%, 30%)" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "hsl(216 68% 22% / 0.05)", color: "hsl(216 68% 22%)", border: "1px solid hsl(216 68% 22% / 0.1)" }}>
              <Medal className="w-4 h-4" />
              Over 15 Years of Excellence
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}>
              Why Choose <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(160 60% 45%), hsl(38 92% 50%))" }}>
                BlueStone Financial
              </span>
            </h2>
            
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              We understand that taking out a loan is a big decision. That's why we've designed our service around transparency, speed, and your ultimate success. With over $100 million disbursed, we have the experience to back our promises.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-10 pb-10 border-b border-gray-100">
              <div>
                <p className="text-4xl font-black text-primary mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>15+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-200" />
              <div>
                <p className="text-4xl font-black text-primary mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>$100M+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Disbursed</p>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center font-bold text-lg hover:underline transition-all group"
              style={{ color: "hsl(216 68% 22%)" }}>
              More about our company
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            {reasons.map((reason, index) => (
              <div key={index} 
                className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index % 2 !== 0 ? 'sm:mt-12' : ''}`}
                style={{ 
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)",
                }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, hsl(210 25% 96%), white)", border: "1px solid hsl(214 32% 91%)", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>
                  <reason.icon className="w-6 h-6" style={{ color: "hsl(160 60% 45%)" }} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
