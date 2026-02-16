import heroImage from "@/assets/hero-fried-rice-new.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100svh] md:h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Delicious fried rice"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 pt-14 md:pt-0">
        <p className="hero-subtitle mb-2 md:mb-3 text-base md:text-2xl">Hot. Tasty. And Yum.</p>
        <h1 className="hero-title mb-3 md:mb-4 text-4xl sm:text-6xl md:text-[8rem]">FATBOY<br/>FRIED RICE</h1>
        <p className="text-primary-foreground text-sm md:text-xl font-bold tracking-[0.25em] uppercase mb-4 md:mb-6"
           style={{ fontFamily: 'var(--font-display)', textShadow: '1px 2px 4px rgba(0,0,0,0.4)' }}>
          FLAVOR, EVERY TIME
        </p>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full sm:w-auto px-6 sm:px-0">
          <a href="#" className="btn-primary text-center rounded text-xs md:text-sm py-2.5 md:py-3">ORDER ONLINE</a>
          <a href="#" className="btn-secondary text-center rounded text-xs md:text-sm py-2.5 md:py-3">VIEW THE MENU</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
