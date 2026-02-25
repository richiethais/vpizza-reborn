import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Beach Boulevard", url: "https://order.toasttab.com/online/fatboy-fried-rice-beach-blvd" },
  { name: "Westside / Cassat", url: "https://order.toasttab.com/online/fatboy-fried-rice-cassat" },
];

interface Props {
  children: React.ReactNode;
  className?: string;
}

const OrderOnlineDropdown = ({ children, className }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button onClick={() => setOpen(!open)} className={className}>
        {children}
      </button>
      {open && (
        <div className="absolute z-50 mt-2 left-1/2 -translate-x-1/2 w-56 rounded-lg shadow-lg bg-background border border-border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="px-4 pt-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Choose a Location</p>
          {locations.map((loc) => (
            <a
              key={loc.name}
              href={loc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-primary hover:bg-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              <MapPin size={16} className="text-muted-foreground" />
              {loc.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderOnlineDropdown;
