import { ArrowLeft, Star, StarHalf, Truck, BadgeCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import "./ModelDetail.css";

const DETAIL_SPECS = {
  "speed-400": {
    detailedSpecs: [
      {
        category: "Engine & Transmission",
        items: [
          { label: "Type", val: "Liquid-cooled, 4-valve, DOHC single-cylinder" },
          { label: "Capacity", val: "398.15 cc" },
          { label: "Bore x Stroke", val: "89.0 mm x 64.0 mm" },
          { label: "Compression", val: "12:1" },
          { label: "Fuel System", val: "Bosch EFI with ride-by-wire throttle" },
          { label: "Exhaust", val: "Stainless twin-skin header with steel silencer" },
          { label: "Final Drive", val: "X-ring chain" },
          { label: "Clutch", val: "Wet, multi-plate, slip & assist" },
          { label: "Gearbox", val: "6-speed" },
        ],
      },
      {
        category: "Chassis & Dimensions",
        items: [
          { label: "Frame", val: "Hybrid spine/perimeter tubular steel" },
          { label: "Front Wheel", val: "Cast aluminium 17 x 3 in" },
          { label: "Rear Wheel", val: "Cast aluminium 17 x 4 in" },
          { label: "Front Suspension", val: "43mm upside-down Big Piston forks, 140mm travel" },
          { label: "Rear Suspension", val: "Gas monoshock RSU, preload adjustable, 130mm travel" },
          { label: "Front Brakes", val: "300mm fixed disc, 4-piston radial caliper, ABS" },
          { label: "Rear Brakes", val: "230mm fixed disc, floating caliper, ABS" },
          { label: "Seat Height", val: "790 mm" },
          { label: "Wheelbase", val: "1,377 mm" },
          { label: "Fuel Capacity", val: "13 Litres" },
          { label: "Wet Weight", val: "170 kg" },
        ],
      },
    ],
    equipment: [
      "Analogue speedometer with integrated multi-function LCD screen",
      "Switchable traction control",
      "Ride-by-wire electronic throttle",
      "Wet multi-plate slip & assist clutch",
      "Dual-channel ABS with 300mm front disc",
      "LED headlamp",
      "17-inch cast alloy wheels with tubeless tyres",
      "110/70 R17 front and 150/60 R17 rear tyres",
    ],
  },
   "scrambler-400X": {
    detailedSpecs: [
      {
        category: "Engine & Transmission",
        items: [
          { label: "Type", val: "Liquid-cooled, 4-valve, DOHC single-cylinder" },
          { label: "Capacity", val: "398.15 cc" },
          { label: "Bore x Stroke", val: "89.0 mm x 64.0 mm" },
          { label: "Compression", val: "12:1" },
          { label: "Fuel System", val: "Bosch EFI with ride-by-wire throttle" },
          { label: "Exhaust", val: "Stainless twin-skin header with steel silencer" },
          { label: "Final Drive", val: "X-ring chain" },
          { label: "Clutch", val: "Wet, multi-plate, slip & assist" },
          { label: "Gearbox", val: "6-speed" },
        ],
      },
      {
        category: "Chassis & Dimensions",
        items: [
          { label: "Frame", val: "Hybrid spine/perimeter tubular steel" },
          { label: "Front Wheel", val: "Cast aluminium 17 x 3 in" },
          { label: "Rear Wheel", val: "Cast aluminium 17 x 4 in" },
          { label: "Front Suspension", val: "43mm upside-down Big Piston forks, 140mm travel" },
          { label: "Rear Suspension", val: "Gas monoshock RSU, preload adjustable, 130mm travel" },
          { label: "Front Brakes", val: "300mm fixed disc, 4-piston radial caliper, ABS" },
          { label: "Rear Brakes", val: "230mm fixed disc, floating caliper, ABS" },
          { label: "Seat Height", val: "790 mm" },
          { label: "Wheelbase", val: "1,377 mm" },
          { label: "Fuel Capacity", val: "13 Litres" },
          { label: "Wet Weight", val: "170 kg" },
        ],
      },
    ],
    equipment: [
      "Analogue speedometer with integrated multi-function LCD screen",
      "Switchable traction control",
      "Ride-by-wire electronic throttle",
      "Wet multi-plate slip & assist clutch",
      "Dual-channel ABS with 300mm front disc",
      "LED headlamp",
      "17-inch cast alloy wheels with tubeless tyres",
      "110/70 R17 front and 150/60 R17 rear tyres",
    ],
  },
};

function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="detail-stars">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full)
          return <Star key={i} size={16} fill="currentColor" strokeWidth={0} />;
        if (i === full && half)
          return <StarHalf key={i} size={16} fill="currentColor" strokeWidth={0} />;
        return <Star key={i} size={16} className="star-empty" strokeWidth={0} />;
      })}
    </div>
  );
}

function ModelDetail({ model, onBack, onTestRide }) {
  const detail = DETAIL_SPECS[model.id] || { detailedSpecs: [], equipment: [] };

  return (
    <div className="model-detail">
      {/* Back bar */}
      <div className="model-detail__topbar">
        <button className="model-detail__back" onClick={onBack}>
          <ArrowLeft size={16} />
          All Models
        </button>
      </div>

      {/* Hero */}
      <div className="model-detail__hero">
        <div className="model-detail__image">
          <img src={model.image} alt={model.name} />
        </div>

        <div className="model-detail__info">
          <span className="model-detail__brand">{model.brand}</span>
          <h1 className="model-detail__title">{model.name}</h1>

          <div className="model-detail__rating">
            <Stars rating={model.rating} />
            <span className="model-detail__rating-value">{model.rating}</span>
            <span className="model-detail__reviews">({model.reviews} reviews)</span>
          </div>

          <p className="model-detail__tag">{model.tag}</p>

          <div className="model-detail__price-row">
            <span className="model-detail__price">{model.price}</span>
            <span className="model-detail__mrp">{model.mrp}</span>
            <span className="model-detail__discount">{model.discount}</span>
          </div>
          <p className="model-detail__emi">{model.emi}</p>

          <div className="model-detail__delivery">
            <Truck size={14} />
            <span>Free test ride at your nearest showroom</span>
          </div>

          <button className="model-detail__cta" onClick={onTestRide}>
            <BadgeCheck size={15} />
            Book Test Ride
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Full Specifications */}
      <div className="model-detail__specs">
        <h2 className="model-detail__section-title">Full Specifications</h2>
        <div className="model-detail__spec-grid">
          {detail.detailedSpecs.map((group) => (
            <div key={group.category} className="model-detail__spec-group">
              <h3>{group.category}</h3>
              <div className="model-detail__spec-items">
                {group.items.map((item) => (
                  <div key={item.label} className="model-detail__spec-item">
                    <span className="model-detail__spec-label">{item.label}</span>
                    <span className="model-detail__spec-value">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Equipment */}
      <div className="model-detail__equipment">
        <h2 className="model-detail__section-title">Standard Equipment</h2>
        <div className="model-detail__equipment-grid">
          {detail.equipment.map((item) => (
            <div key={item} className="model-detail__equipment-item">
              <CheckCircle2 size={15} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModelDetail;
