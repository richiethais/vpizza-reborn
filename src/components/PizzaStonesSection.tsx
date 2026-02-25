import beefShortRibs from "@/assets/menu/beef-short-ribs.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PizzaStonesSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        <div
          ref={imageRef}
          className={`flex-shrink-0 w-full md:w-auto transition-all duration-700 ease-out ${
            imageVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-8 scale-95"
          }`}
        >
          <img src={beefShortRibs} alt="Beef short ribs fried rice" className="w-full md:w-[350px] h-[200px] md:h-[300px] object-cover rounded" />
        </div>
        <div
          ref={textRef}
          className={`flex-1 transition-all duration-700 ease-out delay-200 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-primary text-2xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            CATERING? WE GOT YOU.
          </h2>
          <div className="text-foreground leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base mb-4 md:mb-6">
            <p>Throwing a party? Office lunch? Family gathering? Let Fatboy handle the food. We cater events of all sizes with our signature fried rice dishes, sides, and more.</p>
            <p>Bulk orders, custom menus, and delivery available. Hit us up and let's make your event unforgettable.</p>
          </div>
          <a href="/contact" className="btn-secondary rounded inline-block px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm">INQUIRE NOW</a>
        </div>
      </div>
    </section>
  );
};

export default PizzaStonesSection;
