const LocationsSection = () => {
  return (
    <section id="locations" className="bg-muted py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            FIND US
          </h2>
        </div>

        {/* Static map image with both markers */}
        <div className="w-full rounded overflow-hidden border-2 border-primary/20 mb-6">
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?size=1200x500&maptype=roadmap&markers=color:red%7Clabel:1%7C30.2843,-81.5461&markers=color:red%7Clabel:2%7C30.3134,-81.7345&zoom=11&center=30.30,-81.65&scale=2&style=feature:all%7Celement:geometry%7Ccolor:0xf5f5f5&key="
            alt="Map showing both Fatboy Fried Rice locations in Jacksonville, FL"
            className="w-full h-[280px] md:h-[400px] object-cover bg-muted"
            onError={(e) => {
              // Fallback to OpenStreetMap static image if Google fails
              (e.target as HTMLImageElement).src = `https://staticmap.openstreetmap.de/staticmap.php?center=30.30,-81.65&zoom=11&size=1200x500&markers=30.2843,-81.5461,ol-marker|30.3134,-81.7345,ol-marker`;
            }}
          />
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://maps.apple.com/?address=11450+Beach+Blvd,+Jacksonville,+FL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border-2 border-primary/20 rounded-xl p-5 hover:border-primary transition-colors group"
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
            className="bg-background border-2 border-primary/20 rounded-xl p-5 hover:border-primary transition-colors group"
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
