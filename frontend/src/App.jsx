import { useState } from "react";
import Navbar from "./components/Navbar";
import {
  Gauge,
  Zap,
  Flame,
  Shield,
  X,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Volume2,
  VolumeX,
  Compass,
  Cpu,
  Layers,
} from "lucide-react";

// Single Flagship Model: Triumph Rocket 3 GT
const FLAGSHIP = {
  name: "Triumph Rocket 3 GT",
  tagline: "The World's Largest Production Motorcycle Engine",
  edition: "2025 Flagship Edition • Hinckley, UK",
  price: "$24,495",
  msrpNote: "MSRP Starting from • Flexible Financing from 2.99% APR",
  description:
    "An engineering icon with monumental road presence. Powered by a record-breaking 2,458cc triple engine, the Rocket 3 GT delivers unprecedented torque, peerless cruising acceleration, and bespoke British craftsmanship.",
  colors: [
    {
      name: "Phantom Black & Granite",
      hex: "#161618",
      borderHex: "#44464f",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1800&q=85",
    },
    {
      name: "Carnival Red & Sapphire",
      hex: "#991b1b",
      borderHex: "#ef4444",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=85",
    },
    {
      name: "Silver Ice & Aluminum",
      hex: "#4b5563",
      borderHex: "#9ca3af",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=85",
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
      label: "Max Power",
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
  pillars: [
    {
      icon: Compass,
      title: "2.5L High-Output Triple",
      desc: "Massive low-end grunt combined with a soaring top end, delivering a spine-tingling acoustic soundtrack.",
    },
    {
      icon: Shield,
      title: "Brembo Stylema® Brakes",
      desc: "Top-tier monobloc superbike calipers with twin 320mm discs for instant, effortless stopping power.",
    },
    {
      icon: Layers,
      title: "Showa Fully-Adjustable",
      desc: "47mm inverted Showa cartridge front forks and piggyback reservoir rear monoshock tuned for plush touring.",
    },
    {
      icon: Cpu,
      title: "Optimized Cornering ABS",
      desc: "State-of-the-art Inertial Measurement Unit (IMU) continuously optimizes braking and traction control.",
    },
  ],
  detailedSpecs: [
    {
      category: "Engine & Transmission",
      items: [
        { label: "Type", val: "Liquid-cooled, 12 valve, DOHC, inline 3-cylinder" },
        { label: "Capacity", val: "2,458 cc" },
        { label: "Bore x Stroke", val: "110.2 mm x 85.9 mm" },
        { label: "Compression", val: "10.8:1" },
        { label: "Exhaust", val: "Stainless 3-into-1 headers with arrow silencers" },
        { label: "Final Drive", val: "Shaft drive with bevel box" },
        { label: "Clutch", val: "Wet, multi-plate torque assist, hydraulic" },
        { label: "Gearbox", val: "6-speed helical gear train" },
      ],
    },
    {
      category: "Chassis & Dimensions",
      items: [
        { label: "Frame", val: "Full aluminium spine structure" },
        { label: "Front Wheel", val: "Cast aluminium 17 x 3.5 in" },
        { label: "Rear Wheel", val: "Cast aluminium 16 x 7.5 in" },
        { label: "Front Suspension", val: "Showa 47mm upside-down 1-way adjustable" },
        { label: "Rear Suspension", val: "Fully adjustable Showa piggyback monoshock" },
        { label: "Fuel Capacity", val: "18.0 Litres (4.75 US gal)" },
        { label: "Seat Height", val: "750 mm (29.5 in)" },
        { label: "Dry Weight", val: "291 kg (optimized mass centralization)" },
      ],
    },
  ],
  equipment: [
    "Full-colour 2nd Generation TFT Instrument Display",
    "4 Selectable Riding Modes: Road, Rain, Sport, Rider-Configurable",
    "Triumph Shift Assist (Up & Down Quickshifter)",
    "Hill Hold Control with automatic gradient detection",
    "One-touch Electronic Cruise Control",
    "Keyless Ignition & Electronic Steering Lock",
    "All-LED Headlights with Signature Daytime Running Light (DRL)",
    "Heated Grips with 2 selectable warmth levels",
    "Under-seat USB charging socket with phone compartment",
    "Sculpted two-piece touring saddle with brushed alloy backrest",
  ],
};

function App() {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("specs");
  const [isTestRideModalOpen, setIsTestRideModalOpen] = useState(false);
  const [testRideBooked, setTestRideBooked] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  const currentColor = FLAGSHIP.colors[selectedColorIndex];

  const handleTestRideSubmit = (e) => {
    e.preventDefault();
    setTestRideBooked(true);
    setTimeout(() => {
      setTestRideBooked(false);
      setIsTestRideModalOpen(false);
    }, 2600);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-zinc-100 font-sans antialiased selection:bg-white selection:text-black">
      {/* 1. Global Fixed Premium Navbar */}
      <Navbar onOpenTestRide={() => setIsTestRideModalOpen(true)} />

      {/* 2. Hero Section - Single Model Showcase */}
      <section
        id="home"
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[450px] bg-red-600/[0.04] sm:bg-white/[0.03] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

        {/* Top Heritage Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-300 w-fit">
            <Sparkles size={12} className="text-zinc-200" />
            {FLAGSHIP.edition}
          </div>

          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-500">
            Handcrafted in England
          </span>
        </div>

        {/* Title Header */}
        <div className="mb-6 sm:mb-8 text-left">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none text-white">
            ROCKET 3 <span className="text-zinc-400 font-light">GT</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.16em] uppercase text-zinc-400 mt-2 sm:mt-3">
            {FLAGSHIP.tagline}
          </p>
        </div>

        {/* Motorcycle Cinematic Showcase */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0d0e13] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          {/* Main Visual Image */}
          <div className="relative h-[250px] sm:h-[380px] md:h-[480px] lg:h-[540px] w-full overflow-hidden bg-zinc-950">
            <img
              src={currentColor.image}
              alt={FLAGSHIP.name}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
            />
            {/* Smooth Top & Bottom Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-transparent to-black/30 pointer-events-none" />

            {/* Floating Price Tag */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg border border-white/10 text-right">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-400 block">
                MSRP From
              </span>
              <span className="text-lg sm:text-2xl font-black text-white leading-tight">
                {FLAGSHIP.price}
              </span>
            </div>

            {/* Exhaust Audio Sim */}
            <button
              onClick={() => setSoundActive(!soundActive)}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-white/10 text-[11px] font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              {soundActive ? (
                <Volume2 size={15} className="text-red-500 animate-pulse" />
              ) : (
                <VolumeX size={15} />
              )}
              <span className="hidden sm:inline">
                {soundActive ? "2.5L Exhaust Active" : "Simulate Exhaust Audio"}
              </span>
            </button>
          </div>

          {/* Color Switcher Strip (Responsive & Touch-Friendly) */}
          <div className="bg-[#0b0c10] border-t border-white/[0.06] p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-400">
                Colorway:
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white">
                {currentColor.name}
              </span>
            </div>

            {/* Color Swatch Circles */}
            <div className="flex items-center gap-3">
              {FLAGSHIP.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                    selectedColorIndex === idx
                      ? "ring-2 ring-white scale-110 shadow-lg"
                      : "opacity-60 hover:opacity-100 ring-1 ring-white/20"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                >
                  {selectedColorIndex === idx && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </button>
              ))}
            </div>

            {/* Action Button */}
            <div className="w-full md:w-auto flex items-center gap-3">
              <button
                onClick={() => setIsTestRideModalOpen(true)}
                className="w-full md:w-auto px-6 py-2.5 rounded-full bg-white text-black font-extrabold text-xs tracking-[0.16em] uppercase hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
              >
                Book Test Ride
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Performance Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {FLAGSHIP.specs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-[#0e0f14] border border-white/[0.06] hover:border-white/20 rounded-xl p-4 sm:p-5 transition-colors"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 mb-3">
                  <Icon size={18} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-400 block mb-1">
                  {item.label}
                </span>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight block">
                  {item.value}
                </span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">
                  {item.detail}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Explore Section - Engineering Breakdown */}
      <section
        id="explore"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
      >
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 block mb-2">
            Engineering Superiority
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Built Without Compromise
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 mt-4 leading-relaxed">
            {FLAGSHIP.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FLAGSHIP.pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#0e0f14] border border-white/[0.06] hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-5">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 block mb-2">
                    0{i + 1} // Precision
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Models Section - Full Specs & Features */}
      <section
        id="models"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 block mb-1">
              Technical Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Rocket 3 GT Anatomy
            </h2>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                activeTab === "specs"
                  ? "bg-white text-black shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("equipment")}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                activeTab === "equipment"
                  ? "bg-white text-black shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Standard Tech
            </button>
          </div>
        </div>

        {/* Tab 1: Technical Specs */}
        {activeTab === "specs" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {FLAGSHIP.detailedSpecs.map((group) => (
              <div
                key={group.category}
                className="bg-[#0e0f14] rounded-2xl border border-white/[0.06] p-6 sm:p-8"
              >
                <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-zinc-300 pb-4 mb-4 border-b border-white/[0.08]">
                  {group.category}
                </h3>
                <div className="divide-y divide-white/[0.04]">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm"
                    >
                      <span className="text-zinc-400 font-medium">{item.label}</span>
                      <span className="text-white font-semibold sm:text-right">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Standard Equipment */}
        {activeTab === "equipment" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {FLAGSHIP.equipment.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 sm:p-5 rounded-xl bg-[#0e0f14] border border-white/[0.06] text-xs sm:text-sm text-zinc-200"
              >
                <CheckCircle2 size={16} className="text-white shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Contact Section - Official Showroom Portal */}
      <footer
        id="contact"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08] text-xs text-zinc-400"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 mb-16 pb-12 border-b border-white/[0.06]">
          {/* Column 1: Showroom Info */}
          <div>
            <div className="text-white font-black text-xl tracking-[0.2em] mb-3">
              TRIUMPH MOTORCYCLES
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              Experience the unmatched force of British motorcycling. Book an exclusive private appointment or track session with our product specialists.
            </p>
            <button
              onClick={() => setIsTestRideModalOpen(true)}
              className="px-6 py-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white text-zinc-200 hover:text-black font-bold text-xs tracking-[0.14em] uppercase transition-all cursor-pointer"
            >
              Request Consultation
            </button>
          </div>

          {/* Column 2: Direct Contacts */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-[0.18em] uppercase mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-3.5">
              <a
                href="tel:18005558748"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-zinc-400" />
                <span>1-800-555-TRIUMPH (874-8674)</span>
              </a>
              <a
                href="mailto:concierge@triumph-experience.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-zinc-400" />
                <span>concierge@triumph-experience.com</span>
              </a>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin size={15} className="text-zinc-400 shrink-0" />
                <span>Hinckley Flagship Experience Center, UK</span>
              </div>
            </div>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-[0.18em] uppercase mb-4">
              Showroom Hours
            </h4>
            <div className="space-y-2.5">
              <div className="flex justify-between pb-1.5 border-b border-white/[0.04]">
                <span>Monday – Friday</span>
                <span className="text-white font-semibold">09:00 – 19:00</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-white/[0.04]">
                <span>Saturday</span>
                <span className="text-white font-semibold">09:00 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-zinc-300 font-semibold">VIP Appointment Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} Triumph Motorcycles. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#explore" className="hover:text-white transition-colors">Explore</a>
            <a href="#models" className="hover:text-white transition-colors">Models</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* 6. VIP Test Ride Booking Modal */}
      {isTestRideModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#101117] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsTestRideModalOpen(false);
                setTestRideBooked(false);
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {testRideBooked ? (
              <div className="text-center py-8">
                <CheckCircle2 size={50} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-white mb-2">
                  Session Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Our showroom manager will contact you within 2 business hours to finalize your private test ride for the{" "}
                  <strong className="text-white">{FLAGSHIP.name}</strong>.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 block mb-1">
                  Exclusive Invitation
                </span>
                <h3 className="text-2xl font-black text-white mb-1">
                  Schedule A VIP Test Ride
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Selected Model: <strong className="text-white">{FLAGSHIP.name}</strong> ({currentColor.name})
                </p>

                <form onSubmit={handleTestRideSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className="w-full bg-[#090a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#090a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-[#090a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      Dealership Location
                    </label>
                    <select className="w-full bg-[#090a0d] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors">
                      <option>Hinckley Flagship Experience Center (UK)</option>
                      <option>London Mayfair Triumph Studio</option>
                      <option>New York Metro Pavilion</option>
                      <option>Los Angeles Flagship Hub</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 rounded-lg bg-white text-black font-extrabold text-xs tracking-[0.16em] uppercase hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
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
