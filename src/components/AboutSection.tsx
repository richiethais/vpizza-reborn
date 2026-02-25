import cheeseburger from "@/assets/menu/cheeseburger.webp";

const AboutSection = () => {
  return (
    <section id="story" className="bg-background py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-start">
        <div className="flex-1">
          <h2 className="section-heading mb-4 md:mb-6 text-2xl md:text-4xl">THE FATBOY STORY</h2>
          <div className="text-foreground leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
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
          <a href="#" className="btn-outline inline-block mt-4 md:mt-8 rounded px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm">OUR INGREDIENTS</a>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <img src={cheeseburger} alt="Cheeseburger fried rice" className="w-full md:w-[400px] h-[220px] md:h-[350px] object-cover rounded" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
