import { UtensilsCrossed, Calendar, BookOpen, Truck, MapPin, Phone, Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import fatboyLogo from "@/assets/fatboy-logo.webp";

const navItems = [
  { icon: UtensilsCrossed, label: "MENU" },
  { icon: Calendar, label: "EVENTS" },
  { icon: BookOpen, label: "OUR STORY" },
  { icon: Truck, label: "CATERING" },
  { icon: MapPin, label: "LOCATIONS" },
  { icon: Phone, label: "CONTACT US" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background flex items-center justify-between px-4 py-2 md:hidden border-b border-border">
        <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-12 w-auto" />
        <button onClick={() => setOpen(!open)} className="text-primary">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[220px] bg-background z-50 flex-col px-5 py-6 overflow-y-auto hidden md:flex border-r border-border">
        <div className="flex flex-col items-center mb-6">
          <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-32 w-auto mb-2" />
        </div>
        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map(({ icon: Icon, label }) => (
            <a key={label} href="#" className="nav-link">
              <Icon size={18} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </nav>
        <a href="#" className="btn-secondary text-center mt-4 rounded-full text-xs py-3 flex items-center justify-center gap-2">
          <ShoppingCart size={16} />
          ORDER ONLINE
        </a>
      </aside>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background pt-20 px-6 overflow-y-auto md:hidden transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center mb-6">
          <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-24 w-auto mb-2" />
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map(({ icon: Icon, label }, i) => (
            <a
              key={label}
              href="#"
              className={`nav-link text-base transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <Icon size={20} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className={`btn-secondary text-center mt-6 rounded-full text-xs py-3 block transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: open ? `${navItems.length * 50 + 50}ms` : "0ms" }}
        >
          ORDER ONLINE
        </a>
      </div>
    </>
  );
};

export default Sidebar;
