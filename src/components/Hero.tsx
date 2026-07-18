import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, MapPin, Clock } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/77361_barberia-zappra_barberia_48863_barcelona";
const WHATSAPP_URL = "https://wa.me/34933051963";

// Foto real del interior de Zappra (Carrer de Bilbao, 235).
const BG_IMAGE = "/photos/interior-lounge.jpg";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setOffset(Math.min(window.scrollY * 0.18, 160));
        rafRef.current = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const stagger = (i: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translate3d(0, 22px, 0)",
    transition: `opacity 750ms cubic-bezier(0.22,1,0.36,1) ${120 + i * 110}ms, transform 750ms cubic-bezier(0.22,1,0.36,1) ${120 + i * 110}ms`,
  });

  return (
    <section
      id="inicio"
      className="relative min-h-[86svh] w-full overflow-hidden bg-bone text-ink"
    >
      {/* Imagen a la derecha, recortada — no ocupa todo el fondo como antes.
          En minimalismo la imagen es un bloque, no un telón oscuro. */}
      <div className="absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden lg:block">
        <div
          className="h-[120%] w-full will-change-transform"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        >
          <img
            src={BG_IMAGE}
            alt="Interior de Barbería Zappra"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[86svh] max-w-7xl flex-col px-6 pb-10 pt-28 lg:px-10 lg:pt-32">
        {/* Top strip */}
        <div className="flex flex-wrap items-center justify-between gap-4" style={stagger(0)}>
          <span className="label-luxury">Barcelona · Sant Martí</span>
          <span className="label-luxury hidden sm:block">Solo con cita previa</span>
        </div>

        <div className="mt-10 md:mt-14">
          <div className="max-w-3xl lg:max-w-2xl">
            <div className="mb-5 flex items-center gap-4" style={stagger(1)}>
              <span className="hairline max-w-[80px]" />
              <span className="label-luxury">Barbería</span>
            </div>

            <h1
              className="font-serif text-[3.2rem] leading-[0.98] tracking-tight sm:text-[4.2rem] md:text-[5.2rem]"
              style={stagger(2)}
            >
              Cuidado con
              <br />
              <span className="italic text-brass">oficio</span>, sin prisa.
            </h1>

            <p
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
              style={stagger(3)}
            >
              Barbería en el corazón de Sant Martí, Barcelona. Cortes,
              barbas y afeitados con la atención de siempre.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4" style={stagger(4)}>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
              >
                Reservar por Booksy
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-inverse"
              >
                WhatsApp
              </a>

              <div className="flex items-center gap-3 pl-2 sm:pl-4 sm:border-l sm:border-ink/15">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-brass text-brass"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-ink">4.9 en Booksy</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    474 reseñas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="mt-10 md:mt-12" style={stagger(5)}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/10 pt-5 md:grid-cols-4 lg:max-w-2xl">
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-brass mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="label-luxury !text-muted-foreground/70 mb-0.5">Dirección</div>
                <div className="text-sm text-ink/90 leading-tight">Carrer de Bilbao, 235</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
              <div>
                <div className="label-luxury !text-muted-foreground/70 mb-0.5">Barrio</div>
                <div className="text-sm text-ink/90 leading-tight">Sant Martí</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-brass mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="label-luxury !text-muted-foreground/70 mb-0.5">Horario</div>
                <div className="text-sm text-ink/90 leading-tight">Mar — Sáb · 10 — 20h</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
              <div>
                <div className="label-luxury !text-muted-foreground/70 mb-0.5">Reservas</div>
                <div className="text-sm text-ink/90 leading-tight">Booksy o WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
