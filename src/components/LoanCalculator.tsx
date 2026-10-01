import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(8.5);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment.toFixed(2);
  };

  const totalPayment = (parseFloat(calculateMonthlyPayment()) * loanTerm).toFixed(2);
  const totalInterest = (parseFloat(totalPayment) - loanAmount).toFixed(2);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(216 68% 22%), transparent 70%)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(160 60% 45%), transparent 70%)", transform: "translate(-20%, 30%)" }} />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ background: "hsl(216 68% 22% / 0.05)", color: "hsl(216 68% 22%)", border: "1px solid hsl(216 68% 22% / 0.1)" }}>
            <Calculator className="w-4 h-4" />
            <span className="uppercase tracking-wide">Interactive Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(216 68% 22%)" }}>
            Estimate Your <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(160 60% 45%), hsl(38 92% 50%))" }}>Payments</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Use our calculator to get an idea of what your monthly payments might look like before applying. No impact on your credit score.
          </p>
        </div>

        <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden" 
              style={{ boxShadow: "0 20px 50px -10px rgba(0,0,0,0.1)" }}>
          <div className="grid lg:grid-cols-5 bg-white">
            
            {/* Left side: Controls */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="space-y-10">
                
                {/* Loan Amount */}
                <div>
                   <div className="flex justify-between items-center mb-6">
                     <Label className="text-lg font-bold text-gray-700">Loan Amount</Label>
                     <span className="text-3xl font-black" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(160 60% 45%)" }}>
                       ${loanAmount.toLocaleString()}
                     </span>
                   </div>
                   <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={1000}
                    max={100000}
                    step={1000}
                    className="mb-3"
                  />
                  <div className="flex justify-between text-xs font-semibold text-gray-400">
                    <span>$1,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                   <div className="flex justify-between items-center mb-6">
                     <Label className="text-lg font-bold text-gray-700">Loan Term</Label>
                     <span className="text-3xl font-black" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(160 60% 45%)" }}>
                       {loanTerm} <span className="text-lg font-bold text-gray-500">months</span>
                     </span>
                   </div>
                   <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={6}
                    max={84}
                    step={6}
                    className="mb-3"
                  />
                  <div className="flex justify-between text-xs font-semibold text-gray-400">
                    <span>6 months</span>
                    <span>84 months</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                   <div className="flex justify-between items-center mb-6">
                     <Label className="text-lg font-bold text-gray-700">Interest Rate (APR)</Label>
                     <span className="text-3xl font-black" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(160 60% 45%)" }}>
                       {interestRate.toFixed(2)}%
                     </span>
                   </div>
                   <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={4.99}
                    max={29.99}
                    step={0.5}
                    className="mb-3"
                  />
                  <div className="flex justify-between text-xs font-semibold text-gray-400">
                    <span>4.99%</span>
                    <span>29.99%</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side: Results */}
            <div className="lg:col-span-2 p-8 md:p-12 text-white relative flex flex-col"
                 style={{ background: "linear-gradient(145deg, hsl(216 68% 22%), hsl(216 68% 15%))" }}>
               
              <div className="absolute inset-0 opacity-10"
                   style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold mb-8 text-white">Your Estimate</h3>
                
                <div className="space-y-8">
                  <div className="p-6 rounded-2xl relative overflow-hidden" 
                       style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full" style={{ transform: "translate(30%, -30%)" }} />
                    <span className="block text-white/80 font-medium mb-1">Estimated Monthly Payment</span>
                    <span className="block text-4xl font-black text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      ${calculateMonthlyPayment()}
                    </span>
                  </div>
                  
                  <div className="space-y-4 px-2">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/60 font-medium">Principal Amount</span>
                      <span className="font-bold text-white">${loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/60 font-medium">Total Interest</span>
                      <span className="font-bold text-white">${parseFloat(totalInterest).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-white/80 font-bold">Total Payment</span>
                      <span className="text-xl font-bold text-white">${parseFloat(totalPayment).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 leading-relaxed">
                  * This calculator provides estimates for informational purposes only. Actual interest rates, loan terms, and monthly payments may vary based on your credit history, income, and other factors determined during the application process.
                </p>
              </div>
            </div>
            
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoanCalculator;
