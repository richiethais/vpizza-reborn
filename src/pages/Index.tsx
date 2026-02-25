import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import ShipSection from "@/components/ShipSection";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import PizzaStonesSection from "@/components/PizzaStonesSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="md:ml-[220px] flex-1 mt-[56px] md:mt-0">
        <HeroSection />
        <AboutSection />
        <LocationsSection />
        <PizzaStonesSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
