import heroImage from "@/assets/hero-fried-rice.jpg";
import OrderOnlineDropdown from "./OrderOnlineDropdown";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100dvh-56px)] md:h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Delicious fried rice"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <p className="hero-subtitle mb-2 md:mb-3">Hot. Tasty. And Yum.</p>
        <h1 className="hero-title mb-3 md:mb-4">FATBOY<br/>FRIED RICE</h1>
        <p className="text-primary-foreground text-sm md:text-xl font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase mb-5 md:mb-6"
           style={{ fontFamily: 'var(--font-display)', textShadow: '1px 2px 4px rgba(0,0,0,0.4)' }}>
          FLAVOR, EVERY TIME
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 w-full sm:w-auto px-4 sm:px-0">
          <OrderOnlineDropdown className="btn-primary text-center rounded px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm">ORDER ONLINE</OrderOnlineDropdown>
          <a href="/menu" className="btn-secondary text-center rounded px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm">VIEW THE MENU</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
