"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceItem {
  name: string;
  price: string;
  time: string;
  note?: string;
  deposit?: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

const MENU: ServiceCategory[] = [
  {
    category: "Face",
    items: [
      { name: "Cheeks", price: "$15", time: "15 min" },
      { name: "Chin Only", price: "$15", time: "10 min" },
      { name: "Chin (includes Lower Lip)", price: "$15", time: "15 min" },
      { name: "Ears", price: "$15", time: "10 min" },
      { name: "Eyebrows", price: "$20", time: "15 min" },
      {
        name: "Full Face",
        price: "$58+",
        time: "30 min",
        deposit: "$20 deposit required for new clients",
      },
      { name: "Hairline", price: "$12", time: "15 min" },
      { name: "Lower Lip", price: "$12", time: "15 min" },
      { name: "Nose", price: "$15", time: "20 min" },
      { name: "Sideburns", price: "$15", time: "15 min" },
      { name: "Upper Lip", price: "$15", time: "15 min" },
    ],
  },
  {
    category: "Arms",
    items: [
      {
        name: "Arms (Full)",
        price: "$50",
        time: "30 min",
        deposit: "$20 deposit required for new clients",
        note: "From shoulder cap down, includes hands.",
      },
      { name: "Arms (Upper or Lower Only)", price: "$25", time: "20 min" },
      { name: "Hands", price: "$18", time: "15 min" },
      { name: "Underarm", price: "$25", time: "15 min" },
    ],
  },
  {
    category: "Back, Chest & Upper Body",
    items: [
      {
        name: "Back (Full)",
        price: "$60",
        time: "30 min",
        deposit: "$25 deposit required for new clients",
      },
      { name: "Back (Upper, Mid or Lower Only)", price: "$25", time: "15 min" },
      { name: "Chest", price: "$35", time: "25 min" },
      { name: "Chest Strip (Collarbone Down)", price: "$25", time: "15 min" },
      { name: "Neck", price: "$18", time: "15 min" },
      { name: "Shoulders", price: "$30", time: "25 min" },
    ],
  },
  {
    category: "Bikini & Brazilian",
    items: [
      { name: "Bikini Line", price: "$35", time: "20 min" },
      { name: "Bikini (Full Front)", price: "$45", time: "25 min" },
      {
        name: "Brazilian",
        price: "$55",
        time: "30 min",
        deposit: "$20 deposit required for new clients",
        note:
          "Full bikini area hair removal from the front to the back including bum strip. Can be fully cleaned up or leave a triangle, strip, or square on the front.",
      },
      { name: "Bum (Full)", price: "$30", time: "20 min" },
      { name: "Bum Strip", price: "$24", time: "15 min" },
      { name: "Inner Thighs", price: "$24", time: "15 min" },
    ],
  },
  {
    category: "Legs & Lower Body",
    items: [
      {
        name: "Legs (Full)",
        price: "$65",
        time: "45 min",
        deposit: "$25 deposit required for new clients",
      },
      {
        name: "Legs (Lower Only / Upper Only)",
        price: "$45",
        time: "30 min",
        note: "Upper legs only including knees OR lower legs only including knees and feet.",
      },
      { name: "Knees", price: "$20", time: "15 min" },
      { name: "Toes", price: "$15", time: "15 min" },
    ],
  },
  {
    category: "Stomach",
    items: [
      {
        name: "Stomach Strip",
        price: "$15",
        time: "15 min",
        note: "A straight line from just above the navel to just below the navel.",
      },
      { name: "Stomach (Full)", price: "$36+", time: "20 min" },
    ],
  },
  {
    category: "Other",
    items: [{ name: "Other", price: "$10", time: "5 min" }],
  },
];

export default function ServiceMenu() {
  return (
    <section
      id="menu"
      className="py-28 md:py-36 px-6 md:px-10"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--blush)" }}
          >
            Pricing
          </p>
          <h2
            id="menu-heading"
            className="font-serif text-cream text-balance leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300 }}
          >
            Full Service Menu
          </h2>
          <div
            className="w-10 mb-6"
            style={{ height: "1px", background: "var(--blush)", opacity: 0.5 }}
          />
          <p className="font-sans text-sm text-muted-foreground">
            All services are performed one-on-one in a private studio setting.
          </p>
        </div>

        {/* Accordion menu */}
        <Accordion className="space-y-0">
          {MENU.map((cat) => (
            <AccordionItem
              key={cat.category}
              value={cat.category}
              className="border-b border-border first:border-t"
            >
              <AccordionTrigger className="py-6 font-serif text-cream hover:no-underline hover:text-blush group">
                <span
                  className="text-lg font-normal tracking-wide text-left"
                  style={{ fontWeight: 400 }}
                >
                  {cat.category}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-0">
                  {cat.items.map((item, i) => (
                    <div
                      key={item.name}
                      className={`py-4 ${
                        i !== cat.items.length - 1 ? "border-b border-border/50" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-6">
                        {/* Name + badges + note */}
                        <div className="flex-grow min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-sans text-sm text-cream">
                              {item.name}
                            </span>
                            {item.deposit && (
                              <span
                                className="font-sans text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 border"
                                style={{
                                  borderColor: "var(--mauve)",
                                  color: "var(--blush)",
                                  opacity: 0.9,
                                }}
                              >
                                Deposit req.
                              </span>
                            )}
                          </div>
                          {item.deposit && (
                            <p className="font-sans text-xs text-muted-foreground mb-1">
                              {item.deposit}
                            </p>
                          )}
                          {item.note && (
                            <p className="font-sans text-xs text-muted-foreground italic leading-relaxed">
                              {item.note}
                            </p>
                          )}
                        </div>

                        {/* Price + time */}
                        <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0 text-right">
                          <span
                            className="font-serif text-base"
                            style={{ color: "var(--blush)" }}
                          >
                            {item.price}
                          </span>
                          <span className="font-sans text-xs text-muted-foreground w-12 sm:w-14 text-right">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Deposit note */}
        <p className="font-sans text-xs text-muted-foreground mt-8 text-center leading-relaxed">
          Services marked with a deposit requirement ask for a deposit at
          booking for new clients. Deposits go toward the service total.
        </p>
      </div>
    </section>
  );
}
