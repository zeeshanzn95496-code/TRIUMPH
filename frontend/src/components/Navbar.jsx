import { Bike, Search, Menu } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Bike size={32} />

        <h2>
          <span>TRIUMPH</span>
        </h2>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#bikes">Explore Bikes</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <Search size={30} />

        <button className="nav-btn">
          Explore Now
        </button>
      </div>

      <Menu className="mobile-menu" size={27} />

    </nav>
  );
}

export default Navbar;