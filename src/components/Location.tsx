import { MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";

const ADDRESS = "Carrer de Bilbao, 235, 08018 Barcelona";
const PHONE_NUMBER = "+34 933 05 19 63";
const WHATSAPP_NUMBER = "34933051963";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Bilbao+235+08018+Barcelona";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Carrer+de+Bilbao+235+08018+Barcelona&t=&z=16&ie=UTF8&iwloc=&output=embed";

const schedule = [
  { day: "Lunes", hours: "Cerrado" },
  { day: "Martes — Viernes", hours: "10:00 — 20:00" },
  { day: "Sábado", hours: "10:00 — 20:00" },
  { day: "Domingo", hours: "Cerrado" },
];

export function Location() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map column */}
          <div className="relative animate-fade-up">
            <div className="absolute -inset-3 -z-10 bg-marble-light" aria-hidden />
            <div className="aspect-[4/5] w-full overflow-hidden border border-ink/10 bg-card md:aspect-square lg:aspect-[4/5]">
              <iframe
                src={MAP_EMBED_URL}
                title="Mapa de ubicación de Zappra"
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              aria-hidden
              className="absolute bottom-4 left-4 h-12 w-12 border-b border-l border-brass/50"
            />
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-10 animate-fade-up lg:py-8">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="hairline max-w-[80px]" />
                <span className="label-luxury">Visítanos</span>
              </div>
              <h2 className="font-serif text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
                Encuéntranos en Sant Martí
              </h2>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/12">
                <MapPin className="h-5 w-5 text-brass" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-serif text-xl">{ADDRESS}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Barcelona, España
                </p>
              </div>
            </div>

            {/* Schedule table */}
            <div>
              <h3 className="mb-4 font-serif text-lg">Horario</h3>
              <div className="border border-ink/10">
                {schedule.map(({ day, hours }, index) => (
                  <div
                    key={day}
                    className={`grid grid-cols-2 px-5 py-3 text-sm ${
                      index !== schedule.length - 1 ? "border-b border-ink/10" : ""
                    }`}
                  >
                    <span className="text-muted-foreground">{day}</span>
                    <span className="text-right font-medium">{hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Horario orientativo — a confirmar con el cliente.
              </p>
            </div>

            {/* Contact */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 border border-ink/10 p-4 transition-colors duration-300 hover:border-brass/50"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-ink/12">
                  <Phone className="h-5 w-5 text-brass" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Teléfono
                  </p>
                  <p className="font-medium">{PHONE_NUMBER}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-ink/10 p-4 transition-colors duration-300 hover:border-brass/50"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-ink/12">
                  <MessageCircle className="h-5 w-5 text-brass" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="font-medium">{PHONE_NUMBER}</p>
                </div>
              </a>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury self-start"
            >
              Cómo llegar
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
