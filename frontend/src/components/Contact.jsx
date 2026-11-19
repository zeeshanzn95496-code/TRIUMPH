import { useState } from "react";
import "./Contact.css";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Visit the Showroom",
    value: "123 Motorway Avenue",
    detail: "Hinckley, Leicestershire • LE10 1AX",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+44 1455 555 555",
    detail: "Mon–Sat, 9:00–18:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "showroom@triumphmotorcycles.com",
    detail: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Mon – Sat: 9:00 – 18:00",
    detail: "Sunday: 10:00 – 16:00",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  return (
    <section className="contact-page">
      <div className="contact-page__inner">
        <span className="contact-page__eyebrow">Get In Touch</span>
        <h1 className="contact-page__title">
          <span className="contact-page__title-line">Contact Us</span>
        </h1>
        <p className="contact-page__subtitle">
          Questions about a model, test rides, or bespoke commissions — our
          showroom team is here to help.
        </p>

        <div className="contact-page__grid">
          {/* Contact details */}
          <div className="contact-page__info">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="contact-info-card__label">
                      {item.label}
                    </span>
                    <span className="contact-info-card__value">
                      {item.value}
                    </span>
                    <span className="contact-info-card__detail">
                      {item.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enquiry form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-form__title">Send an Enquiry</h2>

            <div className="contact-form__row">
              <label className="contact-form__field">
                <span>Full Name</span>
                <input type="text" required placeholder="Alex Morgan" />
              </label>
              <label className="contact-form__field">
                <span>Email</span>
                <input type="email" required placeholder="you@example.com" />
              </label>
            </div>

            <div className="contact-form__row">
              <label className="contact-form__field">
                <span>Phone</span>
                <input type="tel" placeholder="+44 ..." />
              </label>
              <label className="contact-form__field">
                <span>Subject</span>
                <select required defaultValue="">
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>Test Ride Booking</option>
                  <option>Model Enquiry</option>
                  <option>Finance &amp; Ownership</option>
                  <option>Parts &amp; Service</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label className="contact-form__field">
              <span>Message</span>
              <textarea
                required
                rows={4}
                placeholder="Tell us how we can help..."
              />
            </label>

            <button type="submit" className="contact-form__submit">
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
