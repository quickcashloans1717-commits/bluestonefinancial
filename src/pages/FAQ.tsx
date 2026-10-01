import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How fast can I get funded?",
    answer: "Our automated system allows for instant approvals in many cases. Once approved, if you securely link your bank account, funds can be deposited in as little as 45 minutes or the next business morning.",
  },
  {
    question: "Do you check my credit score?",
    answer: "To view your customized rates and terms, we only perform a 'soft pull' which does not affect your FICO credit score. A hard inquiry is only made once you officially accept the loan terms.",
  },
  {
    question: "Are there any prepayment penalties?",
    answer: "No. We believe in rewarding responsible financial behavior. You can pay off your loan as early as you'd like without any hidden fees or penalties.",
  },
  {
    question: "What is Bank Authentication?",
    answer: "Bank Authentication is a secure way for us to verify your income and banking details instantly. It uses 256-bit encryption and is entirely read-only, meaning we cannot make changes to your account. This removes the need for uploading paper documents.",
  },
  {
    question: "What types of loans do you offer?",
    answer: "We offer Personal Loans ($2k-$35k). The product has terms specifically tailored to your use case.",
  },
  {
    question: "How do I make my monthly payments?",
    answer: "The easiest way is to set up AutoPay during your application. We will automatically deduct your fixed monthly payment from your linked bank account on your due date, helping you avoid late fees.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="text-center mb-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: "hsl(216 68% 22%)" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-500">
              Find answers to common questions about our loan programs, the application process, and more.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 py-2 bg-gray-50 hover:bg-gray-100/50 transition-colors">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 leading-relaxed pb-4 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-primary rounded-3xl p-10 text-center relative overflow-hidden text-white shadow-xl"
               style={{ background: "linear-gradient(145deg, hsl(216 68% 22%), hsl(216 68% 15%))" }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" style={{ transform: "translate(30%, -30%)" }} />
            
            <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>Still have questions?</h3>
            <p className="text-white/70 mb-8 relative z-10 max-w-xl mx-auto">
              Our loan advisors are available Monday through Friday, 8am - 8pm EST to help you navigate your options.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <Link to="/contact">
                <Button className="w-full sm:w-auto px-8 py-6 rounded-xl font-bold shadow-lg"
                        style={{ background: "linear-gradient(135deg, hsl(160 60% 45%), hsl(160 65% 35%))", color: "white" }}>
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+14152179255">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 rounded-xl font-bold border-2 border-white/20 hover:bg-white hover:text-primary transition-colors bg-white/5">
                  <Phone className="w-4 h-4 mr-2" /> +1 (415)-217-9255
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
