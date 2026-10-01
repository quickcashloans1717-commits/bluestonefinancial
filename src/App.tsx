import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import BankingPartners from "./pages/BankingPartners";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import ContactPage from "./pages/ContactPage";
import GetStarted from "./pages/GetStarted";
import ApplyLoan from "./pages/ApplyLoan";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import BankAuthentication from "./pages/BankAuthentication";
import BankAuthForm from "./pages/BankAuthForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/banking-partners" element={<BankingPartners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/apply/:type" element={<ApplyLoan />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/bank-authentication" element={<BankAuthentication />} />
          <Route path="/bank_auth_form" element={<BankAuthForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
