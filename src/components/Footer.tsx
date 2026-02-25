import fatboyLogo from "@/assets/fatboy-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-20 w-auto" />
        <p className="text-primary text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>FATBOY FRIED RICE</p>
        <p className="text-muted-foreground text-xs">© 2025 Fatboy Fried Rice. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
