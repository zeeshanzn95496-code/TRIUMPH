import { useState } from "react";
import Navbar from "./components/Navbar";
import {
  Gauge,
  Zap,
  Flame,
  Shield,
  Star,
  X,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react";

// Single Flagship Model Data: Triumph Rocket 3 GT
const FLAGSHIP_MODEL = {
  name: "Triumph Rocket 3 GT",
  edition: "Flagship Chrome & Carbon Edition",
  price: "$24,495",
  msrpNote: "Starting MSRP • Financing Available from 2.99% APR",
  tagline: "The World's Largest Production Motorcycle Engine",
  overview:
    "An engineering masterpiece without equal. Housing a monumental 2,458cc triple engine, the Rocket 3 GT unleashes 221 Nm of torque for peerless acceleration, complemented by supreme touring ergonomics and bespoke British craftsmanship.",
  colors: [
    {
      name: "Phantom Black & Granite",
      hex: "#151515",
      accent: "#c9a962",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=85",
    },
    {
      name: "Silver Ice & Cranberry Red",
      hex: "#991b1b",
      accent: "#e11d48",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=85",
    },
    {
      name: "Sapphire Metallic & Aluminum",
      hex: "#1e3a8a",
      accent: "#38bdf8",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=85",
    },
  ],
  specs: [
    {
      label: "Displacement",
      value: "2,458 cc",
      detail: "Inline 3-Cylinder DOHC",
      icon: Gauge,
    },
    {
      label: "Peak Power",
      value: "165 HP",
      detail: "@ 6,000 RPM",
      icon: Zap,
    },
    {
      label: "Peak Torque",
      value: "221 Nm",
      detail: "@ 4,000 RPM (World Record)",
      icon: Flame,
    },
    {
      label: "Acceleration",
      value: "2.73s",
      detail: "0 - 100 km/h Sprint",
      icon: Shield,
    },
  ],
  engineeringPoints: [
    {
      title: "Monstrous 2.5L Triple Engine",
      description:
        "Featuring the world's largest engine on a production motorcycle, delivering unmatched rolling acceleration with an unmistakable deep triple roar.",
    },
    {
      title: "Brembo Stylema® Monobloc Calipers",
      description:
        "Cutting-edge superbike braking package with twin 320mm discs, optimized cornering ABS, and integrated traction control system.",
    },
    {
      title: "High-Spec Adjustable Showa Suspension",
      description:
        "47mm inverted Showa front cartridge forks and a fully adjustable Showa piggyback reservoir rear monoshock for supreme ride plushness.",
    },
    {
      title: "Next-Gen TFT Instrumentation",
      description:
        "Full-colour display offering personalized rider themes, Bluetooth phone connectivity, turn-by-turn navigation, and GoPro controls.",
    },
  ],
};

function App() {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isTestRideModalOpen, setIsTestRideModalOpen] = useState(false);
  const [testRideBooked, setTestRideBooked] = useState(false);
  const [activeTab, setActiveTab] = useState("specs");
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const currentColor = FLAGSHIP_MODEL.colors[selectedColorIndex];

  const handleTestRideSubmit = (e) => {
    e.preventDefault();
    setTestRideBooked(true);
    setTimeout(() => {
      setTestRideBooked(false);
      setIsTestRideModalOpen(false);
    }, 2800);
  };

  const toggleSound = () => {
    setIsPlayingSound(!isPlayingSound);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-[#e8e6e1] selection:bg-[#c9a962] selection:text-[#0b0b0d]">
      {/* 1. Top Premium Navbar with Home, Explore, Models, Contact */}
      <Navbar onOpenTestRide={() => setIsTestRideModalOpen(true)} />

      {/* 2. Hero Section - Flagship Single Model Reveal */}
      <header id="home" className="relative min-h-[92vh] flex items-center justify-center px-6 sm:px-12 overflow-hidden border-b border-[#22242a]">
        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#c9a962]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full py-12 z-10">
          {/* Top Pill & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a962]/40 bg-[#c9a962]/10 text-[#e6cf9a] text-[11px] font-bold tracking-widest uppercase">
              <Sparkles size={13} className="text-[#c9a962]" />
              {FLAGSHIP_MODEL.edition}
            </div>

            <span className="text-xs font-semibold text-[#8b8e96] tracking-wider uppercase">
              Handcrafted in Hinckley, UK
            </span>
          </div>

          {/* Model Title */}
          <div className="text-center md:text-left mb-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-none">
              ROCKET 3 <span className="gold-gradient-text">GT</span>
            </h1>
            <p className="text-sm sm:text-base text-[#c9a962] font-semibold tracking-widest uppercase mt-2">
              {FLAGSHIP_MODEL.tagline}
            </p>
          </div>

          {/* Featured Hero Bike Image Showcase */}
          <div className="relative w-full h-[400px] sm:h-[520px] rounded-2xl overflow-hidden border border-[#262831] bg-[#101115] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
            <img
              src={currentColor.image}
              alt={FLAGSHIP_MODEL.name}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-102"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-black/30" />

            {/* Price Badge on Image */}
            <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-lg border border-[#c9a962]/40 text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#8b8e96] block">Starting At</span>
              <span className="text-2xl font-black text-white">{FLAGSHIP_MODEL.price}</span>
            </div>

            {/* Audio Engine Sim Sound Button */}
            <button
              onClick={toggleSound}
              className="absolute top-6 left-6 inline-flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-semibold text-[#e8e6e1] hover:text-[#c9a962] hover:border-[#c9a962]/50 transition-colors cursor-pointer"
            >
              {isPlayingSound ? <Volume2 size={16} className="text-[#c9a962] animate-pulse" /> : <VolumeX size={16} />}
              <span>{isPlayingSound ? "Engine Audio Active" : "Hear 2.5L Exhaust"}</span>
            </button>

            {/* Interactive Color Switcher Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0e0f13]/85 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-[#8b8e96] font-bold">
                  Colorway:
                </span>
                <span className="text-xs font-semibold text-white">
                  {currentColor.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {FLAGSHIP_MODEL.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                      selectedColorIndex === idx
                        ? "scale-125 border-[#c9a962] shadow-[0_0_12px_rgba(201,169,98,0.7)]"
                        : "border-[#40434b] hover:border-white opacity-70"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsTestRideModalOpen(true)}
                  className="px-6 py-2.5 bg-[#c9a962] hover:bg-[#e6cf9a] text-[#0b0b0d] font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(201,169,98,0.4)]"
                >
                  Book Test Ride
                </button>
              </div>
            </div>
          </div>

          {/* Key Specs Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {FLAGSHIP_MODEL.specs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-[#121317] border border-[#22242a] p-5 rounded-xl flex items-center gap-4 hover:border-[#c9a962]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center text-[#c9a962] shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#81848a] uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-2xl font-black text-white block leading-tight">
                      {item.value}
                    </span>
                    <span className="text-[11px] text-[#a0a3aa]">
                      {item.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* 3. Explore Section - Deep Dive Engineering */}
      <section id="explore" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#22242a]">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a962] uppercase tracking-widest mb-2">
            <Shield size={14} />
            Pure British Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Explore Engineering
          </h2>
          <p className="text-sm sm:text-base text-[#9da0a6] mt-4 leading-relaxed">
            {FLAGSHIP_MODEL.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLAGSHIP_MODEL.engineeringPoints.map((point, index) => (
            <div
              key={point.title}
              className="p-8 rounded-xl bg-[#121317] border border-[#22242b] hover:border-[#c9a962]/40 transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="text-xs font-extrabold text-[#c9a962] uppercase tracking-widest mb-3">
                Phase 0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9da0a6] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Models Section - Full Specs & Features of the Rocket 3 GT */}
      <section id="model" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#22242a]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-[#c9a962] uppercase tracking-widest">
              Flagship Spec Sheet
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Rocket 3 GT Specifications
            </h2>
          </div>

          {/* Navigation Pill tabs */}
          <div className="flex items-center gap-2 bg-[#141519] p-1.5 rounded-lg border border-[#2b2d35]">
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "specs"
                  ? "bg-[#c9a962] text-[#0b0b0d]"
                  : "text-[#9da0a6] hover:text-white"
              }`}
            >
              Technical Specs
            </button>
            <button
              onClick={() => setActiveTab("equipment")}
              className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "equipment"
                  ? "bg-[#c9a962] text-[#0b0b0d]"
                  : "text-[#9da0a6] hover:text-white"
              }`}
            >
              Standard Tech
            </button>
          </div>
        </div>

        {activeTab === "specs" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#121316] p-6 rounded-xl border border-[#222429]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a962]">Engine Architecture</span>
              <p className="text-lg font-bold text-white mt-1">Inline 3-Cylinder, Liquid-Cooled</p>
              <p className="text-xs text-[#81848a] mt-2">DOHC, 4 valves per cylinder with ride-by-wire fuel injection.</p>
            </div>

            <div className="bg-[#121316] p-6 rounded-xl border border-[#222429]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a962]">Final Drive & Gearbox</span>
              <p className="text-lg font-bold text-white mt-1">6-Speed with Shaft Drive</p>
              <p className="text-xs text-[#81848a] mt-2">Maintenance-free shaft drive housed in a sculpted single-sided swingarm.</p>
            </div>

            <div className="bg-[#121316] p-6 rounded-xl border border-[#222429]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a962]">Chassis & Frame</span>
              <p className="text-lg font-bold text-white mt-1">Full Aluminium Spine</p>
              <p className="text-xs text-[#81848a] mt-2">Mass-optimized cast aluminium frame using the engine as a stressed member.</p>
            </div>

            <div className="bg-[#121316] p-6 rounded-xl border border-[#222429]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a962]">Fuel Capacity</span>
              <p className="text-lg font-bold text-white mt-1">18.0 Litres (4.75 US gal)</p>
              <p className="text-xs text-[#81848a] mt-2">Sculpted alloy tank with iconic brushed stainless steel Monroe strap.</p>
            </div>

            <div className="bg-[#121316] p-6 rounded-xl border border-[#222429]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a962]">Seat Height</span>
              <p className="text-lg font-bold text-white mt-1">750 mm (29.5 in)</p>
              <p className="text-xs text-[#81848a] mt-2">Sculpted touring saddle with adjustable pillion backrest.</p>
            </div>

            <div className="bg-[#121316] p-6 rounded-xl border border-[#222429]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a962]">Dry / Wet Weight</span>
              <p className="text-lg font-bold text-white mt-1">294 kg Wet (40 kg lighter)</p>
              <p className="text-xs text-[#81848a] mt-2">Revolutionary mass centralization for nimble cruiser agility.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Optimized Cornering ABS & Traction Control with IMU support",
              "Four Selectable Riding Modes: Road, Rain, Sport, Rider-Configurable",
              "All-LED Lighting with Signature Daytime Running Light (DRL)",
              "Hill Hold Control with automatic rear brake pressure",
              "Electronic Cruise Control with one-button activation",
              "Keyless Ignition, Steering Lock, and Fuel Filler Cap",
              "Under-Seat USB Power Socket with dedicated smartphone compartment",
              "Triumph Shift Assist (Bi-Directional Quickshifter) available",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-[#121317] rounded-lg border border-[#202228] text-xs sm:text-sm text-[#e0e3e9]"
              >
                <CheckCircle2 size={16} className="text-[#c9a962] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Contact Section - Official Showroom Portal */}
      <footer id="contact" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto text-xs text-[#8b8e96]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-[#202228]">
          <div>
            <div className="text-white font-black text-xl tracking-widest mb-3">
              <span className="gold-gradient-text">TRIUMPH</span> SHOWROOM
            </div>
            <p className="text-xs text-[#9da0a6] leading-relaxed mb-6">
              Experience the pinnacle of motorcycle engineering. Schedule your one-on-one VIP showroom consultation or private track test ride.
            </p>
            <button
              onClick={() => setIsTestRideModalOpen(true)}
              className="px-6 py-3 bg-[#c9a962] hover:bg-[#e6cf9a] text-[#0b0b0d] font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer"
            >
              Request Test Ride
            </button>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <Phone size={15} className="text-[#c9a962]" />
                <span>+1 (800) 555-TRIUMPH (874-8674)</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail size={15} className="text-[#c9a962]" />
                <span>concierge@triumph-showroom.com</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MapPin size={15} className="text-[#c9a962]" />
                <span>Hinckley Flagship Experience Center</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Showroom Hours
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between border-b border-[#1c1d22] pb-1.5">
                <span>Monday - Friday</span>
                <span className="text-white font-semibold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#1c1d22] pb-1.5">
                <span>Saturday</span>
                <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#c9a962] font-semibold">By VIP Appointment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6b6e76]">
          <p>© {new Date().getFullYear()} Triumph Motorcycles Showroom. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#explore" className="hover:text-white">Explore</a>
            <a href="#model" className="hover:text-white">Models</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {/* 6. VIP Test Ride Booking Modal */}
      {isTestRideModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141519] border border-[#30323a] rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setIsTestRideModalOpen(false);
                setTestRideBooked(false);
              }}
              className="absolute top-4 right-4 text-[#81848a] hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>

            {testRideBooked ? (
              <div className="text-center py-8">
                <CheckCircle2 size={54} className="text-[#52c41a] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Test Ride Scheduled!</h3>
                <p className="text-xs text-[#9da0a6] leading-relaxed">
                  Our VIP Concierge will contact you shortly to confirm your private track session for the{" "}
                  <strong className="text-white">{FLAGSHIP_MODEL.name}</strong>.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-[#c9a962] uppercase tracking-wider">
                  Official Showroom Concierge
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-1">
                  Schedule A VIP Test Ride
                </h3>
                <p className="text-xs text-[#81848a] mb-6">
                  Selected Model: <strong className="text-[#c9a962]">{FLAGSHIP_MODEL.name}</strong> ({currentColor.name})
                </p>

                <form onSubmit={handleTestRideSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#9da0a6] block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className="w-full bg-[#0d0e11] border border-[#262830] rounded px-3.5 py-2.5 text-sm text-white placeholder-[#555861] focus:outline-none focus:border-[#c9a962]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#9da0a6] block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#0d0e11] border border-[#262830] rounded px-3.5 py-2.5 text-sm text-white placeholder-[#555861] focus:outline-none focus:border-[#c9a962]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#9da0a6] block mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-[#0d0e11] border border-[#262830] rounded px-3.5 py-2.5 text-sm text-white placeholder-[#555861] focus:outline-none focus:border-[#c9a962]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#9da0a6] block mb-1">
                      Nearest Dealer Location
                    </label>
                    <select className="w-full bg-[#0d0e11] border border-[#262830] rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#c9a962]">
                      <option>Hinckley Flagship Experience Center</option>
                      <option>Downtown Triumph Hub</option>
                      <option>West Coast Triumph Pavilion</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 bg-[#c9a962] hover:bg-[#e6cf9a] text-[#0b0b0d] font-bold text-xs uppercase tracking-wider rounded cursor-pointer transition-colors"
                  >
                    Confirm VIP Reservation
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
