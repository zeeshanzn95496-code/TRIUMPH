import { useState } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

// Premium Triumph Heritage Badge SVG
function TriumphLogo() {
  return (
    <svg
      className="triumph-logo"
      viewBox="0 0 100 90"
      width="42"
      height="38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Triumph Motorcycles Logo"
    >
      <defs>
        <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e1b6" />
          <stop offset="45%" stopColor="#c9a962" />
          <stop offset="70%" stopColor="#8c703b" />
          <stop offset="100%" stopColor="#deb874" />
        </linearGradient>
      </defs>

      {/* Heritage Triangle Shield Outline */}
      <path
        d="M50 84 L10 16 C10 16 35 10 50 10 C65 10 90 16 90 16 Z"
        stroke="url(#goldMetallic)"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="rgba(201, 169, 98, 0.06)"
      />
      {/* Inner Accent Line */}
      <path
        d="M50 76 L18 20 C18 20 37 15 50 15 C63 15 82 20 82 20 Z"
        stroke="url(#goldMetallic)"
        strokeWidth="1.2"
        strokeOpacity="0.6"
        fill="none"
      />
      {/* Stylized Center 'T' Icon */}
      <path
        d="M33 30 L67 30 M50 30 L50 64"
        stroke="url(#goldMetallic)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Central Star Crest */}
      <circle cx="50" cy="22" r="3" fill="url(#goldMetallic)" />
    </svg>
  );
}

function Navbar({ onOpenTestRide }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar-container">
      <div className="navbar">
        {/* Brand Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <TriumphLogo />
          <div className="brand-text">
            <h2>TRIUMPH</h2>
            <span className="brand-sub">MOTORCYCLES • 1902</span>
          </div>
        </a>

        {/* Navigation Links: Home, Explore, Models, Contact */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#model">Models</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <button
            onClick={onOpenTestRide}
            className="nav-btn"
          >
            <span>Book Test Ride</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#explore" onClick={closeMenu}>Explore</a>
          <a href="#model" onClick={closeMenu}>Models</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button
            className="mobile-cta-btn"
            onClick={() => {
              closeMenu();
              if (onOpenTestRide) onOpenTestRide();
            }}
          >
            Book Test Ride
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
