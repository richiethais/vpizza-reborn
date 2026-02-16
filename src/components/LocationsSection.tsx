const LocationsSection = () => {
  return (
    <section className="bg-foreground py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            FIND US
          </h2>
          <a href="#" className="border-2 border-primary-foreground text-primary-foreground px-6 py-2.5 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-foreground transition-all whitespace-nowrap rounded" style={{ fontFamily: 'var(--font-display)' }}>
            ALL LOCATIONS
          </a>
        </div>
        <div className="w-full h-[200px] md:h-[300px] bg-foreground/80 rounded flex items-center justify-center border border-primary-foreground/20">
          <p className="text-primary-foreground/40 text-lg tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>MAP COMING SOON</p>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
