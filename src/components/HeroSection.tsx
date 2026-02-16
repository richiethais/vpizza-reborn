import heroPizza from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroPizza}
        alt="Authentic Neapolitan pizza"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <p className="hero-subtitle mb-2">Pizza so Italian, it needs a translator.</p>
        <h1 className="hero-title mb-4">BUONGIORNO</h1>
        <p className="font-display text-primary-foreground text-xl md:text-2xl tracking-[0.3em] uppercase"
           style={{ textShadow: '1px 2px 6px rgba(0,0,0,0.5)' }}>
          OR: GOOD DAY
        </p>
        <div className="flex gap-4 mt-8">
          <a href="#" className="btn-primary">ORDER ONLINE</a>
          <a href="#" className="btn-secondary">VIEW THE MENU</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
