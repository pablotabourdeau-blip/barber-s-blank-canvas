import { ArrowUpRight, Phone } from "lucide-react";
import { BUSINESS, HOURS, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "@/lib/business";

export function Location() {
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-ink/10 bg-paper py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <p className="eyebrow animate-fade-up text-terra">Contacto</p>
          <h2 className="animate-fade-up mt-6 text-5xl leading-[1] sm:text-6xl lg:text-7xl">
            Ven a <em className="italic text-wood">conocernos.</em>
          </h2>

          <address className="animate-fade-up mt-12 space-y-8 not-italic">
            <div>
              <p className="eyebrow !text-[0.58rem] text-stone">Dirección</p>
              <p className="mt-2 font-display text-2xl leading-snug">
                {BUSINESS.address}
                <br />
                {BUSINESS.postalCode} {BUSINESS.city}
              </p>
              <p className="mt-1 text-sm text-ink/55">{BUSINESS.neighbourhood}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow !text-[0.58rem] text-stone">Teléfono</p>
                <a href={BUSINESS.phoneHref} className="link-underline mt-2 inline-block text-lg">{BUSINESS.phone}</a>
              </div>
              <div>
                <p className="eyebrow !text-[0.58rem] text-stone">Email</p>
                <a href={`mailto:${BUSINESS.email}`} className="link-underline mt-2 inline-block text-lg">{BUSINESS.email}</a>
              </div>
            </div>
          </address>

          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              Cómo llegar <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href={BUSINESS.phoneHref} className="btn btn-ghost">
              <Phone className="h-4 w-4" strokeWidth={1.5} /> Llamar
            </a>
            {BUSINESS.whatsapp && (
              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="space-y-12 lg:col-span-6 lg:col-start-7">
          <div className="animate-fade-up">
            <p className="eyebrow !text-[0.58rem] text-stone">Horario</p>
            <table className="mt-4 w-full text-left">
              <caption className="sr-only">Horario de apertura de Barberia JUS</caption>
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h.day} className="border-b border-ink/10">
                    <th scope="row" className="py-3.5 font-medium">{h.day}</th>
                    <td className={`py-3.5 text-right tabular-nums ${h.hours ? "text-ink/75" : "text-terra"}`}>
                      {h.hours ?? "Cerrado"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="animate-fade-up aspect-[4/3] overflow-hidden border border-ink/10 bg-muted">
            <iframe
              title={`Mapa: ${BUSINESS.name}, ${BUSINESS.address}, ${BUSINESS.city}`}
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.85] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
