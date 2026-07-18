import { Instagram, Gem, Scissors, Hourglass } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/barberia.zappra";

const highlights = [
  {
    icon: Gem,
    label: "Productos de calidad",
    description: "Marcas seleccionadas para el cuidado del cabello y la barba.",
  },
  {
    icon: Scissors,
    label: "El equipo",
    description: "Ramiro, Alejandro, Carlos y Lautaro — años de experiencia en cada corte.",
  },
  {
    icon: Hourglass,
    label: "Sin prisas",
    description: "Cada cita es un momento para ti, atendido de uno en uno.",
  },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40"
    >
      {/* Decorative hairline top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative animate-fade-up">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 bg-marble-light"
            />

            <img
              src="/photos/fade-design.jpg"
              alt="Diseño de fade realizado en Zappra"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />

            {/* Corner hairline accents */}
            <div
              aria-hidden
              className="absolute top-4 right-4 h-16 w-16 border-t border-r border-brass/50"
            />
            <div
              aria-hidden
              className="absolute bottom-4 left-4 h-16 w-16 border-b border-l border-brass/50"
            />
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-8 animate-fade-up">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-[80px]" />
              <span className="label-luxury">Nuestra esencia</span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
              Más que un corte de pelo
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Cada corte, pensado para ti. Buen trato, buena técnica, sin fórmulas genéricas. En el corazón de Sant Martí, Barcelona.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, label, description }) => (
                <div key={label} className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-ink/12 bg-card">
                    <Icon className="h-5 w-5 text-brass" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-serif text-lg">{label}</div>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury self-start"
            >
              <Instagram className="h-4 w-4" />
              Conócenos en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
