import fatboyLogo from "@/assets/fatboy-logo.webp";

const footerLinks = [
  ["Our Story", "Menu", "Gift Cards"],
  ["Order Online", "Events", "potato"],
  ["Contact", "Catering", "Jobs"],
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
          {footerLinks.map((col, i) => (
            <div key={i} className="flex flex-col gap-2">
              {col.map((link) => (
                <a key={link} href="#" className="text-primary hover:text-primary/70 text-sm transition-colors font-medium">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-24 w-auto" />
          <p className="text-primary text-lg font-bold mt-2" style={{ fontFamily: 'var(--font-display)' }}>FATBOY FRIED RICE</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">© 2025 Fatboy Fried Rice. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
