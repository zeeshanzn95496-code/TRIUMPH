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
  ArrowUpRight,
  Sparkles,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";

const BIKES = [
  {
    id: "rocket-3-gt",
    name: "Triumph Rocket 3 GT",
    tagline: "The Ultimate Muscle Roadster",
    category: "Rocket",
    price: "$24,495",
    engine: "2,458 cc Triple",
    power: "165 HP @ 6,000 rpm",
    torque: "221 Nm @ 4,000 rpm",
    weight: "294 kg",
    topSpeed: "235 km/h",
    accent: "#c9a962",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Equipped with the world's largest production motorcycle engine, delivering unmatched acceleration, muscular presence, and supreme touring comfort.",
    features: ["Brembo Stylema Brakes", "Showa Adjustable Suspension", "4 Riding Modes", "Cornering ABS & Traction"],
  },
  {
    id: "street-triple-765-rs",
    name: "Street Triple 765 RS",
    tagline: "Moto2™ Derived Precision",
    category: "Roadster",
    price: "$12,795",
    engine: "765 cc Triple",
    power: "128 HP @ 12,000 rpm",
    torque: "80 Nm @ 9,500 rpm",
    weight: "188 kg",
    topSpeed: "250 km/h",
    accent: "#ff4d4f",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    description:
      "The definitive street fighter. Powered by Moto2™ race engine evolution, offering lightning throttle response and razor-sharp handling.",
    features: ["Öhlins STX40 Rear Shock", "Brembo Stylema Calipers", "Track Lap Timer", "Triumph Shift Assist"],
  },
  {
    id: "bonneville-bobber",
    name: "Bonneville Bobber",
    tagline: "Pure Stripped-Back Attitude",
    category: "Modern Classic",
    price: "$13,995",
    engine: "1,200 cc High Torque Twin",
    power: "77 HP @ 6,100 rpm",
    torque: "106 Nm @ 4,000 rpm",
    weight: "251 kg",
    topSpeed: "190 km/h",
    accent: "#e6cf9a",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    description:
      "Iconic custom silhouette, floating aluminum single seat, and torque-rich 1200cc engine delivering an authentic hot-rod roar.",
    features: ["Adjustable Floating Seat", "Twin Brembo Front Discs", "Show-stopping Hardtail Look", "Torque Assist Clutch"],
  },
  {
    id: "tiger-900-rally-pro",
    name: "Tiger 900 Rally Pro",
    tagline: "Go Anywhere Adventure",
    category: "Adventure",
    price: "$17,395",
    engine: "888 cc T-Plane Triple",
    power: "106 HP @ 9,500 rpm",
    torque: "90 Nm @ 6,850 rpm",
    weight: "228 kg",
    topSpeed: "205 km/h",
    accent: "#52c41a",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Built to conquer off-road trails and cross continents with effortless ease. The innovative T-Plane crank delivers bottom-end tractor tractability.",
    features: ["Showa 240mm Travel Off-Road Suspension", "Spoke Tubeless Wheels", "Heated Seats & Grips", "6 Riding Modes"],
  },
  {
    id: "speed-400",
    name: "Triumph Speed 400",
    tagline: "Modern Classic Roadster DNA",
    category: "Modern Classic",
    price: "$4,995",
    engine: "398 cc Liquid-Cooled Single",
    power: "39.5 HP @ 8,000 rpm",
    torque: "37.5 Nm @ 6,500 rpm",
    weight: "170 kg",
    topSpeed: "160 km/h",
    accent: "#1890ff",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
    description:
      "Accessible Triumph character, unmatched build quality, agile chassis, and spirited responsive power made for city streets and twisty backroads.",
    features: ["Upside-down 43mm Big Piston Forks", "Switchable Traction Control", "All-LED Lighting", "Classic Analog & LCD Console"],
  },
  {
    id: "scrambler-400x",
    name: "Scrambler 400 X",
    tagline: "Rugged Style & All-Road Capability",
    category: "Adventure",
    price: "$5,595",
    engine: "398 cc Liquid-Cooled Single",
    power: "39.5 HP @ 8,000 rpm",
    torque: "37.5 Nm @ 6,500 rpm",
    weight: "179 kg",
    topSpeed: "155 km/h",
    accent: "#fa8c16",
    image: "https://images.unsplash.com/photo-1558981420-87aa9210d992?auto=format&fit=crop&w=1200&q=80",
    description:
      "Purposeful scrambler styling with longer travel suspension, 19-inch front wheel, wide handlebars, and protective off-road accessories.",
    features: ["19-inch Front Wheel", "Switchable ABS for Off-Road", "Headlight Grill & Handguards", "High Ground Clearance"],
  },
];

