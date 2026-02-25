const LocationsSection = () => {
  return (
    <section className="bg-muted py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            FIND US
          </h2>
          <a href="#" className="btn-outline rounded whitespace-nowrap text-xs">
            ALL LOCATIONS
          </a>
        </div>
        <div className="w-full h-[200px] md:h-[300px] bg-background rounded flex items-center justify-center border border-border">
          <p className="text-muted-foreground text-lg tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>MAP COMING SOON</p>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
