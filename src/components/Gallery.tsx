import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "@/lib/business";

const sizeClass = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const n = GALLERY.length;
  const close = useCallback(() => setActive(null), []);
  const step = useCallback((d: number) => setActive((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="galeria" className="scroll-mt-20 bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow animate-fade-up text-terra">Galería</p>
            <h2 className="animate-fade-up mt-6 text-5xl leading-[1] sm:text-6xl lg:text-7xl">
              El oficio, <em className="italic text-wood">de cerca.</em>
            </h2>
          </div>
          <p className="animate-fade-up max-w-xs text-ink/60">El local, el detalle y el resultado. Sin filtros.</p>
        </div>

        {n > 0 ? (
          <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[320px] lg:grid-cols-3">
            {GALLERY.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setActive(i)}
                className={`animate-fade-up group relative overflow-hidden bg-ink/5 ${sizeClass[img.size ?? "normal"]}`}
                aria-label={`Ampliar: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                {img.label && (
                  <span className="eyebrow absolute bottom-5 left-5 !text-[0.6rem] text-cream drop-shadow">
                    {img.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-fade-up mt-14 grid gap-3 sm:grid-cols-4">
            {["El oficio", "El detalle", "El espacio", "El resultado"].map((label, i) => (
              <div
                key={label}
                className={`flex aspect-[3/4] flex-col justify-between border border-ink/15 p-6 ${i % 2 ? "sm:mt-12" : ""}`}
              >
                <span className="eyebrow !text-[0.58rem] text-stone">0{i + 1}</span>
                <span className="font-display text-3xl italic text-ink/80">{label}</span>
              </div>
            ))}
            <p className="text-sm text-ink/50 sm:col-span-4">
              Las fotografías del local se publicarán muy pronto. Mientras tanto, te esperamos en {""}
              <a href="#contacto" className="link-underline text-ink">
                Carrer d'Argullós, 104
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {active !== null && n > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          className="animate-fade fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={close} className="absolute right-4 top-4 p-3 text-cream" aria-label="Cerrar">
            <X className="h-6 w-6" strokeWidth={1.25} />
          </button>
          {n > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-cream"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-8 w-8" strokeWidth={1} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-cream"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-8 w-8" strokeWidth={1} />
              </button>
            </>
          )}
          <span className="eyebrow absolute bottom-6 left-1/2 -translate-x-1/2 !text-[0.6rem] text-cream/60">
            {active + 1} / {n}
          </span>
        </div>
      )}
    </section>
  );
}
