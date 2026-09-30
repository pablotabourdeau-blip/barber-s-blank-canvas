import { ArrowUpRight } from "lucide-react";
import { BOOKING_HREF, BOOKING_IS_EXTERNAL, SERVICES } from "@/lib/business";

const ext = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-ink py-24 text-cream lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow animate-fade-up text-cream/50">Servicios</p>
            <h2 className="animate-fade-up mt-6 text-5xl leading-[1.02] sm:text-6xl">
              El clásico.
              <br />
              Lo actual.
              <br />
              <em className="italic text-cream/60">Lo que te queda bien.</em>
            </h2>
            <p className="animate-fade-up mt-8 max-w-sm text-cream/60">
              Precios y tiempos, en la barbería o por teléfono. Te asesoramos sobre lo que mejor te va.
            </p>
          </div>
        </div>

        <ol className="border-t border-cream/15 lg:col-span-7 lg:col-start-6">
          {SERVICES.map((s) => (
            <li key={s.name} className="animate-fade-up border-b border-cream/15">
              <a
                href={BOOKING_HREF}
                {...ext}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-2 py-8 transition-colors sm:gap-x-8 lg:py-10"
                aria-label={`Reservar: ${s.name}`}
              >
                <span className="eyebrow !text-[0.6rem] text-cream/40">{s.category}</span>
                <span className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                  {s.name}
                </span>
                <span className="eyebrow flex items-center gap-2 !text-[0.6rem] text-cream/50 transition-colors group-hover:text-cream">
                  {s.price ?? "Consultar"}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.25} />
                </span>
                <span className="col-start-2 col-end-4 max-w-md text-sm leading-relaxed text-cream/60">
                  {s.description}
                  {s.duration && <span className="text-cream/40"> · {s.duration}</span>}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
