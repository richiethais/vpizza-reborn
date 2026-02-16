import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import ShipSection from "@/components/ShipSection";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import PizzaStonesSection from "@/components/PizzaStonesSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="md:ml-[220px] flex-1 mt-[56px] md:mt-0">
        <HeroSection />
        <EventsSection />
        <ShipSection />
        <AboutSection />
        <LocationsSection />
        <PizzaStonesSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
