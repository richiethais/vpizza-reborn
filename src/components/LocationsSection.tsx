import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationsSection = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="locations" className="bg-muted py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          ref={headingRef}
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 transition-all duration-600 ease-out ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            FIND US
          </h2>
        </div>

        <div
          ref={mapRef}
          className={`w-full rounded overflow-hidden border-2 border-primary/20 mb-6 transition-all duration-700 ease-out delay-100 ${
            mapVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
          }`}
        >
          <iframe
            src="https://www.google.com/maps?q=Fatboy+Fried+Rice+Jacksonville+FL&output=embed&z=11"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fatboy Fried Rice Locations"
            className="w-full h-[280px] md:h-[400px]"
          />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://maps.apple.com/?address=11450+Beach+Blvd,+Jacksonville,+FL"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-background border-2 border-primary/20 rounded-xl p-5 hover:border-primary transition-all duration-500 ease-out group ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-primary font-bold tracking-wide text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              📍 SOUTHSIDE — Fatboy Fried Rice
            </p>
            <p className="text-muted-foreground text-sm">11450 Beach Blvd, Jacksonville, FL</p>
            <p className="text-primary text-xs mt-2 group-hover:underline">Get Directions →</p>
          </a>
          <a
            href="https://maps.apple.com/?address=1429+Cassat+Ave,+Jacksonville,+FL"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-background border-2 border-primary/20 rounded-xl p-5 hover:border-primary transition-all duration-500 ease-out group ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <p className="text-primary font-bold tracking-wide text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              📍 WESTSIDE — Fatboy Fried Rice 2
            </p>
            <p className="text-muted-foreground text-sm">1429 Cassat Ave, Jacksonville, FL</p>
            <p className="text-primary text-xs mt-2 group-hover:underline">Get Directions →</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
