import pizzaStone from "@/assets/pizza-stone.jpg";

const PizzaStonesSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-shrink-0 w-full md:w-auto">
          <img src={pizzaStone} alt="Pizza on stone" className="w-full md:w-[350px] h-[250px] md:h-[300px] object-cover" />
        </div>
        <div className="flex-1">
          <h2 className="section-heading text-2xl md:text-4xl mb-4 leading-tight">
            DON'T BRING HOME OUR PIZZA UNLESS YOU'VE GOT THE STONES TO DO IT RIGHT.
          </h2>
          <div className="font-body text-foreground leading-relaxed space-y-4 text-sm mb-6">
            <p>Because our dough has ZERO artificial ingredients, our pizza must be eaten right out of our oven for true authentic flavor. If you plan on bringing one home, we strongly suggest (like really, really strongly) you purchase one of our pizza stones. They're only $20 and last forever. And, it's the best way to recreate that same V Pizza flavor at home.</p>
          </div>
          <h3 className="section-heading text-xl mb-3">HERE'S HOW:</h3>
          <div className="font-body text-foreground text-sm leading-relaxed mb-6 pl-4">
            <p>Place the stone in your oven and crank it as high as it goes.</p>
            <p>Put your pizza on the HOT stone for 60 seconds.</p>
            <p>And boom! You're back in Naples eating pizza the way it was intended. <em>Molto Bene!</em></p>
          </div>
          <p className="font-display text-secondary text-base md:text-lg tracking-wider uppercase font-bold">
            PIZZA STONES: $20 AT SELECT LOCATIONS
          </p>
        </div>
      </div>
    </section>
  );
};

export default PizzaStonesSection;
