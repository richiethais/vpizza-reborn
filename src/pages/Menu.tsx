import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import fatboyLogo from "@/assets/fatboy-logo-new.png";

import lemonPorkchop from "@/assets/menu/lemon-porkchop.webp";
import bulgogi from "@/assets/menu/bulgogi.webp";
import sisig from "@/assets/menu/sisig.webp";
import chickenTeriyaki from "@/assets/menu/chicken-teriyaki.webp";
import cheeseburger from "@/assets/menu/cheeseburger.webp";
import beefShortRibs from "@/assets/menu/beef-short-ribs.webp";
import fatboyFriedRice from "@/assets/menu/fatboy-fried-rice.webp";
import spamahaw from "@/assets/menu/spamahaw.webp";
import burgersteak from "@/assets/menu/burgersteak.webp";

const menuItems = [
  {
    name: "LEMON PORKCHOP",
    image: lemonPorkchop,
    description: "Grilled bone in thin slice chops with a sweet and tangy marinate. Topped off with fried shallots.",
  },
  {
    name: "BULGOGI",
    image: bulgogi,
    description: "Thin sliced rib-eye sautéed with onions and scallions. Topped with sweet mayo and spicy sriracha sauce.",
  },
  {
    name: "SISIG",
    image: sisig,
    description: "Diced pork belly with soy vinegar marinate topped with sweet and spicy mayo and fried shallots.",
  },
  {
    name: "CHICKEN TERIYAKI",
    image: chickenTeriyaki,
    description: "Grilled chicken thighs topped with a sweet teriyaki glaze & fried shallots.",
  },
  {
    name: "CHEESEBURGER",
    image: cheeseburger,
    description: "Prime Burger patty with yellow american cheese topped with sweet mayo, ketchup and fried shallots.",
  },
  {
    name: "BEEF SHORT RIBS",
    image: beefShortRibs,
    description: "Thin slice bone in ribs with a teriyaki glazed & topped with fried shallots.",
  },
  {
    name: "FATBOY FRIED RICE",
    image: fatboyFriedRice,
    description: "Regular fried rice (no meat) topped with sweet and spicy mayo and fried shallots.",
  },
  {
    name: "SPAMAHAW",
    image: spamahaw,
    description: "Teriyaki Spam and Sausage topped with fried shallots.",
  },
  {
    name: "BURGERSTEAK",
    image: burgersteak,
    description: "Two prime burger patty with brown gravy and topped with fried shallots.",
  },
];

const Menu = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="md:ml-[200px] flex-1 mt-[56px] md:mt-0">
        {/* Hero banner */}
        <section className="bg-primary py-4 md:py-6 px-4 text-center">
          <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-24 md:h-32 w-auto mx-auto mb-2" />
          <h1
            className="text-primary-foreground text-4xl md:text-6xl font-bold tracking-wide mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            OUR MENU
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg tracking-wider uppercase font-bold" style={{ fontFamily: "var(--font-display)" }}>
            All dishes served on fried rice with a fried egg
          </p>
        </section>

        {/* Menu grid */}
        <section className="py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: "#fdf2e9" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {menuItems.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3
                    className="text-primary text-lg md:text-xl font-bold tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Menu;
