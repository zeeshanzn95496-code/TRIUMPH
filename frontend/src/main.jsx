import { StrictMode, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";
import gsap from "gsap";
import App from "./App";
import "./App.css";

function Root() {
  const navRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const navbar = navRef.current?.querySelector(".navbar");
    if (navbar) {
      gsap.from(navbar, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(navbar.querySelectorAll(".nav-links a"), {
        y: -15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.3,
        ease: "power2.out",
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={navRef}>
      <App />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
