const LocationsSection = () => {
  // Both Fatboy Fried Rice locations
  const locations = [
    { name: "Southside - Beach Blvd", lat: 30.2843, lng: -81.5461 },
    { name: "Westside - Cassat Ave", lat: 30.3134, lng: -81.7345 },
  ];

  // Center point between both locations
  const centerLat = (locations[0].lat + locations[1].lat) / 2;
  const centerLng = (locations[0].lng + locations[1].lng) / 2;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;

  // Use a multi-marker map URL
  const multiMarkerSrc = `https://www.google.com/maps/embed/v1/search?key=&q=Fatboy+Fried+Rice+Jacksonville+FL`;

  // Simpler approach: embed with directions between the two locations or use place search
  const embedSrc = `https://www.google.com/maps/d/embed?mid=&z=11`;

  return (
    <section id="locations" className="bg-muted py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            FIND US
          </h2>
        </div>

        {/* Interactive Google Map */}
        <div className="w-full rounded overflow-hidden border-2 border-primary/20 mb-6">
          <iframe
            src="https://www.google.com/maps/dir/Fatboy+Fried+Rice,+Beach+Blvd,+Jacksonville,+FL/Fatboy+Fried+Rice,+Cassat+Ave,+Jacksonville,+FL/@30.3,-81.64,12z/data=!3m1!4b1?entry=embed"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fatboy Fried Rice Locations"
            className="w-full h-[280px] md:h-[400px]"
          />
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://maps.google.com/?q=Fatboy+Fried+Rice+Beach+Blvd+Jacksonville+FL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border-2 border-primary/20 rounded-xl p-5 hover:border-primary transition-colors group"
          >
            <p className="text-primary font-bold tracking-wide text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              📍 SOUTHSIDE
            </p>
            <p className="text-muted-foreground text-sm">Beach Blvd, Jacksonville, FL</p>
            <p className="text-primary text-xs mt-2 group-hover:underline">Get Directions →</p>
          </a>
          <a
            href="https://maps.google.com/?q=Fatboy+Fried+Rice+Cassat+Ave+Jacksonville+FL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border-2 border-primary/20 rounded-xl p-5 hover:border-primary transition-colors group"
          >
            <p className="text-primary font-bold tracking-wide text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              📍 WESTSIDE
            </p>
            <p className="text-muted-foreground text-sm">Cassat Ave, Jacksonville, FL</p>
            <p className="text-primary text-xs mt-2 group-hover:underline">Get Directions →</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
