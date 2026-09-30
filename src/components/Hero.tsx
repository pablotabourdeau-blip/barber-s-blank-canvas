import { ArrowRight, ArrowDown } from "lucide-react";
import { BOOKING_HREF, BOOKING_IS_EXTERNAL, BUSINESS, HERO_PHOTO } from "@/lib/business";

const ext = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-24 lg:pt-28">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:px-12 lg:pb-20">
        {/* Copy */}
        <div className="flex flex-col justify-between lg:col-span-6 lg:pr-12 lg:pt-10">
          <div>
            <p className="eyebrow animate-rise text-terra" style={{ animationDelay: "150ms" }}>
              {BUSINESS.tagline}
            </p>
            <h1
              className="animate-rise mt-6 font-display text-[3.4rem] leading-[0.95] sm:text-7xl lg:text-[5.6rem]"
              style={{ animationDelay: "300ms" }}
            >
              Más de 20 años
              <br />
              <em className="font-normal italic text-wood">cuidando tu estilo.</em>
            </h1>
            <p
              className="animate-rise mt-8 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
              style={{ animationDelay: "450ms" }}
            >
              Barbería de barrio en Nou Barris. Tradición de siempre y tendencias actuales, con el trato cercano de
              quien te conoce.
            </p>
            <div
              className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "650ms" }}
            >
              <a href={BOOKING_HREF} {...ext} className="btn btn-solid">
                Reservar cita <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="#jus" className="btn btn-ghost">
                Descubrir JUS
              </a>
            </div>
          </div>

          <dl
            className="animate-fade mt-14 grid grid-cols-2 gap-6 border-t border-ink/15 pt-6 text-sm lg:mt-20"
            style={{ animationDelay: "900ms" }}
          >
            <div>
              <dt className="eyebrow !text-[0.58rem] text-stone">Dónde</dt>
              <dd className="mt-2 leading-snug">
                {BUSINESS.address}
                <br />
                {BUSINESS.city}
              </dd>
            </div>
            <div>
              <dt className="eyebrow !text-[0.58rem] text-stone">Oficio</dt>
              <dd className="mt-2 leading-snug">
                {BUSINESS.yearsLabel} años
                <br />
                de experiencia
              </dd>
            </div>
          </dl>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[5/5] lg:aspect-auto lg:h-full lg:min-h-[640px]">
            {HERO_PHOTO ? (
              <img
                src={HERO_PHOTO.src}
                alt={HERO_PHOTO.alt}
                fetchPriority="high"
                className="animate-settle absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="animate-fade absolute inset-0 flex flex-col justify-between p-8 text-cream sm:p-12">
                <div className="flex items-start justify-between">
                  <span className="eyebrow !text-[0.58rem] text-cream/50">Est. · Nou Barris</span>
                  <span className="eyebrow !text-[0.58rem] text-cream/50">Barcelona</span>
                </div>
                <div aria-hidden="true" className="animate-settle select-none text-center">
                  <span className="block font-display text-[9rem] leading-none tracking-[-0.05em] sm:text-[13rem] lg:text-[15rem]">
                    JUS
                  </span>
                  <span className="animate-draw mx-auto mt-4 block h-px w-24 bg-terra" style={{ animationDelay: "900ms" }} />
                </div>
                <p className="max-w-xs font-display text-xl italic leading-snug text-cream/80">
                  “Conoces al barbero, sabes dónde estás y sabes que vas a salir satisfecho.”
                </p>
              </div>
            )}
          </div>
          <span className="absolute -left-3 top-8 hidden origin-left -rotate-90 eyebrow !text-[0.55rem] text-stone lg:block">
            {BUSINESS.neighbourhood}
          </span>
        </div>
      </div>

      <a
        href="#jus"
        aria-label="Bajar a la sección JUS"
        className="mx-auto mb-6 hidden w-fit items-center gap-2 eyebrow !text-[0.58rem] text-stone transition-colors hover:text-ink lg:flex"
      >
        <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} /> Descubrir
      </a>
    </section>
  );
}
