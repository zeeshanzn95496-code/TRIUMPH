function Footer({ className = "" }) {
  return (
    <footer className={`border-t border-white/6 py-6 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] tracking-[0.14em] uppercase text-zinc-500">
        <span>© {new Date().getFullYear()} Triumph Motorcycles</span>
        <span>Crafted with passion • All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
