import { Search, Menu } from "lucide-react";
import "./Navbar.css";

function TriumphLogo() {
  return (
    <svg
      className="triumph-logo"
      viewBox="0 0 48 48"
      width="38"
      height="38"
      fill="none"
      aria-label="Triumph logo"
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 10 L27 16 L33 17 L28.5 21.5 L29.5 28 L24 25 L18.5 28 L19.5 21.5 L15 17 L21 16 Z"
        fill="currentColor"
      />
      <text
        x="24"
        y="39"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="700"
        letterSpacing="1.5"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        TRIUMPH
      </text>
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <TriumphLogo />
        <h2>TRIUMPH</h2>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#showroom">Showroom</a>
        <a href="#models">Bikes</a>
        <a href="#specs">Specs</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <Search size={21} />
        <a href="#showroom" className="nav-btn">
          Explore Now
        </a>
      </div>

      <Menu className="mobile-menu" size={27} />
    </nav>
  );
}

export default Navbar;
