import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Building, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const loanTypes = [
  {
    icon: User,
    title: "Personal Loan",
    description: "Customized funding for personal aspirations with flexible terms and competitive rates.",
    features: ["$2,000 - $35,000", "Quick approval", "Flexible repayment"],
    link: "/apply/personal",
    gradient: "linear-gradient(135deg, hsl(216 68% 18%), hsl(216 68% 28%))",
  },

];

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(216 68% 22%)" }}>
                Select Your <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(160 60% 45%), hsl(38 92% 50%))" }}>Loan Type</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Choose the loan type that best fits your needs and start your secure application today. Our streamlined process makes getting funded simple and fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {loanTypes.map((loan, index) => (
                 <div key={index}
                 className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                 style={{ border: "1px solid hsl(214 32% 91%)" }}>
                 
                 {/* Header */}
                 <div className="p-8 text-white relative overflow-hidden" style={{ background: loan.gradient }}>
                   <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: "radial-gradient(circle at 70% 20%, white, transparent 50%)" }} />
                   <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative"
                     style={{ background: "rgba(255,255,255,0.15)" }}>
                     <loan.icon className="w-7 h-7 text-white" />
                   </div>
                   <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                     {loan.title}
                   </h3>
                 </div>
   
                 {/* Body */}
                 <div className="p-8">
                   <p className="text-gray-500 text-sm leading-relaxed mb-6">{loan.description}</p>
   
                   <div className="space-y-2.5 mb-8">
                     {loan.features.map((feature, i) => (
                       <div key={i} className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(160 60% 45%)" }} />
                         <span className="text-sm font-medium text-gray-600">{feature}</span>
                       </div>
                     ))}
                   </div>
   
                   <Link to={loan.link}>
                     <Button
                       className="w-full font-bold py-5 h-auto rounded-xl group-hover:scale-105 transition-transform duration-300"
                       style={{
                         background: loan.gradient,
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

            <div className="bg-white border text-center p-10 md:p-14 rounded-3xl shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
                  style={{ background: "radial-gradient(circle, hsl(216 68% 22%), transparent 70%)", transform: "translate(30%, -30%)" }} />
              
              <h2 className="text-3xl font-black mb-10" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(216 68% 22%)" }}>What to Expect</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div>
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-black mb-4" 
                       style={{ background: "hsl(216 68% 22% / 0.05)", color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Fill Application</h3>
                  <p className="text-sm text-gray-500">
                    Complete our secure online form in under 5 minutes
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-black mb-4" 
                       style={{ background: "hsl(216 68% 22% / 0.05)", color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Get Decision</h3>
                  <p className="text-sm text-gray-500">
                    Receive your instant approval decision and rates
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-black mb-4" 
                       style={{ background: "hsl(216 68% 22% / 0.05)", color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Receive Funds</h3>
                  <p className="text-sm text-gray-500">
                    Sign electronically and get funded quickly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
