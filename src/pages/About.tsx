import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, CheckCircle, FileText, CreditCard, MousePointer, Scale } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32" style={{ background: "hsl(216 68% 12%)" }}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
               style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white, transparent 50%)" }} />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              About <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(160 60% 45%), hsl(38 92% 50%))" }}>BlueStone Financial</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We're redefining the lending experience with speed, security, and transparency.
              Our mission is to empower individuals and businesses with the capital they need to thrive.
            </p>
          </div>
        </section>

        {/* Floating Stats */}
        <section className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
              <div className="text-center md:text-left px-4">
                <p className="text-4xl font-black mb-2" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>15+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center md:text-left px-4">
                <p className="text-4xl font-black mb-2" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>$500M+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Loans Funded</p>
              </div>
              <div className="text-center md:text-left px-4">
                <p className="text-4xl font-black mb-2" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>50k+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="text-center md:text-left px-4">
                <p className="text-4xl font-black mb-2" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>45min</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Avg. Funding Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="container mx-auto px-4 py-16 mb-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-500">
              Everything we do is guided by a commitment to our borrowers' success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                   style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", color: "white" }}>
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Transparency</h3>
              <p className="text-gray-500 leading-relaxed">
                No hidden fees, no confusing jargon. We believe in clear, straightforward terms so you know exactly what you're signing.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                   style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", color: "white" }}>
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Customer First</h3>
              <p className="text-gray-500 leading-relaxed">
                Our advanced technology is paired with real human support. Our advisors are here to help you every step of the way.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                   style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", color: "white" }}>
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Security</h3>
              <p className="text-gray-500 leading-relaxed">
                Your data security is paramount. We employ bank-level encryption and strict privacy policies to protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Process Detail Section */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="text-4xl font-black mb-6" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
                  Expertise <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(160 60% 45%), hsl(38 92% 50%))" }}>Made Simple</span>
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  We've removed the friction from traditional borrowing. Our platform combines cutting-edge fintech with deep financial expertise to deliver a seamless experience.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(216 68% 22%)" }}>Digital Documentation</h3>
                      <p className="text-gray-500">Sign contracts and review documents electronically from any device.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-green-50 p-2 rounded-lg" style={{ color: "hsl(142 71% 45%)" }}>
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(216 68% 22%)" }}>Soft Credit Pulls</h3>
                      <p className="text-gray-500">Check your rates without impacting your FICO credit score.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-emerald-50 p-2 rounded-lg" style={{ color: "hsl(160 60% 45%)" }}>
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(216 68% 22%)" }}>Instant Bank Verification</h3>
                      <p className="text-gray-500">Link your account securely for faster approvals and direct funding.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 relative">
                 <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full" style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", opacity: 0.1 }}></div>
                 
                 <h3 className="text-2xl font-bold mb-8" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>Comprehensive Support</h3>
                 
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                      <MousePointer className="w-6 h-6" style={{ color: "hsl(160 60% 45%)" }} />
                      <span className="font-medium text-gray-700">Online Support 24/7</span>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                      <Scale className="w-6 h-6" style={{ color: "hsl(160 60% 45%)" }} />
                      <span className="font-medium text-gray-700">Fair Lending Practices</span>
                    </div>
                 </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-24 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl font-black mb-6" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-500">
                The dedicated professionals behind BlueStone Financial working to secure your financial future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "James Anderson", role: "Accounting Manager", image: "https://onecapitalloans.com/assets/images/e1.avif" },
                { name: "Jacob Smith", role: "Sr. Loan Officer", image: "https://onecapitalloans.com/assets/images/e2.avif" },
                { name: "Jennifer Ross", role: "Documents Manager - Activation", image: "https://onecapitalloans.com/assets/images/e3.avif" },
                { name: "Catherine Dorsen", role: "Verification Team - Accounts", image: "https://onecapitalloans.com/assets/images/e4.jpg" }
              ].map((member, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{member.name}</h3>
                    <p className="text-sm font-semibold" style={{ color: "hsl(160 60% 45%)" }}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
