import { useState } from "react";
import { MapPin, X } from "lucide-react";
import fatboyLogo from "@/assets/fatboy-logo-new.png";

const locations = [
  { name: "Beach Boulevard", url: "https://order.toasttab.com/online/fatboy-fried-rice-beach-blvd" },
  { name: "Westside / Cassat", url: "https://order.toasttab.com/online/fatboy-fried-rice-cassat" },
];

interface Props {
  children: React.ReactNode;
  className?: string;
  dropUp?: boolean;
}

const OrderOnlineDropdown = ({ children, className }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 animate-in fade-in duration-200" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-sm bg-background rounded-2xl shadow-2xl border-2 border-primary overflow-hidden animate-in zoom-in-95 fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-primary/60 hover:text-primary transition-colors z-10"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center pt-8 pb-4 px-6 bg-primary">
              <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-24 w-auto mb-3" />
              <h3
                className="text-primary-foreground text-xl md:text-2xl font-bold tracking-wide text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CHOOSE YOUR LOCATION
              </h3>
            </div>

            {/* Location buttons */}
            <div className="p-6 flex flex-col gap-3">
              {locations.map((loc) => (
                <a
                  key={loc.name}
                  href={loc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all shadow-md"
                  style={{ fontFamily: "var(--font-display)" }}
                  onClick={() => setOpen(false)}
                >
                  <MapPin size={18} />
                  {loc.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderOnlineDropdown;
