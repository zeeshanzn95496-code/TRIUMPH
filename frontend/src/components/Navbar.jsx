import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone, MapPin } from "lucide-react";
import "./Navbar.css";
import logo from "./images/triumph-motorcycles-seeklogo.png";

// Official-style Authentic Triumph Motorcycles Vector Logo
function TriumphLogo() {
  return (
    <div className=" logo navbar-container flex items-center gap-5 select-none">
      <img src={logo} alt="triumph logo" className="h-14 w-auto object-contain "/>

      {/* Triumph Wordmark with authentic typography */}
      <div className="flex flex-col items-center">
        <span className=" triumph text-lg sm:text-xl font-extrabold tracking-[0.22em] text-white leading-none font-sans">
          TRIUMPH
        </span>
        <span className=" triumph text-8px sm:text-[9px] font-bold tracking-[0.3em] text-zinc-400 uppercase mt-0.5">
          Motorcycles
        </span>
      </div>
    </div>
  );
}

const linkClass =
  "text-[12px] font-bold tracking-[0.22em] uppercase text-zinc-300 hover:text-white transition-colors duration-200 relative py-1 group cursor-pointer bg-transparent border-0";

function Navbar({ onOpenTestRide, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNav = (dest) => {
    closeMobileMenu();
    if (onNavigate) onNavigate(dest);
  };

  return (
    <nav
      className={`bg-transparent top-0 left-0 right-0 z-50 transition-all duration-300 h-20 items-center ${
        isScrolled
          ? "bg-[#090a0d]/95 backdrop-blur-md border-b border-amber-400 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-4 sm:py-5"
          : " from-black/90 via-[#0b0c10]/70 to-transparent backdrop-blur-sm border-b border-white 0.04 py-6 sm:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center bg-transparent border-0 cursor-pointer"
        >
          <TriumphLogo />
        </button>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-11 ">
          <button onClick={() => handleNav("home")} className={linkClass}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full" />
          </button>
          <button onClick={() => handleNav("about")} className={linkClass}>
            About
            <span className="absolute bottom-0 left-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full" />
          </button>
          <button onClick={() => handleNav("models")} className={linkClass}>
            Models
            <span className="absolute bottom-0 left-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full" />
          </button>
          <button onClick={() => handleNav("contact")} className={linkClass}>
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenTestRide}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 h-4 border-white bg-white 0.04 hover:bg-white text-zinc-800 hover:text-black text-[11px] font-bold tracking-[0.16em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
          >
            <span>Book Test Ride</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white 0.06 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNav("home")}
              className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-200 hover:text-white py-2 border-b border-white 0.06 text-left bg-transparent border-x-0 border-t-0 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNav("about")}
              className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-200 hover:text-white py-2 border-b border-white/0.06 text-left bg-transparent border-x-0 border-t-0 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNav("models")}
              className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-200 hover:text-white py-2 border-b border-white0.06 text-left bg-transparent border-x-0 border-t-0 cursor-pointer"
            >
              Models
            </button>
            <button
              onClick={() => handleNav("contact")}
              className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-200 hover:text-white py-2 border-b border-white/0.06 text-left bg-transparent border-x-0 border-t-0 cursor-pointer"
            >
              Contact
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  closeMobileMenu();
                  if (onOpenTestRide) onOpenTestRide();
                }}
                className="w-full py-3 rounded-full bg-white text-black font-extrabold text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Book Test Ride</span>
                <ArrowUpRight size={25} />
              </button>
            </div>

            <div className="pt-4 mt-2 border-t border-white/0.08 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-zinc-300" />
                1-800-555-TRIUMPH
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-zinc-300" />
                Flagship Hub
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
