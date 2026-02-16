import pizzaAbout from "@/assets/pizza-about.jpg";

const AboutSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-1">
          <h2 className="section-heading mb-6">THE ART OF PIZZA...®</h2>
          <a href="#" className="btn-outline inline-block mb-6 md:mb-8">ABOUT V PIZZA</a>
          <div className="font-body text-foreground leading-relaxed space-y-4 text-sm">
            <p>At V Pizza, we make authentic <em>pizza Napoletana</em>, sourced from the highest quality ingredients. It has crispy edges and a softer center, so eating it with your hands can get messy. Try eating it with a knife and fork instead of in slices, the way they do in Naples.</p>
            <p>Keep in mind our food is meant to be shared, just like the Italians do. If your food comes out before someone else's, offer them a bite of yours!</p>
            <p>We have no microwaves, range tops or heat warmers because we cook everything in our imported Italian brick ovens. They are truly the most important ingredient in our pizza. But of course, the sauce from San Marzano tomatoes, bufala mozzarella and Prosciutto di Parma are delicious too.</p>
            <p>Everything is delivered hot and fresh directly to your table. Buon Appetito!</p>
          </div>
          <a href="#" className="btn-outline inline-block mt-6 md:mt-8">OUR INGREDIENTS</a>
        </div>
        <div className="flex-shrink-0 relative w-full md:w-auto">
          <img src={pizzaAbout} alt="Delicious pizza" className="w-full md:w-[400px] h-[280px] md:h-[350px] object-cover" />
          <a href="#" className="btn-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">VIEW OUR MENU</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
