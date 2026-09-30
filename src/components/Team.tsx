import { TEAM } from "@/lib/business";

const PRINCIPLES = [
  { title: "Escuchar", text: "Antes de coger la tijera, entender qué buscas y qué te queda bien." },
  { title: "Oficio", text: "Técnica aprendida con los años: tradición de siempre, tendencias de ahora." },
  { title: "Cercanía", text: "Una barbería de barrio donde te conocen por tu nombre." },
];

export function Team() {
  return (
    <section id="equipo" className="scroll-mt-20 border-t border-ink/10 bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p className="eyebrow animate-fade-up text-terra">El equipo</p>
        <h2 className="animate-fade-up mt-6 max-w-3xl text-5xl leading-[1] sm:text-6xl">
          El oficio <em className="italic text-wood">detrás de JUS.</em>
        </h2>

        {TEAM.length > 0 ? (
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <li key={m.name} className="animate-fade-up">
                {m.photo && (
                  <img src={m.photo} alt={`${m.name}, ${m.role} en Barberia JUS`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                )}
                <p className="mt-5 font-display text-2xl">{m.name}</p>
                <p className="eyebrow mt-2 !text-[0.6rem] text-stone">{m.role}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ol className="mt-14 grid gap-px bg-ink/15 sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="animate-fade-up bg-paper py-8 sm:px-8 sm:first:pl-0" style={{ transitionDelay: `${i * 120}ms` }}>
                <span className="eyebrow !text-[0.58rem] text-stone">0{i + 1}</span>
                <p className="mt-6 font-display text-3xl">{p.title}</p>
                <p className="mt-3 max-w-xs text-ink/65">{p.text}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
