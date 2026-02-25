const LocationsSection = () => {
  return (
    <section id="locations" className="bg-muted py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            FIND US
          </h2>
        </div>

        {/* Google Map with both locations */}
        <div className="w-full rounded overflow-hidden border-2 border-primary/20 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470!2d-81.5461!3d30.2843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s11450+Beach+Blvd%2C+Jacksonville%2C+FL!5e0!3m2!1sen!2sus"
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
