import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-fried-rice.jpg";
import OrderOnlineDropdown from "./OrderOnlineDropdown";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-[calc(100dvh-56px)] md:h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Delicious fried rice"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.2s] ease-out ${
          loaded ? "scale-100" : "scale-110"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <p className={`hero-subtitle mb-2 md:mb-3 transition-all duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`} style={{ transitionDelay: "200ms" }}>Hot. Tasty. And Yum.</p>
        <h1 className={`hero-title mb-3 md:mb-4 transition-all duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`} style={{ transitionDelay: "400ms" }}>FATBOY<br/>FRIED RICE</h1>
        <p className={`text-primary-foreground text-sm md:text-xl font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase mb-5 md:mb-6 transition-all duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
           style={{ fontFamily: 'var(--font-display)', textShadow: '1px 2px 4px rgba(0,0,0,0.4)', transitionDelay: "600ms" }}>
          FLAVOR, EVERY TIME
        </p>
        <div className={`flex flex-col sm:flex-row gap-2.5 md:gap-3 w-auto transition-all duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`} style={{ transitionDelay: "800ms" }}>
          <OrderOnlineDropdown className="btn-primary text-center rounded px-5 py-2 md:px-8 md:py-3 text-xs md:text-sm whitespace-nowrap">ORDER ONLINE</OrderOnlineDropdown>
          <a href="/menu" className="btn-secondary text-center rounded px-5 py-2 md:px-8 md:py-3 text-xs md:text-sm whitespace-nowrap">VIEW THE MENU</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
