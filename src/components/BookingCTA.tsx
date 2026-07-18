import { Calendar, Phone } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/77361_barberia-zappra_barberia_48863_barcelona";
const WHATSAPP_NUMBER = "34933051963";
const PHONE_NUMBER = "+34933051963";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.486-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const options = [
  {
    icon: Calendar,
    title: "Reservar por Booksy",
    description: "Elige día y hora en nuestra agenda online.",
    href: BOOKSY_URL,
    label: "Reservar por Booksy",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp directo",
    description: "Escríbenos y gestionamos tu cita al momento.",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "Abrir WhatsApp",
  },
  {
    icon: Phone,
    title: "Llamar ahora",
    description: "¿Prefieres hablar? Te atendemos directamente.",
    href: `tel:${PHONE_NUMBER}`,
    label: "Llamar ahora",
  },
];

function BookingOption({
  option,
  isFirst,
}: {
  option: (typeof options)[0];
  isFirst: boolean;
}) {
  const Icon = option.icon;
  return (
    <a
      href={option.href}
      target={option.href.startsWith("http") ? "_blank" : undefined}
      rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={option.label}
      className={`group flex flex-col items-center gap-6 px-8 py-12 text-center transition-all duration-500 hover:bg-bone hover:text-ink md:px-10 lg:px-14 ${
        isFirst ? "" : "border-t border-bone/15 md:border-t-0 md:border-l"
      }`}
    >
      <div className="flex h-14 w-14 items-center justify-center border border-bone/25 transition-colors duration-500 group-hover:border-ink/25">
        <Icon className="h-7 w-7" strokeWidth={1.2} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-serif text-2xl md:text-3xl">{option.title}</h3>
        <p className="max-w-xs text-sm leading-relaxed text-bone/65 transition-colors duration-500 group-hover:text-ink/65">
          {option.description}
        </p>
      </div>
      <span className="btn-luxury-inverse mt-2 !border-bone/40 !text-bone group-hover:!border-ink group-hover:!bg-ink group-hover:!text-bone">
        {option.title === "Reservar por Booksy" ? "Reservar" : "Contactar"}
      </span>
    </a>
  );
}

export function BookingCTA() {
  return (
    <section
      id="reserva"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-marble-dark py-24 text-bone md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bone/25 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center md:mb-20 animate-fade-up">
          <h2 className="font-serif text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
            Reserva tu momento
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/65 md:text-lg">
            Elige la opción que prefieras, te esperamos en{" "}
            <span className="text-bone">Carrer de Bilbao, 235</span>.
          </p>
        </div>

        <div className="grid divide-y divide-bone/15 border border-bone/15 md:grid-cols-3 md:divide-y-0 md:divide-x animate-fade-up">
          {options.map((option, index) => (
            <BookingOption key={option.title} option={option} isFirst={index === 0} />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bone/25 to-transparent" />
    </section>
  );
}
