import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            
            <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, including personal identification 
                  information (name, email, phone number), financial information (income, employment details), 
                  and loan application data. We also collect information automatically through your use of our 
                  services, such as device information, IP address, and browsing patterns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>
                  Your information is used to process loan applications, assess creditworthiness, communicate 
                  with you about your application and account, comply with legal requirements, and improve our 
                  services. We may also use your information to send promotional materials, though you can opt 
                  out at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell your personal information. We may share your information with credit bureaus, 
                  banking partners, service providers who assist us in operations, and as required by law or to 
                  protect our rights. All third parties are required to maintain the confidentiality of your 
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures including encryption, secure servers, and 
                  access controls to protect your information. However, no method of transmission over the 
                  internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also 
                  object to processing, request data portability, and withdraw consent where applicable. To 
                  exercise these rights, contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
                <p>
                  Our website uses cookies and similar technologies to enhance user experience, analyze usage 
                  patterns, and provide personalized content. You can control cookie preferences through your 
                  browser settings, though some features may not function properly without cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">7. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under 18 years of age. We do not knowingly 
                  collect information from children. If you believe we have collected information from a child, 
                  please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy periodically. We will notify you of significant changes by 
                  posting the new policy on our website and updating the "Last updated" date. Your continued 
                  use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-mono font-bold text-foreground mb-4">9. Contact Us</h2>
                <p>
                   For questions or concerns about this privacy policy or our data practices, contact us at:<br />
                   Email: privacy@bluestonefinancial.com<br />
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

export default Privacy;
