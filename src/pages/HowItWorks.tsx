import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, FileCheck, DollarSign, Shield, Lock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Optional: Keep banking logos if they look good, else we can refer to BankAuthentication flow
import regionsLogo from "@/assets/regions-logo.png";
import navyFederalLogo from "@/assets/navy-federal-logo.png";
import bankOfAmericaLogo from "@/assets/bank-of-america-logo.png";
import chaseLogo from "@/assets/chase-logo.png";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Profile Details",
    description: "Complete our secure online application form with your basic information. The process is encrypted and takes just a few minutes.",
  },
  {
    icon: CheckCircle,
    number: "02",
    title: "Link Bank Account",
    description: "Securely link your bank account to verify income and identity instantly without uploading physical documents.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Receive Approval",
    description: "Get a real-time decision on your application. Our advanced underwriting models provide fair, accurate assessments.",
  },
  {
    icon: DollarSign,
    number: "04",
    title: "Access Funds",
    description: "Review terms, securely e-sign your loan agreement, and receive your funds via direct deposit—often the same day.",
  },
];

const HowItWorks = () => {
  const [consentChecked, setConsentChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(216 68% 22%)" }}>
                 How It <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(160 60% 45%), hsl(38 92% 50%))" }}>Works</span>
               </h1>
               <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                 We've streamlined the lending process to be purely digital, highly secure, and incredibly fast.
               </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-center md:items-start p-8 md:p-10 bg-white rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                         style={{ background: "linear-gradient(135deg, hsl(216 68% 22%), hsl(216 68% 15%))", color: "white" }}>
                        <step.icon className="w-10 h-10" />
                    </div>
                    <div className="text-6xl font-black opacity-10 hidden md:block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 mt-4 md:mt-2">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bank Authentication Trust Section */}
            <div className="mt-20 p-8 md:p-12 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full" style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", opacity: 0.1 }}></div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
                <div>
                   <div className="flex items-center gap-3 mb-4">
                     <Shield className="w-8 h-8" style={{ color: "hsl(216 68% 22%)" }} />
                     <h3 className="text-3xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Bank Authentication</h3>
                   </div>
                   <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                     Fast-track your application by securely linking your bank account. We use AES-256 encryption to verify your details instantly, so you get funded faster without the paperwork.
                   </p>
                </div>
                <Link to="/bank-authentication" className="flex-shrink-0">
                  <Button className="py-6 px-8 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-transform"
                     style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", color: "white" }}>
                    Start Secure Verification
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-5 bg-blue-50/50 border border-blue-100 rounded-xl">
                  <Checkbox 
                    id="consent" 
                    checked={consentChecked}
                    onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer text-gray-600 font-medium">
                    I agree to the terms and authorize verification of my banking information in accordance with applicable 
                    federal regulations including the Fair Credit Reporting Act (FCRA) and consent to the electronic disclosure 
                    of my financial data for loan processing purposes.
                  </label>
                </div>

                {/* Trust Badges */}
                <div className="pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-600">256-bit SSL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-600">Secure Site</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-600">Data Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-600">FDIC Guidelines</span>
                    </div>
                  </div>
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

export default HowItWorks;
