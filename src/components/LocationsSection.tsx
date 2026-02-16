const LocationsSection = () => {
  return (
    <section className="bg-secondary py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground tracking-wide uppercase">
            FIND A LOCATION
          </h2>
          <a href="#" className="border-2 border-secondary-foreground text-secondary-foreground px-6 py-2.5 font-display text-sm tracking-widest uppercase hover:bg-secondary-foreground hover:text-secondary transition-all">
            VIEW ALL LOCATIONS
          </a>
        </div>
        <div className="w-full h-[300px] bg-secondary/80 rounded flex items-center justify-center">
          <p className="text-secondary-foreground/60 font-display text-lg tracking-wider">MAP PLACEHOLDER</p>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
