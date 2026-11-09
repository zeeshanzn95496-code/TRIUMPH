import { Star, StarHalf, Truck, BadgeCheck, ChevronRight } from "lucide-react";
import "./Models.css";
import scramblerImg from"./images/scrambler.jpg";
import speed400 from"./images/speed400.webp"

export const MODELS = [
  {
    id: "speed-400",
    brand: "Triumph Motorcycles",
    name: "Triumph Speed 400 — 2025 Edition",
    badge: "Best Seller",
    rating: 4.8,
    reviews: "2,417",
    price: "$5,495",
    mrp: "$6,200",
    discount: "11% off",
    emi: "EMI from $229/mo",
    tag: "398cc Single • 40 PS • 6-Speed • ABS",
    image:speed400,
  },
  {
    id: "scrambler-400X",
    brand: "Triumph Motorcycles",
    name: "Triumph Scrambler 400X — 2025 Edition",
    badge: "Best adventure in segment",
    rating: 4.8,
    reviews: "1,890",
    price: "$6,000",
    mrp: "$6,700",
    discount: "13% off",
    emi: "EMI from $260/mo",
    tag: "398cc Single • 40 PS • 6-Speed • switchable-ABS",
    image:scramblerImg,
  },
];

function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="model-stars">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full)
          return <Star key={i} size={14} fill="currentColor" strokeWidth={0} />;
        if (i === full && half)
          return <StarHalf key={i} size={14} fill="currentColor" strokeWidth={0} />;
        return <Star key={i} size={14} className="star-empty" strokeWidth={0} />;
      })}
    </div>
  );
}

function ProductCard({ model, onTestRide, onSelect }) {
  return (
    <div className="model-card" onClick={() => onSelect?.(model)} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.(model)}
    >
      {/* Image */}
      <div className="model-card__image">
        <img src={model.image} alt={model.name} />
        <span className="model-card__badge">{model.badge}</span>
      </div>

      {/* Body */}
      <div className="model-card__body">
        <span className="model-card__brand">{model.brand}</span>

        <h3 className="model-card__title">{model.name}</h3>

        {/* Rating */}
        <div className="model-card__rating">
          <Stars rating={model.rating} />
          <span className="model-card__rating-value">{model.rating}</span>
          <span className="model-card__reviews">({model.reviews})</span>
        </div>

        {/* Specs tag */}
        <p className="model-card__tag">{model.tag}</p>

        {/* Price row */}
        <div className="model-card__price-row">
          <span className="model-card__price">{model.price}</span>
          <span className="model-card__mrp">{model.mrp}</span>
          <span className="model-card__discount">{model.discount}</span>
        </div>
        <p className="model-card__emi">{model.emi}</p>

        {/* Delivery-ish line */}
        <div className="model-card__delivery">
          <Truck size={13} />
          <span>Free test ride at your nearest showroom</span>
        </div>

        {/* CTA */}
        <button
          className="model-card__cta"
          onClick={(e) => {
            e.stopPropagation();
            onTestRide?.();
          }}
        >
          <BadgeCheck size={14} />
          Book Test Ride
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function Models({ onTestRide, onSelect }) {
  return (
    <section className="models-section" id="models">
      <div className="models-section__header">
        <span className="models-section__eyebrow">Our Models</span>
        <h2 className="models-section__title">Ride The Legend</h2>
      </div>

      <div className="models-section__grid">
        {MODELS.map((model) => (
          <ProductCard
            key={model.id}
            model={model}
            onTestRide={onTestRide}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

export default Models;
