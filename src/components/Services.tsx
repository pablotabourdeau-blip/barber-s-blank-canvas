import {
  Scissors,
  ScissorsLineDashed,
  Brush,
  Sparkles,
  ScanEye,
  ArrowRight,
} from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/77361_barberia-zappra_barberia_48863_barcelona";

const services = [
  { icon: Scissors, title: "Corte de pelo", price: "15€", duration: "30 min" },
  { icon: ScanEye, title: "Corte + cejas", price: "18€", duration: "30 min" },
  { icon: ScissorsLineDashed, title: "Corte + barba", price: "25€", duration: "45 min" },
  { icon: Brush, title: "Arreglo de barba", price: "10€", duration: "20 min" },
  { icon: Sparkles, title: "Ritual de barba", price: "15€", duration: "30 min" },
  { icon: ScissorsLineDashed, title: "Corte + ritual de barba", price: "30€", duration: "1h" },
];

function ServiceCard({
  icon: Icon,
  title,
  price,
  duration,
}: {
  icon: React.ElementType;
  title: string;
  price: string;
  duration: string;
}) {
  return (
    <div className="card-glass group relative flex flex-col justify-between p-8">
      <div className="mb-10 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center border border-ink/12">
          <Icon className="h-6 w-6 text-brass" strokeWidth={1.25} />
        </div>
        <div className="text-right">
          <span className="font-serif text-3xl">{price}</span>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            {duration}
          </div>
        </div>
      </div>
      <h3 className="font-serif text-xl leading-tight">{title}</h3>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 flex items-center gap-4">
              <span className="hairline max-w-[80px]" />
              <span className="label-luxury">Servicios</span>
            </div>
            <h2 className="font-serif text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
              Cuidado a la altura de tu estilo
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            Trabajamos con cita previa para cuidar cada detalle. Precios
            confirmados en Booksy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          Consulta el resto de combinados y tratamientos disponibles en
          Booksy — la carta completa se confirma con más detalle según lo que
          nos confirme el cliente.
        </p>

        {/* CTA */}
        <div className="mt-16 flex justify-center animate-fade-up">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury !py-4 !px-14"
          >
            Reservar cita ahora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
