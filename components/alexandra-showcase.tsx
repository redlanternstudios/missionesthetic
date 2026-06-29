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
            Alexandra
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

          <div className="mb-12 space-y-7 max-w-xl">
            <p
              className="font-sans text-muted-foreground"
              style={{ fontSize: "1rem", lineHeight: 1.85 }}
            >
              If you know Alexandra, you already know the feeling.
            </p>
            <p
              className="font-sans text-muted-foreground"
              style={{ fontSize: "1rem", lineHeight: 1.85 }}
            >
              You walk in a little nervous, and you leave glowing. Lighter,
              brighter, laughing.
            </p>
            <p
              className="font-sans text-muted-foreground"
              style={{ fontSize: "1rem", lineHeight: 1.85 }}
            >
              She has a gift for making even the most personal appointments feel
              easy. Like catching up with the friend who somehow always makes you
              feel like the best version of yourself.
            </p>
            <p
              className="font-sans text-muted-foreground"
              style={{ fontSize: "1rem", lineHeight: 1.85 }}
            >
              Behind the warmth is a true perfectionist. Every wax is precise,
              gentle, and done with care. Brows, face, underarms, bikini,
              Brazilian, or full body.
            </p>
            <p
              className="font-sans text-muted-foreground"
              style={{ fontSize: "1rem", lineHeight: 1.85 }}
            >
              Her private studio is your space to exhale. Calm, judgment-free, and
              entirely about you.
            </p>
            <p
              className="font-serif italic text-cream"
              style={{ fontSize: "1.15rem", lineHeight: 1.6 }}
            >
              Come for the smooth results. Stay for the energy that keeps her
              clients coming back for years.
            </p>
          </div>

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
            href="https://missionesthetics.glossgenius.com/book"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-blush transition-colors duration-300 text-center"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}
