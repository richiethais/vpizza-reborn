import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import fatboyLogo from "@/assets/fatboy-logo-new.png";
import cateringMenu from "@/assets/catering-menu.png";
import { Mail, Calendar, UtensilsCrossed, Instagram, MapPin, AlertTriangle, Megaphone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface EventRow {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  location: string | null;
  event_type: string;
  is_active: boolean;
}

const CateringEvents = () => {
  const [events, setEvents] = useState<EventRow[]>([]);

  useEffect(() => {
    supabase.from("events").select("*").eq("is_active", true).order("event_date", { ascending: true }).then(({ data }) => {
      if (data) setEvents(data as EventRow[]);
    });
  }, []);

  const getEventIcon = (type: string) => {
    switch (type) {
      case "closure": return <AlertTriangle size={18} className="text-primary" />;
      case "announcement": return <Megaphone size={18} className="text-secondary" />;
      default: return <Calendar size={18} className="text-primary" />;
    }
  };

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

            {events.length > 0 && (
              <div className="space-y-4 mb-8">
                {events.map((ev) => (
                  <div key={ev.id} className={`border-2 rounded-lg p-5 ${ev.event_type === "closure" ? "border-primary bg-primary/5" : "border-primary/20"}`}>
                    <div className="flex items-start gap-3">
                      {getEventIcon(ev.event_type)}
                      <div>
                        <p className="text-primary font-bold tracking-wide" style={{ fontFamily: "var(--font-display)" }}>{ev.title}</p>
                        {ev.description && <p className="text-muted-foreground text-sm mt-1">{ev.description}</p>}
                        <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                          {ev.event_date && <span>📅 {new Date(ev.event_date).toLocaleDateString()}</span>}
                          {ev.location && <span className="flex items-center gap-1"><MapPin size={12} /> {ev.location}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
        <section className="py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: "#fdf2e9" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-primary text-2xl md:text-4xl font-bold tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FOR CATERING INQUIRIES
            </h2>
            <div className="border-2 border-primary/30 rounded-xl p-6 md:p-10 inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail size={24} className="text-primary" />
                <p className="text-primary text-lg md:text-xl font-bold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                  EMAIL US
                </p>
              </div>
              <a
                href="mailto:FATBOYFRIEDRICE@GMAIL.COM"
                className="bg-primary text-primary-foreground inline-block rounded-full text-sm md:text-base px-8 py-3 font-bold tracking-wider hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                <strong>FATBOYFRIEDRICE@GMAIL.COM</strong>
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
