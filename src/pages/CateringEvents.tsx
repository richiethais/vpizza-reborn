import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import fatboyLogo from "@/assets/fatboy-logo-new.png";
import cateringMenu from "@/assets/catering-menu.png";
import { Mail, Calendar, UtensilsCrossed, Instagram } from "lucide-react";

const CateringEvents = () => {
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
            <div className="border-2 border-primary rounded-lg p-8 text-center">
              <p className="text-primary text-lg font-bold tracking-wide mb-3" style={{ fontFamily: "var(--font-display)" }}>
                WE'RE ALWAYS COOKING UP SOMETHING NEW!
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Follow us on Instagram for the latest events, pop-ups, and special announcements.
              </p>
              <a
                href="https://www.instagram.com/fatboyfriedrice/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 rounded-full text-sm px-8 py-3"
              >
                <Instagram size={18} />
                @FATBOYFRIEDRICE
              </a>
            </div>
          </div>
        </section>

        {/* Catering Inquiries */}
        <section className="bg-primary py-10 md:py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-primary-foreground text-2xl md:text-4xl font-bold tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FOR CATERING INQUIRIES
            </h2>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Reach out to us directly and we'll get your event set up!
            </p>
            <a
              href="mailto:FATBOYFRIEDRICE@GMAIL.COM"
              className="bg-secondary text-secondary-foreground inline-flex items-center gap-3 rounded-full text-base md:text-lg px-10 py-4 font-bold hover:brightness-110 transition-all shadow-lg"
            >
              <Mail size={20} />
              FATBOYFRIEDRICE@GMAIL.COM
            </a>
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

        <Footer />
      </main>
    </div>
  );
};

export default CateringEvents;