const CATEGORIES = ["All", "Roadster", "Modern Classic", "Adventure", "Rocket"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBikeModal, setActiveBikeModal] = useState(null);
  const [testRideBike, setTestRideBike] = useState(null);
  const [testRideBooked, setTestRideBooked] = useState(false);

  const filteredBikes = BIKES.filter((bike) => {
    const matchesCategory =
      selectedCategory === "All" || bike.category === selectedCategory;
    const matchesSearch =
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.engine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTestRideSubmit = (e) => {
    e.preventDefault();
    setTestRideBooked(true);
    setTimeout(() => {
      setTestRideBooked(false);
      setTestRideBike(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-[#e8e6e1] selection:bg-[#c9a962] selection:text-[#0b0b0d]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-12 overflow-hidden border-b border-[#26262b]">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c9a962]/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto text-center z-10 py-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a962]/40 bg-[#c9a962]/10 text-[#e6cf9a] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} className="text-[#c9a962]" />
            Flagship 2025/2026 Collection
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-none mb-6">
            Engineered For The{" "}
            <span className="gold-gradient-text block mt-2">
              Extraordinary
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9da0a6] leading-relaxed mb-10">
            Immerse yourself in precision British engineering, iconic design, and peerless performance.
            Explore our championship-winning roadsters, modern classics, and grand tourers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#showroom"
              className="px-8 py-4 bg-[#c9a962] hover:bg-[#e6cf9a] text-[#0b0b0d] font-bold text-sm uppercase tracking-wider rounded transition-all duration-300 shadow-[0_0_25px_rgba(201,169,98,0.35)]"
            >
              Explore Showroom
            </a>
            <button
              onClick={() => setTestRideBike(BIKES[0])}
              className="px-8 py-4 bg-transparent hover:bg-[#1a1b1f] text-[#e8e6e1] hover:text-[#c9a962] font-semibold text-sm uppercase tracking-wider rounded border border-[#36383f] hover:border-[#c9a962] transition-all duration-300"
            >
              Book Test Ride
            </button>
          </div>

          {/* Quick Heritage Ribbons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[#1d1e22] text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#c9a962]">120+</p>
              <p className="text-xs uppercase tracking-wider text-[#81848a]">Years of Heritage</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#c9a962]">2,458 cc</p>
              <p className="text-xs uppercase tracking-wider text-[#81848a]">World's Largest Engine</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#c9a962]">Moto2™</p>
              <p className="text-xs uppercase tracking-wider text-[#81848a]">Exclusive Engine Partner</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#c9a962]">2 Years</p>
              <p className="text-xs uppercase tracking-wider text-[#81848a]">Unlimited Mileage Warranty</p>
            </div>
          </div>
        </div>
      </header>

      {/* Showroom & Models Section */}
      <section id="showroom" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a962] uppercase tracking-widest mb-2">
              <Flame size={14} />
              Current Lineup
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Vehicle Showroom
            </h2>
          </div>

          {/* Search bar inside showroom */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search by name, cc, style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131417] border border-[#2b2d33] rounded px-4 py-2.5 text-sm text-[#e8e6e1] placeholder-[#666970] focus:outline-none focus:border-[#c9a962] transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <SlidersHorizontal size={16} className="text-[#81848a] mr-2 shrink-0" />
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#c9a962] text-[#0b0b0d] shadow-[0_0_15px_rgba(201,169,98,0.3)]"
                  : "bg-[#141518] text-[#9da0a6] hover:text-[#e8e6e1] border border-[#26262b] hover:border-[#40434b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bike Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className="group bg-[#121316] rounded-lg border border-[#222429] hover:border-[#c9a962]/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:-translate-y-1"
            >
              {/* Bike Image Container */}
              <div className="relative h-64 w-full bg-[#181a1f] overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/30" />
                
                {/* Badge Category */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded text-[11px] font-bold uppercase tracking-wider text-[#c9a962] border border-[#c9a962]/30">
                  {bike.category}
                </span>

                {/* Price Tag */}
                <span className="absolute bottom-4 right-4 text-lg font-black text-white bg-black/80 px-3 py-1 rounded border border-white/10">
                  {bike.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c9a962] transition-colors">
                    {bike.name}
                  </h3>
                  <p className="text-xs text-[#81848a] tracking-wide mb-4 mt-0.5">
                    {bike.tagline}
                  </p>

                  <p className="text-xs text-[#a0a3aa] line-clamp-2 leading-relaxed mb-6">
                    {bike.description}
                  </p>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#202227] text-xs">
                    <div className="flex items-center gap-2 text-[#9da0a6]">
                      <Gauge size={14} className="text-[#c9a962]" />
                      <span>{bike.engine}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#9da0a6]">
                      <Zap size={14} className="text-[#c9a962]" />
                      <span>{bike.power}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#9da0a6]">
                      <Flame size={14} className="text-[#c9a962]" />
                      <span>{bike.torque}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#9da0a6]">
                      <Shield size={14} className="text-[#c9a962]" />
                      <span>{bike.topSpeed}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-6 mt-2">
                  <button
                    onClick={() => setActiveBikeModal(bike)}
                    className="flex-1 py-2.5 px-3 rounded bg-[#1c1d22] hover:bg-[#25272e] border border-[#2d3038] hover:border-[#c9a962] text-xs font-bold uppercase tracking-wider text-[#e8e6e1] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    View Specs
                    <ArrowUpRight size={14} />
                  </button>
                  <button
                    onClick={() => setTestRideBike(bike)}
                    className="py-2.5 px-4 rounded bg-[#c9a962] hover:bg-[#e6cf9a] text-[#0b0b0d] text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Test Ride
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <div className="py-20 text-center text-[#81848a]">
            <p className="text-lg font-semibold">No vehicles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-[#c9a962] uppercase tracking-wider underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Engineering Heritage Spotlight */}
      <section id="specs" className="py-20 bg-[#0e0f12] border-y border-[#1f2025]">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c9a962] uppercase tracking-widest">
              Performance DNA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mt-2 mb-4">
              Iconic Triple Engine Heritage
            </h2>
            <p className="text-sm text-[#9da0a6] leading-relaxed">
              Every Triumph machine represents an obsessive pursuit of the perfect ride.
              From our race-honed Moto2™ Triple to the world’s largest displacement cruiser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-[#141519] border border-[#22242a]">
              <div className="w-12 h-12 rounded bg-[#c9a962]/10 border border-[#c9a962]/30 flex items-center justify-center text-[#c9a962] mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Instant Triple Power</h3>
              <p className="text-xs text-[#9da0a6] leading-relaxed">
                Combining bottom-end twin grunt with top-end four-cylinder scream for the ultimate usable power band.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-[#141519] border border-[#22242a]">
              <div className="w-12 h-12 rounded bg-[#c9a962]/10 border border-[#c9a962]/30 flex items-center justify-center text-[#c9a962] mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Race Chassis Dynamics</h3>
              <p className="text-xs text-[#9da0a6] leading-relaxed">
                Fitted with Showa, Öhlins, and Brembo components crafted to provide intuitive confidence at any lean angle.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-[#141519] border border-[#22242a]">
              <div className="w-12 h-12 rounded bg-[#c9a962]/10 border border-[#c9a962]/30 flex items-center justify-center text-[#c9a962] mb-6">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Craftsmanship & Detail</h3>
              <p className="text-xs text-[#9da0a6] leading-relaxed">
                Hand-painted coach lining, machined aluminium brackets, and deep lustrous finishes define every build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Details Modal */}
      {activeBikeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#131418] border border-[#33353d] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveBikeModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-[#a0a3aa] hover:text-white flex items-center justify-center border border-white/10 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="relative h-60 w-full bg-[#1b1c22]">
              <img
                src={activeBikeModal.image}
                alt={activeBikeModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131418] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-2.5 py-1 bg-[#c9a962] text-[#0b0b0d] text-[10px] font-black uppercase rounded tracking-wider">
                  {activeBikeModal.category}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {activeBikeModal.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs text-[#a0a3aa] leading-relaxed mb-6">
                {activeBikeModal.description}
              </p>

              <h4 className="text-xs font-bold text-[#c9a962] uppercase tracking-wider mb-3">
                Full Technical Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 bg-[#0c0d10] p-4 rounded-lg border border-[#22242a] text-xs">
                <div>
                  <span className="text-[10px] uppercase text-[#73767e] block">Engine</span>
                  <span className="font-semibold text-white">{activeBikeModal.engine}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#73767e] block">Max Power</span>
                  <span className="font-semibold text-white">{activeBikeModal.power}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#73767e] block">Max Torque</span>
                  <span className="font-semibold text-white">{activeBikeModal.torque}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#73767e] block">Wet Weight</span>
                  <span className="font-semibold text-white">{activeBikeModal.weight}</span>
                </div>
              </div>

              <h4 className="text-xs font-bold text-[#c9a962] uppercase tracking-wider mb-3">
                Key Standard Equipment
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#cfd2d8] mb-6">
                {activeBikeModal.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#c9a962] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-[#22242a]">
                <div>
                  <span className="text-[10px] uppercase text-[#73767e] block">MSRP From</span>
                  <span className="text-xl font-black text-white">{activeBikeModal.price}</span>
                </div>
                <button
                  onClick={() => {
                    const bike = activeBikeModal;
                    setActiveBikeModal(null);
                    setTestRideBike(bike);
                  }}
                  className="px-6 py-2.5 bg-[#c9a962] hover:bg-[#e6cf9a] text-[#0b0b0d] text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-colors"
                >
                  Book A Test Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Test Ride Modal */}
      {testRideBike && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141519] border border-[#30323a] rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setTestRideBike(null);
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
                  Our dealership representative will contact you shortly to confirm your VIP test ride slot for the{" "}
                  <strong className="text-white">{testRideBike.name}</strong>.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-[#c9a962] uppercase tracking-wider">
                  Official Showroom
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-1">
                  Schedule A Test Ride
                </h3>
                <p className="text-xs text-[#81848a] mb-6">
                  Selected Model: <strong className="text-white">{testRideBike.name}</strong>
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
                      <option>Downtown Triumph Experience Center</option>
                      <option>West Coast Flagship Showroom</option>
                      <option>Metro Triumph Motorcycle Hub</option>
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

      {/* Footer */}
      <footer id="contact" className="bg-[#08080a] border-t border-[#1a1b1f] py-16 px-6 sm:px-12 text-xs text-[#72757c]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 text-white font-extrabold text-lg tracking-widest mb-3">
              <span className="text-[#c9a962]">TRIUMPH</span> SHOWROOM
            </div>
            <p className="max-w-sm text-[#81848a] leading-relaxed">
              Official vehicle showroom & dealership portal. Discover our legendary range of precision-crafted British motorcycles.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold uppercase text-white tracking-wider mb-3">Lineup</h5>
              <ul className="space-y-2">
                <li><a href="#showroom" className="hover:text-[#c9a962]">Roadsters</a></li>
                <li><a href="#showroom" className="hover:text-[#c9a962]">Modern Classics</a></li>
                <li><a href="#showroom" className="hover:text-[#c9a962]">Adventure</a></li>
                <li><a href="#showroom" className="hover:text-[#c9a962]">Rocket 3</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold uppercase text-white tracking-wider mb-3">Services</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-[#c9a962]">Book Test Ride</a></li>
                <li><a href="#specs" className="hover:text-[#c9a962]">Genuine Parts</a></li>
                <li><a href="#specs" className="hover:text-[#c9a962]">Custom Accessories</a></li>
                <li><a href="#home" className="hover:text-[#c9a962]">Financing</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold uppercase text-white tracking-wider mb-3">Showroom</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-1.5"><MapPin size={12} /> Flagship Hub</li>
                <li className="flex items-center gap-1.5"><Phone size={12} /> +1 (800) 555-BIKE</li>
                <li className="flex items-center gap-1.5"><Calendar size={12} /> Mon-Sat: 9AM - 8PM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#151619] text-center text-[#595b61]">
          © {new Date().getFullYear()} Vehicle Showroom. All rights reserved. Triumph is a registered trademark.
        </div>
      </footer>
    </div>
  );
}

export default App;
