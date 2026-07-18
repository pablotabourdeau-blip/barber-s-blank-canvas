import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bone/95 text-ink border-b border-ink/10 backdrop-blur-sm"
            : "bg-transparent text-ink",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-tight">ZAPPRA</span>
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-brass">
              Premium Barber Lounge
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="label-luxury !text-[0.68rem] !text-current opacity-70 transition-opacity hover:opacity-100 hover:!text-brass"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#reserva" className="btn-luxury-inverse !py-3 !px-6">
              Reservar cita
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <a href="#reserva" className="btn-luxury-inverse !py-2.5 !px-4 !text-[0.65rem] hidden sm:inline-flex">
              Reservar
            </a>
            <button
              onClick={() => setOpen(true)}
              className="p-2 -mr-2"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={[
          "fixed inset-0 z-[60] bg-bone text-ink transition-all duration-500 lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-tight">ZAPPRA</span>
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-brass">
              Premium Barber Lounge
            </span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 -mr-2"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-16">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-5 font-serif text-3xl transition-opacity hover:opacity-70"
              style={{
                animation: open
                  ? `fade-up 600ms cubic-bezier(0.22,1,0.36,1) ${150 + i * 70}ms both`
                  : "none",
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#reserva"
            onClick={() => setOpen(false)}
            className="btn-luxury mt-10"
            style={{
              animation: open
                ? `fade-up 600ms cubic-bezier(0.22,1,0.36,1) ${150 + navItems.length * 70}ms both`
                : "none",
            }}
          >
            Reservar cita
          </a>

          <div className="mt-12 label-luxury !text-muted-foreground">
            Carrer de Bilbao, 235 · Barcelona
          </div>
        </nav>
      </div>
    </>
  );
}
