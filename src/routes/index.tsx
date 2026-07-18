import { createFileRoute } from "@tanstack/react-router";
import heroStrop from "@/assets/hero-strop.jpg";
import barberMateo from "@/assets/barber-mateo.jpg";
import barberElena from "@/assets/barber-elena.jpg";
import barberJulian from "@/assets/barber-julian.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Estirpe — Barbería de autor en Madrid" },
      {
        name: "description",
        content:
          "Barbería clásica en Madrid. Corte de autor, afeitado a navaja y arreglo de barba. Reserva tu ritual.",
      },
      { property: "og:title", content: "La Estirpe — Barbería de autor" },
      {
        property: "og:description",
        content: "El arte del tiempo pausado. Piel, acero y calma en el corazón de Madrid.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-accent">
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex justify-between items-center">
        <span className="font-display italic tracking-tight text-2xl">La Estirpe</span>
        <div className="hidden md:flex gap-8 items-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
          <a href="#equipo" className="hover:text-foreground transition-colors">El Equipo</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          <a href="#contacto" className="px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-accent transition-colors">
            Reservar
          </a>
        </div>
        <div className="md:hidden flex flex-col gap-1">
          <div className="w-5 h-0.5 bg-foreground" />
          <div className="w-5 h-0.5 bg-foreground" />
        </div>
      </nav>

      <section className="relative px-6 pt-16 pb-24 md:pt-32 md:pb-40 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-reveal">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-balance mb-8">
              El arte del <span className="italic">tiempo</span> pausado.
            </h1>
            <p className="max-w-md text-lg text-muted-foreground leading-relaxed text-pretty">
              Ubicada en el corazón de la ciudad, rescatamos la ceremonia del afeitado
              clásico. Piel, acero y calma.
            </p>
          </div>
          <div className="lg:col-span-5 animate-reveal [animation-delay:200ms]">
            <img
              src={heroStrop}
              alt="Correa de cuero vintage colgada en una pared de yeso"
              width={1080}
              height={1440}
              className="w-full aspect-[4/5] object-cover rounded-2xl mb-4"
            />
            <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              <span>Est. MMXXIV</span>
              <span>Calle 12, Madrid</span>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-6 py-24 border-t border-border bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-baseline mb-16 gap-4">
            <h2 className="font-display text-4xl italic">Menú de Rituales</h2>
            <p className="font-mono text-[11px] text-muted-foreground uppercase">
              Todos los servicios incluyen toalla caliente
            </p>
          </div>

          <div className="grid gap-1 border-t border-border">
            {[
              { name: "Corte de Autor", desc: "Asesoramiento, lavado y peinado especializado.", price: "€35" },
              { name: "Afeitado a Navaja", desc: "Ritual completo con bálsamo y masaje facial.", price: "€28" },
              { name: "Arreglo de Barba", desc: "Perfilado técnico y nutrición con aceites.", price: "€22" },
              { name: "Ritual Completo", desc: "Corte de autor + afeitado a navaja.", price: "€55" },
            ].map((s) => (
              <div
                key={s.name}
                className="group py-8 border-b border-border flex justify-between items-center hover:px-4 transition-all duration-500 cursor-default"
              >
                <div>
                  <h3 className="text-2xl font-display">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
                <span className="font-mono text-lg">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Mateo S.", role: "Maestro Barbero", img: barberMateo, delay: "" },
            { name: "Elena V.", role: "Especialista en Afeitado", img: barberElena, delay: "[animation-delay:100ms]" },
            { name: "Julián M.", role: "Corte Clásico", img: barberJulian, delay: "[animation-delay:200ms]" },
          ].map((p) => (
            <div key={p.name} className={`flex flex-col gap-6 animate-reveal ${p.delay}`}>
              <img
                src={p.img}
                alt={`Retrato de ${p.name}`}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] object-cover rounded-xl"
              />
              <div>
                <h4 className="font-display text-2xl italic">{p.name}</h4>
                <p className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mt-1">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contacto" className="px-6 py-20 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl mb-8">Visítanos</h2>
            <div className="space-y-6 text-sm">
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Lunes — Viernes</span>
                <span>09:00 — 20:00</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Sábados</span>
                <span>10:00 — 15:00</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Domingos</span>
                <span className="italic text-accent">Cerrado</span>
              </div>
              <p className="pt-4 leading-relaxed">
                Calle de la Tradición, 12
                <br />
                28004 Madrid, España
                <br />
                +34 912 345 678
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <p className="md:text-right mb-8 text-muted-foreground max-w-xs">
              Suscríbete para recibir noticias sobre rituales y eventos exclusivos.
            </p>
            <button className="w-full md:w-auto px-12 py-5 bg-foreground text-background font-display text-xl rounded-full hover:bg-accent transition-all duration-300">
              Reservar mi turno
            </button>
            <div className="mt-12 font-display italic text-2xl opacity-20">La Estirpe</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
