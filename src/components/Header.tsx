import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/banking-partners", label: "Banking Partners" },
    { href: "/bank-authentication", label: "Bank Authentication" },
    { href: "/faq", label: "FAQ's" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-xs text-white/80 font-medium">
            🏆 Trusted by 50,000+ borrowers across the US — Over $500M disbursed
          </p>
          <a
            href="tel:+14152179255"
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-yellow-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +1 (415)-217-9255
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
          <img src="/bluestone-logo.png" alt="BlueStone Financial" className="h-20 md:h-24 lg:h-28 w-auto object-contain object-left py-1" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-primary bg-blue-50 font-semibold"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-200"
            >
              Sign In
            </Button>
          </Link>
          <Link to="/get-started">
            <Button
              className="btn-shine font-bold px-6 py-5 shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
              style={{
                background: "linear-gradient(135deg, hsl(38 92% 50%), hsl(42 90% 44%))",
                color: "hsl(215 75% 12%)",
              }}
            >
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? "text-primary bg-blue-50 font-semibold"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 grid grid-cols-2 gap-3">
              <Link to="/login">
                <Button variant="outline" className="w-full border-2 border-primary text-primary font-semibold">
                  Sign In
                </Button>
              </Link>
              <Link to="/get-started">
                <Button
                  className="w-full font-bold"
                  style={{
                    background: "linear-gradient(135deg, hsl(38 92% 50%), hsl(42 90% 44%))",
                    color: "hsl(215 75% 12%)",
                  }}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
            <a
              href="tel:+14152179255"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="w-4 h-4" />
              +1 (415)-217-9255
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
