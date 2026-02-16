import heroImage from "@/assets/hero-fried-rice.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Delicious fried rice"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <p className="hero-subtitle mb-3">Hot. Tasty. And Yum.</p>
        <h1 className="hero-title mb-4">FATBOY<br/>FRIED RICE</h1>
        <p className="text-primary-foreground text-base md:text-xl font-bold tracking-[0.25em] uppercase mb-6"
           style={{ fontFamily: 'var(--font-display)', textShadow: '1px 2px 4px rgba(0,0,0,0.4)' }}>
          FLAVOR, EVERY TIME
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#" className="btn-primary text-center rounded">ORDER ONLINE</a>
          <a href="#" className="btn-secondary text-center rounded">VIEW THE MENU</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
