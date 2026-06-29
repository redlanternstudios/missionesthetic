import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Brand + Logo */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/images/mission-esthetics-logo.png"
            alt="Mission Esthetics"
            width={100}
            height={120}
            className="h-20 md:h-24 w-auto object-contain"
          />
          <p className="font-sans text-xs text-muted-foreground">
            Private waxing and esthetics in Rancho Peñasquitos
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Menu", href: "#menu" },
              {
                label: "Book",
                href: "https://missionesthetics.glossgenius.com/book",
                external: false,
              },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom rule */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Mission Esthetics. All rights reserved.
        </p>
        <p className="font-sans text-xs text-muted-foreground">
          Book your appointment today.
        </p>
      </div>
    </footer>
  );
}
