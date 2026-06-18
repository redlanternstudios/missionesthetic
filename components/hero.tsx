"use client";

import { useEffect, useRef } from "react";

const FLOWER_VIDEO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/now_do_the_video-F3DIuRN3CkUUOIV5gDNV15svsayBPS.mp4";

interface FlowerVideoProps {
  className?: string;
  style?: React.CSSProperties;
}

function FlowerVideo({ className = "", style }: FlowerVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={FLOWER_VIDEO}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Mission Esthetics hero"
    >
      {/* ── Single flower video centred behind the heading ── */}
      {/*
        Positioned at the vertical mid-point of the hero so the bloom sits
        directly under the "Mission Esthetics" wordmark. A tight radial mask
        dissolves the edges to nothing, leaving only the centre petal cluster
        barely visible. Opacity is intentionally low so the dark background
        reads through cleanly and the text stays fully legible.
      */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -48%)",
          width: "min(90vw, 700px)",
          opacity: 0.13,
          maskImage:
            "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <FlowerVideo className="w-full h-auto" />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="font-sans text-xs tracking-[0.35em] uppercase mb-6"
          style={{ color: "var(--blush)" }}
        >
          Mission Valley &middot; Private Studio
        </p>

        {/* Brand name */}
        <h1
          className="font-serif text-cream text-balance leading-none mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
          }}
        >
          Mission Esthetics
        </h1>

        {/* Thin rule */}
        <div
          className="w-16 mb-8"
          style={{ height: "1px", background: "var(--blush)", opacity: 0.6 }}
        />

        {/* Subheading */}
        <p
          className="font-serif italic text-muted-foreground text-balance mb-3"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", fontWeight: 300 }}
        >
          Private waxing and esthetics in Mission Valley
        </p>

        <p
          className="font-sans text-muted-foreground text-sm tracking-wide mb-12"
          style={{ letterSpacing: "0.05em" }}
        >
          Smooth skin. Soft confidence. One-on-one care.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://missionesthetics.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-blush transition-colors duration-300 min-w-[160px] text-center"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-border text-muted-foreground hover:text-cream hover:border-blush transition-colors duration-300 min-w-[160px] text-center"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-10 bg-muted-foreground" />
      </div>
    </section>
  );
}
