import Header from "@/components/Header";
import Footer from "@/components/Footer";

const financePartners = [
  { name: "Cash App", image: "https://onecapitalloans.com/assets/images/logos/logo1.png" },
  { name: "Apple Pay", image: "https://onecapitalloans.com/assets/images/logos/img3.jpeg" },
  { name: "bitcoin", image: "https://onecapitalloans.com/assets/images/logos/img4.jpeg" },
  { name: "WIRE TRANSFER", image: "https://onecapitalloans.com/assets/images/logos/img5.png" },
  { name: "BANK TRANSFER", image: "https://onecapitalloans.com/assets/images/logos/img65.png" }
];

const offlinePartners = [
  { name: "Walmart", image: "https://onecapitalloans.com/assets/images/logos/img6.png" },
  { name: "Walgreens", image: "https://onecapitalloans.com/assets/images/logos/img7.jpeg" },
  { name: "Dollar General", image: "https://onecapitalloans.com/assets/images/logos/img8.jpeg" },
  { name: "Family Dollar", image: "https://onecapitalloans.com/assets/images/logos/img9.jpeg" },
  { name: "7-Eleven", image: "https://onecapitalloans.com/assets/images/logos/img10.jpeg" },
  { name: "CVS Pharmacy", image: "https://onecapitalloans.com/assets/images/logos/img11.jpeg" },
  { name: "Rite Aid", image: "https://onecapitalloans.com/assets/images/logos/img12.jpeg" },
  { name: "Kroger", image: "https://onecapitalloans.com/assets/images/logos/img13.jpeg" }
];

const BankingPartners = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f1f1f1" }}>
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 max-w-6xl">
        {/* Finance Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 inline-block" style={{ fontFamily: "sans-serif", borderBottom: "3px solid black", paddingBottom: "8px" }}>
            Finance Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {financePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-md aspect-square">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-contain max-h-24 mix-blend-multiply" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Offline Partners Section */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-8 inline-block" style={{ fontFamily: "sans-serif", borderBottom: "3px solid black", paddingBottom: "8px" }}>
            Offline Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offlinePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-md aspect-[4/3]">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-contain max-h-28 mix-blend-multiply" 
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BankingPartners;
