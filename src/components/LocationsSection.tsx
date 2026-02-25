import { useState } from "react";

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState<"both" | "southside" | "westside">("both");

  const mapUrls = {
    both: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d110579.06!2d-81.72!3d30.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFatboy+Fried+Rice+Jacksonville+FL!5e0!3m2!1sen!2sus",
    southside: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-81.5461!3d30.2843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sFatboy+Fried+Rice+Beach+Blvd!2sJacksonville+FL!5e0!3m2!1sen!2sus",
    westside: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-81.7345!3d30.3134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sFatboy+Fried+Rice+Cassat+Ave!2sJacksonville+FL!5e0!3m2!1sen!2sus",
  };

  return (
    <section id="locations" className="bg-muted py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            FIND US
          </h2>
        </div>

        {/* Location cards - click to focus map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setActiveLocation(activeLocation === "southside" ? "both" : "southside")}
            className={`text-left bg-background border-2 rounded-xl p-5 transition-colors group ${
              activeLocation === "southside" ? "border-primary ring-2 ring-primary/30" : "border-primary/20 hover:border-primary"
            }`}
          >
            <p className="text-primary font-bold tracking-wide text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              📍 SOUTHSIDE
            </p>
            <p className="text-muted-foreground text-sm">Beach Blvd, Jacksonville, FL</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary text-xs">{activeLocation === "southside" ? "✓ Viewing on map" : "Click to view on map"}</span>
              <a
                href="https://maps.google.com/?q=Fatboy+Fried+Rice+Beach+Blvd+Jacksonville+FL"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-primary text-xs hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </button>
          <button
            onClick={() => setActiveLocation(activeLocation === "westside" ? "both" : "westside")}
            className={`text-left bg-background border-2 rounded-xl p-5 transition-colors group ${
              activeLocation === "westside" ? "border-primary ring-2 ring-primary/30" : "border-primary/20 hover:border-primary"
            }`}
          >
            <p className="text-primary font-bold tracking-wide text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              📍 WESTSIDE
            </p>
            <p className="text-muted-foreground text-sm">Cassat Ave, Jacksonville, FL</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary text-xs">{activeLocation === "westside" ? "✓ Viewing on map" : "Click to view on map"}</span>
              <a
                href="https://maps.google.com/?q=Fatboy+Fried+Rice+Cassat+Ave+Jacksonville+FL"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-primary text-xs hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </button>
        </div>

        {/* Interactive Google Map */}
        <div className="w-full rounded overflow-hidden border-2 border-primary/20">
          <iframe
            src={mapUrls[activeLocation]}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fatboy Fried Rice Locations"
            className="w-full h-[280px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
