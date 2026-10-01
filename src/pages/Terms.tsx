import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8">
              Terms & <span className="text-accent">Conditions</span>
            </h1>
            
            <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using BlueStone Financial's services, you agree to be bound by these Terms and Conditions. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">2. Loan Application</h2>
                <p>
                  All loan applications are subject to approval. We reserve the right to decline any application 
                  without providing specific reasons. Application approval depends on creditworthiness assessment, 
                  income verification, and other factors as determined by BlueStone Financial.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">3. Interest Rates and Fees</h2>
                <p>
                  Interest rates are determined based on loan type, amount, term, and applicant's credit profile. 
                  All rates and fees will be clearly disclosed before loan approval. Additional fees may apply for 
                  late payments, returned payments, or other specified circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">4. Repayment Terms</h2>
                <p>
                  Borrowers agree to repay loans according to the schedule outlined in the loan agreement. 
                  Early repayment is permitted and may result in interest savings. Late payments may incur 
                  additional fees and impact credit reporting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">5. Use of Information</h2>
                <p>
                  By applying for a loan, you authorize BlueStone Financial to obtain and verify information from 
                  credit bureaus, banks, employers, and other relevant sources. This information is used 
                  solely for loan assessment and servicing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">6. Default and Collections</h2>
                <p>
                  Failure to make payments as agreed constitutes default. In case of default, BlueStone Financial 
                  may report to credit bureaus, engage collection agencies, or pursue legal action to recover
                  outstanding amounts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">7. Modifications</h2>
                <p>
                  BlueStone Financial reserves the right to modify these terms at any time. Changes will be effective 
                  upon posting to our website. Continued use of our services after modifications constitutes 
                  acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">8. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the State of Florida, United States. Any disputes 
                  arising from these terms or our services will be subject to the exclusive jurisdiction of 
                  courts in Tampa, Florida.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">9. Contact Information</h2>
                <p>
                   For questions regarding these terms, please contact us at:<br />
                   Email: support@bluestonefinancial.com<br />
                   Phone: +1 (415)-217-9255<br />
                   Address: Beaumont Commerce Center, 5402-5460 Beaumont Center Blvd, Tampa, FL 33634
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
