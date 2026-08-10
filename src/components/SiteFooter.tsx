import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "Download",
    links: [
      { label: "Google Play", to: "/features" },
      { label: "Chrome Store", to: "/features" },
      { label: "Apple Store", to: "/features" },
    ],
  },
  {
    title: "Shopping",
    links: [{ label: "All Partners", to: "/features" }],
  },
  {
    title: "Company",
    links: [
      { label: "Press", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy", to: "/faq" },
      { label: "Terms", to: "/faq" },
      { label: "Copyright", to: "/faq" },
      { label: "Return Policy", to: "/faq" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute inset-x-0 bottom-0 select-none text-center text-[26vw] leading-[0.75] lowercase tracking-[-0.04em] text-foreground/[0.045]"
      >
        passr
      </span>

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:px-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Passr on X" className="transition-colors hover:text-foreground">
              <Twitter className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Passr on Instagram"
              className="transition-colors hover:text-foreground"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Passr on LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 • All Rights Reserved</p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4 md:gap-x-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.8125rem] font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[0.8125rem] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
