import eventTrivia from "@/assets/event-trivia.jpg";
import eventBingo from "@/assets/event-bingo.jpg";
import { MapPin } from "lucide-react";

const events = [
  {
    image: eventTrivia,
    title: "GAME SHOW LOCO AT GATE PARKWAY",
    tag: "Trivia",
    time: "EVERY MONDAY AT 7:30 PM",
    location: "GATE PARKWAY",
  },
  {
    image: eventBingo,
    title: "BINGO NIGHT AT MANDARIN",
    tag: "Bingo",
    time: "EVERY MONDAY AT 7:00 PM",
    location: "MANDARIN",
  },
];

const EventsSection = () => {
  return (
    <section className="bg-background py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading mb-8">TODAY'S EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.title} className="flex bg-card overflow-hidden border border-border">
              <div className="relative w-[180px] flex-shrink-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h3 className="font-display text-primary-foreground text-lg font-bold uppercase leading-tight">
                    {event.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-center">
                <span className="inline-block bg-foreground text-background px-3 py-1 text-xs font-display tracking-wider uppercase mb-2 self-start">
                  {event.tag}
                </span>
                <p className="font-display text-foreground font-bold tracking-wider text-sm mb-2">{event.time}</p>
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin size={14} />
                  <span className="font-display text-xs tracking-[0.2em] uppercase">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
