import { useEffect, useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/77361_barberia-zappra_barberia_48863_barcelona";

type GalleryImage = {
  src: string;
  alt: string;
  span: string;
};

const IMAGES: GalleryImage[] = [
  {
    src: "/photos/interior-lounge.jpg",
    alt: "Interior del local Zappra",
    span: "md:col-span-2 md:row-span-2 aspect-[4/3]",
  },
  {
    src: "/photos/fade-design.jpg",
    alt: "Diseño de fade al detalle",
    span: "aspect-[4/5]",
  },
  {
    src: "/photos/client-portrait.jpg",
    alt: "Corte terminado, línea limpia",
    span: "aspect-[4/5]",
  },
  {
    src: "/photos/barber-at-work.jpg",
    alt: "Barbero de Zappra trabajando",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/photos/barber-detail.jpg",
    alt: "Detalle de un corte en proceso",
    span: "aspect-square",
  },
  {
    src: "/photos/storefront.jpg",
    alt: "Fachada de Zappra Premium Barber Lounge",
    span: "aspect-square",
  },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  return (
    <section id="galeria" className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <span className="label-luxury inline-flex items-center gap-3">
            <span className="hairline w-8" />
            Galería
            <span className="hairline w-8" />
          </span>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            El espacio y el detalle
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Nuestro local, el trabajo diario y el detalle en cada corte.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className={`group relative overflow-hidden border border-ink/10 bg-card ${img.span}`}
              aria-label={`Ampliar imagen: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 opacity-0 transition-opacity duration-500 group-hover:bg-ink/10 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/80 bg-ink/50 text-bone backdrop-blur-sm">
                  <Plus className="h-5 w-5" strokeWidth={1.2} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-ink/10 pt-12 md:mt-20 md:flex-row md:items-end md:justify-between md:pt-14">
          <div className="max-w-md text-center md:text-left">
            <span className="label-luxury">¿Te gusta lo que ves?</span>
            <p className="mt-3 font-serif text-2xl leading-tight md:text-3xl">
              El próximo corte de la galería puede ser el tuyo.
            </p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
          >
            Reservar cita
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 md:p-10 animate-fade-up"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center border border-bone/50 text-bone transition-colors hover:bg-bone hover:text-ink"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" strokeWidth={1.2} />
          </button>
          <img
            src={IMAGES[openIndex].src}
            alt={IMAGES[openIndex].alt}
            className="max-h-[85vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
