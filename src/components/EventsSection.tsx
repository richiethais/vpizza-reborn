import eventTrivia from "@/assets/event-trivia.jpg";
import eventBingo from "@/assets/event-bingo.jpg";
import { MapPin } from "lucide-react";

const events = [
  { image: eventTrivia, title: "FOOD TRUCK FRIDAY", tag: "Weekly", time: "EVERY FRIDAY 5–9 PM", location: "DOWNTOWN" },
  { image: eventBingo, title: "WEEKEND SPECIAL", tag: "Promo", time: "SAT & SUN ALL DAY", location: "ALL LOCATIONS" },
];

const EventsSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading mb-8">WHAT'S HAPPENING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.title} className="flex flex-col sm:flex-row bg-card overflow-hidden border border-border rounded">
              <div className="relative w-full sm:w-[180px] h-[160px] sm:h-auto flex-shrink-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/70 flex items-end p-4">
                  <h3 className="text-primary-foreground text-lg font-bold uppercase leading-tight" style={{ fontFamily: 'var(--font-display)' }}>{event.title}</h3>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-center">
                <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-xs tracking-wider uppercase mb-2 self-start rounded font-bold" style={{ fontFamily: 'var(--font-display)' }}>{event.tag}</span>
                <p className="text-foreground font-bold tracking-wider text-sm mb-2" style={{ fontFamily: 'var(--font-display)' }}>{event.time}</p>
                <div className="flex items-center gap-2 text-primary">
                  <MapPin size={14} />
                  <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ fontFamily: 'var(--font-display)' }}>{event.location}</span>
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
