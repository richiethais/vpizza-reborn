import heroImage from "@/assets/hero-fried-rice.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Delicious fried rice"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <p className="hero-subtitle mb-2">Pizza so Italian, it needs a translator.</p>
        <h1 className="hero-title mb-4">BUONGIORNO</h1>
        <p className="font-display text-primary-foreground text-base md:text-2xl tracking-[0.3em] uppercase"
           style={{ textShadow: '1px 2px 6px rgba(0,0,0,0.5)' }}>
          OR: GOOD DAY
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
          <a href="#" className="btn-primary text-center">ORDER ONLINE</a>
          <a href="#" className="btn-secondary text-center">VIEW THE MENU</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
