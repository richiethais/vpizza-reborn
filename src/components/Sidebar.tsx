import { UtensilsCrossed, Calendar, BookOpen, MapPin, Phone, Menu, X, ShoppingCart, Home } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import fatboyLogo from "@/assets/fatboy-logo-new.png";
import OrderOnlineDropdown from "./OrderOnlineDropdown";

const navItems = [
  { icon: Home, label: "HOME", href: "/" },
  { icon: UtensilsCrossed, label: "MENU", href: "#" },
  { icon: Calendar, label: "CATERING & EVENTS", href: "/catering-events" },
  { icon: BookOpen, label: "OUR STORY", href: "#" },
  { icon: MapPin, label: "LOCATIONS", href: "#" },
  { icon: Phone, label: "CONTACT", href: "/contact" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (href: string) => href === "/" && location.pathname === "/";

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background flex items-center justify-between px-4 py-2 md:hidden border-b border-border">
        <img
          src={fatboyLogo}
          alt="Fatboy Fried Rice"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button onClick={() => setOpen(!open)} className="text-primary">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[200px] bg-background z-50 flex-col px-4 py-4 overflow-y-auto hidden md:flex border-r border-border">
        <div className="flex justify-center mb-4">
          <img
            src={fatboyLogo}
            alt="Fatboy Fried Rice"
            className="h-28 w-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <nav className="flex flex-col gap-px flex-1">
          {navItems.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                if (href.startsWith("/")) {
                  e.preventDefault();
                  navigate(href);
                }
              }}
              className={`nav-link text-sm py-2 px-2 ${
                isActive(href) ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <Icon size={18} strokeWidth={1.5} />
              <span className="leading-tight">{label}</span>
            </a>
          ))}
        </nav>
        <OrderOnlineDropdown className="btn-secondary text-center mt-3 rounded-full text-xs py-2.5 flex items-center justify-center gap-2 w-full">
          <ShoppingCart size={14} />
          ORDER ONLINE
        </OrderOnlineDropdown>
      </aside>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background pt-16 px-6 overflow-y-auto md:hidden transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center mb-4">
          <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-24 w-auto mb-2" />
        </div>
        <nav className="flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label, href }, i) => (
            <a
              key={label}
              href={href}
              className={`nav-link text-sm transition-all duration-300 ${
                isActive(href) ? "bg-primary/10" : ""
              } ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              onClick={(e) => {
                if (href.startsWith("/")) {
                  e.preventDefault();
                  navigate(href);
                }
                setOpen(false);
              }}
            >
              <Icon size={18} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </nav>
        <OrderOnlineDropdown
          className={`btn-secondary text-center mt-4 rounded-full text-xs py-3 block w-full transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          ORDER ONLINE
        </OrderOnlineDropdown>
      </div>

      {/* Mobile sticky bottom Order Online button */}
      {!open && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden">
          <OrderOnlineDropdown className="btn-secondary w-full rounded-full py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-lg" dropUp>
            <ShoppingCart size={18} />
            ORDER ONLINE
          </OrderOnlineDropdown>
        </div>
      )}
    </>
  );
};

export default Sidebar;
