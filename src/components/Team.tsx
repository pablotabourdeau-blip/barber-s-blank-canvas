import { ArrowRight } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/77361_barberia-zappra_barberia_48863_barcelona";

const team = ["Ramiro", "Alejandro", "Carlos", "Lautaro"];

export function Team() {
  return (
    <section
      id="equipo"
      className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative animate-fade-up lg:order-2">
            <div aria-hidden className="absolute -inset-4 -z-10 bg-marble-light" />
            <img
              src="/photos/barber-at-work.jpg"
              alt="Barbero de Zappra trabajando en el local"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute bottom-4 left-4 h-16 w-16 border-b border-l border-brass/50"
            />
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-8 animate-fade-up lg:order-1">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-[80px]" />
              <span className="label-luxury">El equipo</span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
              Detrás de cada corte
            </h2>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Profesionales que entienden tu estilo y lo cuidan con dedicación,
              corte a corte.
            </p>

            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {team.map((name) => (
                <li key={name} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                  <span className="font-serif text-xl">{name}</span>
                </li>
              ))}
            </ul>

            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="btn-luxury self-start">
              Reservar con el equipo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
