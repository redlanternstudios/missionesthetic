const FEATURED = [
  {
    name: "Brazilian",
    description:
      "Full bikini area hair removal front to back. Fully cleaned up or leave your preferred shape.",
    price: "$55",
    time: "30 min",
  },
  {
    name: "Brows",
    description:
      "Precise eyebrow shaping for a clean, defined, and flattering arch.",
    price: "$20",
    time: "15 min",
  },
  {
    name: "Full Face",
    description:
      "Complete facial waxing covering upper lip, chin, cheeks, and brows.",
    price: "$58+",
    time: "30 min",
  },
  {
    name: "Underarm",
    description:
      "Clean and smooth underarm waxing for lasting results.",
    price: "$25",
    time: "15 min",
  },
  {
    name: "Full Legs",
    description:
      "Full leg waxing from the hip down, including knees and feet.",
    price: "$65",
    time: "45 min",
  },
  {
    name: "Full Arms",
    description:
      "Complete arm waxing from shoulder cap down, including hands.",
    price: "$50",
    time: "30 min",
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="py-28 md:py-36 px-6 md:px-10"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--blush)" }}
          >
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="font-serif text-cream text-balance leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300 }}
          >
            Specialties
          </h2>
          <div
            className="w-10"
            style={{ height: "1px", background: "var(--blush)", opacity: 0.5 }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {FEATURED.map((svc) => (
            <article
              key={svc.name}
              className="bg-background p-8 md:p-10 flex flex-col group hover:bg-card transition-colors duration-300"
            >
              {/* Number accent */}
              <div
                className="font-serif text-5xl leading-none mb-6 opacity-15 group-hover:opacity-25 transition-opacity"
                style={{ color: "var(--blush)" }}
                aria-hidden="true"
              >
                {String(FEATURED.indexOf(svc) + 1).padStart(2, "0")}
              </div>

              <h3
                className="font-serif text-cream text-xl mb-4 leading-tight"
                style={{ fontWeight: 400 }}
              >
                {svc.name}
              </h3>

              <p
                className="font-sans text-sm text-muted-foreground leading-relaxed mb-8 flex-grow"
              >
                {svc.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className="font-serif text-xl"
                  style={{ color: "var(--blush)" }}
                >
                  {svc.price}
                </span>
                <span className="font-sans text-xs tracking-wider text-muted-foreground uppercase">
                  {svc.time}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="#menu"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-border text-muted-foreground hover:text-cream hover:border-blush transition-colors duration-300"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
