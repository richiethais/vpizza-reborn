const deliveryServices = [
  {
    logo: "/images/uber-eats-logo.svg",
    name: "Uber Eats",
    logoBg: "bg-black",
    buttons: [
      { label: "FATBOY FRIEDRICE UBER EATS (SOUTHSIDE)", url: "#" },
      { label: "FATBOY FRIEDRICE UBER EATS (WESTSIDE)", url: "#" },
    ],
  },
  {
    logo: "/images/doordash-logo.svg",
    name: "DoorDash",
    logoBg: "bg-background",
    buttons: [
      { label: "FATBOY FRIEDRICE SOUTHSIDE DOORDASH", url: "#" },
      { label: "FATBOY FRIEDRICE WESTSIDE DOORDASH", url: "#" },
    ],
  },
];

const EventsSection = () => {
  return (
    <section className="bg-primary py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-12 md:mb-16 text-primary-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ORDER FOR DELIVERY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {deliveryServices.map((service) => (
            <div key={service.name} className="flex flex-col items-center gap-5">
              {/* Logo */}
              <div
                className={`${service.logoBg} rounded-2xl p-6 flex items-center justify-center w-48 h-48 md:w-56 md:h-56 shadow-lg`}
              >
                <img
                  src={service.logo}
                  alt={service.name}
                  className={`w-full h-auto max-h-32 object-contain ${service.name === "DoorDash" ? "" : "invert-0"}`}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 w-full max-w-xs">
                {service.buttons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center px-5 py-3 rounded-full text-xs md:text-sm shadow-md"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
