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
      <main className="ml-[210px] flex-1">
        <HeroSection />
        <ShipSection />
        <AboutSection />
        <LocationsSection />
        <PizzaStonesSection />
        <EventsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
