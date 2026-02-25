import beefShortRibs from "@/assets/menu/beef-short-ribs.webp";

const PizzaStonesSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="flex-shrink-0 w-full md:w-auto">
          <img src={beefShortRibs} alt="Beef short ribs fried rice" className="w-full md:w-[350px] h-[250px] md:h-[300px] object-cover rounded" />
        </div>
        <div className="flex-1">
          <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            CATERING? WE GOT YOU.
          </h2>
          <div className="text-foreground leading-relaxed space-y-4 text-sm md:text-base mb-6">
            <p>Throwing a party? Office lunch? Family gathering? Let Fatboy handle the food. We cater events of all sizes with our signature fried rice dishes, sides, and more.</p>
            <p>Bulk orders, custom menus, and delivery available. Hit us up and let's make your event unforgettable.</p>
          </div>
          <a href="#" className="btn-secondary rounded inline-block">INQUIRE NOW</a>
        </div>
      </div>
    </section>
  );
};

export default PizzaStonesSection;
