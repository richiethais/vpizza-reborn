import pizzaAbout from "@/assets/pizza-about.jpg";

const AboutSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-1">
          <h2 className="section-heading mb-6">THE FATBOY STORY</h2>
          <a href="#" className="btn-outline inline-block mb-6 md:mb-8 rounded">ABOUT US</a>
          <div className="text-foreground leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              At Fatboy Fried Rice, we serve up bold, authentic Asian fusion fried rice
              made with the freshest ingredients. Every dish is wok-fired to perfection
              with flavors that hit different — from our signature cheeseburger fried rice
              to classic bulgogi and teriyaki combos.
            </p>
            <p>
              Born from a love of Filipino street food culture and bold Asian flavors,
              we bring you comfort food with a twist. Our recipes are passed down and
              perfected, using premium ingredients you can taste in every bite.
            </p>
            <p>
              Whether you're grabbing a quick lunch, ordering delivery for the fam,
              or rolling up to the truck on a Friday night — we've got you.
              Hot. Tasty. And Yum.
            </p>
          </div>
          <a href="#" className="btn-outline inline-block mt-6 md:mt-8 rounded">OUR INGREDIENTS</a>
        </div>
        <div className="flex-shrink-0 relative w-full md:w-auto">
          <img src={pizzaAbout} alt="Delicious food" className="w-full md:w-[400px] h-[280px] md:h-[350px] object-cover rounded" />
          <a href="#" className="btn-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded">
            VIEW OUR MENU
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
