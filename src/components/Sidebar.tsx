import { Pizza, Calendar, BookOpen, Key, MapPin, Wine, Mail, Award, Newspaper, Truck, Gift, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import fatboyLogo from "@/assets/fatboy-logo.png";

const navItems = [
  { icon: Pizza, label: "MENU" },
  { icon: Calendar, label: "EVENTS" },
  { icon: BookOpen, label: "OUR STORY" },
  { icon: Key, label: "CATERING" },
  { icon: MapPin, label: "LOCATIONS" },
  { icon: Wine, label: "OUR BARS" },
  { icon: Mail, label: "GET THE SAUCE" },
  { icon: Award, label: "V FOR VICTORY" },
  { icon: Newspaper, label: "IN THE PRESS" },
  { icon: Truck, label: "SHIP V PIZZA" },
  { icon: Gift, label: "GIFT CARDS" },
  { icon: Phone, label: "CONTACT US" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background flex items-center justify-between px-4 py-3 md:hidden border-b border-border">
        <img src={fatboyLogo} alt="Logo" className="h-12 w-auto" />
        <button onClick={() => setOpen(!open)} className="text-secondary">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-[210px] bg-background z-50 flex-col px-4 py-6 overflow-y-auto transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex hidden md:block`}>
        <div className="flex items-start justify-between mb-4">
          <img src={fatboyLogo} alt="Fatboy Logo" className="h-28 w-auto" />
          <button onClick={() => setOpen(!open)} className="text-secondary mt-2 md:block">
            <Menu size={28} strokeWidth={2} />
          </button>
        </div>
        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map(({ icon: Icon, label }) => (
            <a key={label} href="#" className="nav-link">
              <Icon size={18} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </nav>
        <a href="#" className="btn-primary text-center mt-4 rounded-full text-xs py-2.5">
          ORDER ONLINE
        </a>
      </aside>

      {/* Mobile nav overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background pt-16 px-6 overflow-y-auto md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map(({ icon: Icon, label }) => (
              <a key={label} href="#" className="nav-link text-base" onClick={() => setOpen(false)}>
                <Icon size={20} strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </nav>
          <a href="#" className="btn-primary text-center mt-6 rounded-full text-xs py-2.5 block">
            ORDER ONLINE
          </a>
        </div>
      )}
    </>
  );
};

export default Sidebar;
