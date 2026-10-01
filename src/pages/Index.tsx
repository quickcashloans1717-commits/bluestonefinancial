import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps";
import LoanCalculator from "@/components/LoanCalculator";
import Testimonials from "@/components/Testimonials";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <ProcessSteps />
        <LoanCalculator />
        <Testimonials />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
