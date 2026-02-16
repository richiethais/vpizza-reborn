const ShipSection = () => {
  return (
    <section className="bg-primary py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-2 border-primary-foreground/40 p-6 md:p-10">
          <h2 className="text-primary-foreground text-2xl md:text-5xl font-bold tracking-wide mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            GET FATBOY DELIVERED
          </h2>
          <p className="text-primary-foreground/90 text-base md:text-xl tracking-wider mb-6 md:mb-8 uppercase font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Order on Uber Eats, Grubhub & DoorDash!
          </p>
          <a href="#" className="btn-outline-light inline-block rounded">ORDER NOW</a>
        </div>
      </div>
    </section>
  );
};

export default ShipSection;
