import { Pizza, Calendar, BookOpen, Key, MapPin, Wine, Mail, Award, Newspaper, Truck, Gift, Phone, Menu } from "lucide-react";
import { useState } from "react";

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
  const [open, setOpen] = useState(true);

  return (
    <aside className="fixed left-0 top-0 h-full w-[210px] bg-background z-50 flex flex-col px-4 py-6 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-col items-center">
          <span className="text-primary font-serif text-7xl font-bold leading-none">V</span>
          <span className="font-display text-foreground text-2xl font-bold tracking-[0.15em] -mt-1">PIZZA<sup className="text-xs">®</sup></span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-secondary mt-2">
          <Menu size={28} strokeWidth={2} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 flex-1">
        {navItems.map(({ icon: Icon, label }) => (
          <a key={label} href="#" className="nav-link">
            <Icon size={18} strokeWidth={1.5} />
            {label}
          </a>
        ))}
      </nav>

      {/* Order Online Button */}
      <a href="#" className="btn-primary text-center mt-4 rounded-full text-xs py-2.5">
        ORDER ONLINE
      </a>
    </aside>
  );
};

export default Sidebar;
