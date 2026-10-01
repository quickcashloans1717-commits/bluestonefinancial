import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.formType = "Contact Form";

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert("Message sent successfully. We'll be in touch soon!");
        e.currentTarget.reset();
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (err) {
      alert("Network error. Could not submit.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        
        {/* Header */}
        <section className="bg-white py-16 md:py-24 border-b border-gray-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Get in Touch
            </h1>
            <p className="text-lg text-gray-500">
              Whether you have a question about your application, our products, or just need general guidance, our team is here to help.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 -mt-8 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-8" style={{ color: "hsl(216 68% 22%)", fontFamily: "'Poppins', sans-serif" }}>
                  Contact Information
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                      <a href="tel:+14152179255" className="text-gray-500 hover:text-primary transition-colors block mb-1">+1 (415)-217-9255</a>
                      <p className="text-xs text-gray-400">Toll-free, Mon-Fri 8am-8pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 rounded-2xl" style={{ color: "hsl(160 60% 45%)" }}>
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                      <a href="mailto:support@bluestonefinancial.com" className="text-gray-500 hover:text-primary transition-colors block mb-1">support@bluestonefinancial.com</a>
                      <p className="text-xs text-gray-400">Response usually within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-50 rounded-2xl" style={{ color: "hsl(142 71% 45%)" }}>
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">OFFICE LOCATION:</h4>
                      <p className="text-gray-500 leading-relaxed">
                        <strong className="text-gray-900">Beaumont Commerce Center</strong><br/>
                        5402-5460 Beaumont Center Blvd,<br/>
                        Tampa, FL 33634
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1" 
                     style={{ background: "linear-gradient(90deg, hsl(160 60% 45%), hsl(38 92% 50%))" }} />
                
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6" style={{ color: "hsl(160 60% 45%)" }} />
                  <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>Send us a message</h3>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input name="firstName" placeholder="John" required className="py-6 rounded-xl bg-gray-50 border-gray-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input name="lastName" placeholder="Doe" required className="py-6 rounded-xl bg-gray-50 border-gray-200" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <Input name="email" type="email" placeholder="john@example.com" required className="py-6 rounded-xl bg-gray-50 border-gray-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone (Optional)</label>
                      <Input name="phone" type="tel" placeholder="(555) 000-0000" className="py-6 rounded-xl bg-gray-50 border-gray-200" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <select name="subject" required className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select a topic...</option>
                      <option value="applications">Existing Application Inquiry</option>
                      <option value="rates">Rates & Terms</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea name="message" required placeholder="How can we help you today?" className="min-h-[150px] rounded-xl bg-gray-50 border-gray-200 resize-none" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full py-6 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-transform disabled:opacity-50"
                          style={{ background: "linear-gradient(135deg, hsl(216 68% 22%), hsl(216 68% 15%))", color: "white" }}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
