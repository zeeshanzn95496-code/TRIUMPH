import { Star, StarHalf, Truck, BadgeCheck, ChevronRight } from "lucide-react";

const MODELS = [
  {
    id: "speed-400",
    brand: "Triumph Motorcycles",
    name: "Triumph Speed 400 — 2025 Edition, Jet Black",
    badge: "Best Seller",
    rating: 4.8,
    reviews: "2,417",
    price: "$5,495",
    mrp: "$6,200",
    discount: "11% off",
    emi: "EMI from $229/mo",
    tag: "398cc Single • 40 PS • 6-Speed • ABS",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
  },
];

function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5 text-[#febd69]">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <Star key={i} size={14} fill="currentColor" strokeWidth={0} />;
        if (i === full && half)
          return <StarHalf key={i} size={14} fill="currentColor" strokeWidth={0} />;
        return <Star key={i} size={14} className="text-zinc-600" strokeWidth={0} />;
      })}
    </div>
  );
}

function ProductCard({ model, onTestRide }) {
  return (
    <div className="group bg-[#141419] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/25 hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-zinc-950">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-[#febd69] text-black text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-sm">
          {model.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-zinc-500">
          {model.brand}
        </span>

        <h3 className="text-base font-semibold text-zinc-100 leading-snug mt-1 line-clamp-2 min-h-[2.6em]">
          {model.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <Stars rating={model.rating} />
          <span className="text-xs font-bold text-[#febd69]">{model.rating}</span>
          <span className="text-xs text-zinc-500">({model.reviews})</span>
        </div>

        {/* Specs tag */}
        <p className="text-[11px] text-zinc-500 mt-2 tracking-wide">{model.tag}</p>

        {/* Price row */}
        <div className="mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{model.price}</span>
            <span className="text-sm text-zinc-500 line-through">{model.mrp}</span>
            <span className="text-xs font-bold text-emerald-400">{model.discount}</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-0.5">{model.emi}</p>
        </div>

        {/* Delivery-ish line */}
        <div className="flex items-center gap-1.5 mt-3 text-[11px] text-zinc-400">
          <Truck size={13} className="text-zinc-500" />
          <span>Free test ride at your nearest showroom</span>
        </div>

        {/* CTA */}
        <button
          onClick={onTestRide}
          className="mt-4 w-full py-2.5 rounded-full bg-[#ffd814] hover:bg-[#f7ca00] text-black text-xs font-extrabold tracking-[0.14em] uppercase transition-colors cursor-pointer flex items-center justify-center gap-1.5"
        >
          <BadgeCheck size={14} />
          Book Test Ride
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function Models({ onTestRide }) {
  return (
    <section id="models" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 sm:mb-12">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 block mb-1">
          Our Models
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          Ride The Legend
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {MODELS.map((model) => (
          <ProductCard key={model.id} model={model} onTestRide={onTestRide} />
        ))}
      </div>
    </section>
  );
}

export default Models;
