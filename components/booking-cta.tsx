export default function BookingCta() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden bg-card border-y border-border"
      aria-labelledby="cta-heading"
    >
      {/* Background card */}
      <div
        className="absolute inset-8 md:inset-16 border border-border pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle blush glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.08 15 / 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        <p
          className="font-sans text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--blush)" }}
        >
          Ready to Book
        </p>
        <h2
          id="cta-heading"
          className="font-serif text-cream text-balance leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300 }}
        >
          Book Your Appointment
        </h2>
        <div
          className="w-10 mb-8"
          style={{ height: "1px", background: "var(--blush)", opacity: 0.5 }}
        />
        <p className="font-sans text-muted-foreground leading-relaxed mb-12 text-sm md:text-base">
          Private, one-on-one waxing care in Rancho Peñasquitos. Book your session
          directly through the scheduling link below. Select your service, pick
          your time, and Alexandra will take care of the rest.
        </p>

        <a
          href="https://missionesthetics.glossgenius.com/book"
          className="font-sans text-sm tracking-[0.2em] uppercase px-14 py-5 bg-primary text-primary-foreground hover:bg-blush transition-colors duration-300"
        >
          Book Now
        </a>

        <p className="font-sans text-xs text-muted-foreground mt-8">
          Bookings managed through GlossGenius
        </p>
      </div>
    </section>
  );
}
