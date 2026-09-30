import { BUSINESS } from "@/lib/business";

const FACTS = [
  { big: BUSINESS.yearsLabel, label: "Años de experiencia" },
  { big: "Barbería", label: "Tradición + tendencia" },
  { big: "Barcelona", label: "Nou Barris" },
];

export function About() {
  return (
    <section id="jus" className="scroll-mt-20 border-t border-ink/10 bg-paper py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <p className="eyebrow animate-fade-up text-terra">JUS</p>
          <h2 className="animate-fade-up mt-6 text-5xl leading-[1] sm:text-6xl lg:text-7xl">
            Más de 20 años
            <br />
            <em className="italic text-wood">detrás de cada corte.</em>
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-6 lg:col-start-7 lg:pt-16">
          <p className="animate-fade-up">
            JUS nace de la experiencia, el oficio y el trato cercano. Una barbería de barrio que combina la tradición
            de siempre con las tendencias actuales.
          </p>
          <p className="animate-fade-up">
            No queremos parecer una gran cadena. Queremos que, cuando entres por la puerta, conozcas al barbero, sepas
            dónde estás y sepas que vas a salir satisfecho.
          </p>
        </div>

        <dl className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-3 lg:col-span-12 lg:mt-10">
          {FACTS.map((f, i) => (
            <div
              key={f.label}
              className="animate-fade-up bg-paper py-10 sm:px-8 sm:first:pl-0"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-display text-5xl lg:text-6xl">{f.big}</span>
                <span className="eyebrow mt-4 block !text-[0.6rem] text-stone">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
