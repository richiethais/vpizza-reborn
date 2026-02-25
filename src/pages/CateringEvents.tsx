import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import fatboyLogo from "@/assets/fatboy-logo-new.png";
import cateringMenu from "@/assets/catering-menu.png";
import { Mail, Calendar, UtensilsCrossed } from "lucide-react";

const CateringEvents = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="md:ml-[220px] flex-1 mt-[56px] md:mt-0">
        {/* Hero banner */}
        <section className="bg-primary py-4 md:py-6 px-4 text-center">
          <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-24 md:h-32 w-auto mx-auto mb-2" />
          <h1
            className="text-primary-foreground text-4xl md:text-6xl font-bold tracking-wide mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CATERING & EVENTS
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg tracking-wider uppercase font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Let Fatboy feed your next party
          </p>
        </section>

        {/* Events info */}
        <section className="bg-background py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={28} className="text-primary" />
              <h2 className="section-heading">EVENTS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-primary rounded-lg p-6">
                <h3 className="text-primary text-xl font-bold tracking-wide mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  FOOD TRUCK FRIDAY
                </h3>
                <p className="text-primary font-bold text-sm tracking-wider mb-1" style={{ fontFamily: "var(--font-display)" }}>EVERY FRIDAY 5–9 PM</p>
                <p className="text-muted-foreground text-sm">Join us every Friday at our downtown location for live music, good vibes, and the best fried rice in Jacksonville.</p>
              </div>
              <div className="border-2 border-primary rounded-lg p-6">
                <h3 className="text-primary text-xl font-bold tracking-wide mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  WEEKEND SPECIALS
                </h3>
                <p className="text-primary font-bold text-sm tracking-wider mb-1" style={{ fontFamily: "var(--font-display)" }}>SAT & SUN ALL DAY</p>
                <p className="text-muted-foreground text-sm">Special weekend menu items available at all locations. Follow us on social media for the latest specials!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu */}
        <section className="py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: "#fdf2e9" }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed size={28} className="text-primary" />
              <h2 className="section-heading">CATERING MENU</h2>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary">
              <img src={cateringMenu} alt="Fatboy Fried Rice Catering Menu" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Contact / Inquiries */}
        <section className="bg-primary py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-primary-foreground text-2xl md:text-4xl font-bold tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FOR CATERING INQUIRIES
            </h2>
            <div className="border-2 border-primary-foreground/30 rounded-xl p-6 md:p-10 inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail size={24} className="text-secondary" />
                <p className="text-primary-foreground text-lg md:text-xl font-bold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                  EMAIL US
                </p>
              </div>
              <a
                href="mailto:FATBOYFRIEDRICE@GMAIL.COM"
                className="btn-secondary inline-block rounded-full text-sm md:text-base px-8 py-3"
              >
                FATBOYFRIEDRICE@GMAIL.COM
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default CateringEvents;
