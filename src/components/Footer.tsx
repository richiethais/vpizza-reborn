import fatboyLogo from "@/assets/fatboy-logo-new.png";
import { MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top row: Brand + Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-20 w-auto" />
            <p
              className="text-primary-foreground text-lg font-bold tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FATBOY FRIED RICE
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Jacksonville's favorite fried rice, served fresh from the truck to your plate.
            </p>
          </div>

          {/* Locations & Hours */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-secondary text-lg font-bold tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LOCATIONS & HOURS
            </h3>

            {/* Location 1 */}
            <div className="flex flex-col gap-1.5">
              <p className="text-primary-foreground font-bold text-sm tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                LOCATION #1 — SOUTHSIDE
              </p>
              <a href="https://www.google.com/maps/search/?api=1&query=11450+Beach+Blvd+Jacksonville+FL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                <MapPin size={14} className="text-secondary shrink-0" />
                11450 Beach Blvd, Jacksonville, FL
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Clock size={14} className="text-secondary shrink-0" />
                Wed–Sun: 12:00 PM – 9:00 PM
              </div>
            </div>

            {/* Location 2 */}
            <div className="flex flex-col gap-1.5">
              <p className="text-primary-foreground font-bold text-sm tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                LOCATION #2 — WESTSIDE
              </p>
              <a href="https://www.google.com/maps/search/?api=1&query=1429+Cassat+Avenue+Jacksonville+FL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                <MapPin size={14} className="text-secondary shrink-0" />
                1429 Cassat Avenue, Jacksonville, FL
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Clock size={14} className="text-secondary shrink-0" />
                Thu–Sun: 2:00 PM – 9:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col items-center gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/fatboyfriedrice/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100063763532593" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@officialfatboyfriedrice?_r=1&_t=ZT-94Dv5npLZt7" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-xs text-center">
            © 2026 Fatboy Fried Rice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
