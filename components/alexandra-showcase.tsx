const SPECIALTIES = [
  "Brazilian Waxing",
  "Bikini Waxing",
  "Brows and Facial Waxing",
  "Underarm and Body Waxing",
  "Full Legs and Full Arms",
  "First-Time Client Care",
];

export default function AlexandraShowcase() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle top border rule */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, transparent, var(--border))" }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto">
        {/* Text panel */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--blush)" }}
          >
            Meet the Specialist
          </p>

          <h2
            id="about-heading"
            className="font-serif text-cream text-balance leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300 }}
          >
            Alexandra Brown
          </h2>

          <p
            className="font-serif italic text-muted-foreground mb-8"
            style={{ fontSize: "1.05rem", lineHeight: 1.5 }}
          >
            Waxing Specialist at Mission Esthetics
          </p>

          <div
            className="w-10 mb-8"
            style={{ height: "1px", background: "var(--blush)", opacity: 0.5 }}
          />

          <p
            className="font-sans text-muted-foreground leading-relaxed mb-10"
            style={{ fontSize: "0.9375rem" }}
          >
            Alexandra Brown offers private, detail-focused waxing services in a
            clean and comfortable setting. Her work is centered around smooth
            results, client comfort, and a calm one-on-one experience. Whether
            it is brows, face, underarms, bikini, Brazilian, or full-body
            waxing, Alexandra&apos;s approach is thoughtful, professional, and
            confidence-driven.
          </p>

          {/* Specialties */}
          <div className="mb-10">
            <p
              className="font-sans text-xs tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--blush)" }}
            >
              Specialties
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {SPECIALTIES.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 font-sans text-sm text-muted-foreground"
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--blush)" }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://missionesthetics.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-blush transition-colors duration-300 text-center"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}
