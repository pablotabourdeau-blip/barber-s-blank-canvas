import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { BOOKING_HREF, BOOKING_IS_EXTERNAL, BUSINESS } from "@/lib/business";

export const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "JUS", href: "#jus" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const ext = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "animate-fade fixed inset-x-0 top-0 z-50 text-ink transition-all duration-500",
          scrolled ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md" : "border-b border-transparent",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12",
            scrolled ? "py-3" : "py-5 lg:py-7",
          ].join(" ")}
        >
          <a href="#inicio" aria-label={`${BUSINESS.name} — inicio`}>
            <Wordmark />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="eyebrow link-underline !text-[0.66rem]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={BOOKING_HREF} {...ext} className="btn btn-solid !min-h-10 !px-4 sm:!min-h-11 sm:!px-6">
              Reservar
            </a>
            <button
              onClick={() => setOpen(true)}
              className="-mr-2 p-2 lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        className={[
          "fixed inset-0 z-[60] flex flex-col bg-ink text-cream transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 py-5 sm:px-8">
          <Wordmark />
          <button onClick={() => setOpen(false)} className="-mr-2 p-2" aria-label="Cerrar menú">
            <X className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
        <nav aria-label="Móvil" className="flex flex-1 flex-col justify-center px-5 sm:px-8">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={[
                "flex items-baseline gap-5 border-b border-cream/10 py-4 font-display text-5xl transition-all duration-700",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              ].join(" ")}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="eyebrow !text-[0.6rem] text-cream/40">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="space-y-4 px-5 pb-10 sm:px-8">
          <a href={BOOKING_HREF} {...ext} className="btn btn-solid-light w-full">
            Reservar cita <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <p className="text-center text-sm text-cream/60">
            {BUSINESS.address} · {BUSINESS.phone}
          </p>
        </div>
      </div>
    </>
  );
}
