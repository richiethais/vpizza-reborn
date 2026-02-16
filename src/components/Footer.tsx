const footerLinks = [
  ["Our Story", "V for Victory", "Gift Cards", "Food Guide"],
  ["Order Online", "Menu", "Events", "Locations"],
  ["Contact", "Catering", "Sitemap", "Jobs"],
];

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex gap-16">
          {footerLinks.map((col, i) => (
            <div key={i} className="flex flex-col gap-2">
              {col.map((link) => (
                <a key={link} href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-body transition-colors">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-primary-foreground font-serif text-6xl font-bold">V</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
