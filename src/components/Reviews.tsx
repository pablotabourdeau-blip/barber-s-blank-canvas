import { ArrowUpRight } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/business";

export function Reviews() {
  const href =
    BUSINESS.googleReviewsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Barberia JUS ${BUSINESS.address} Barcelona`)}`;

  return (
    <section id="resenas" className="scroll-mt-20 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 border-y border-ink/15 py-14 lg:flex-row lg:items-center">
          <h2 className="animate-fade-up text-4xl leading-[1.05] sm:text-5xl">
            Lo que dicen <em className="italic text-wood">nuestros clientes.</em>
          </h2>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost animate-fade-up self-start lg:self-auto">
            Ver todas las reseñas <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>

        {REVIEWS.length > 0 && (
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <li key={r.author + r.text.slice(0, 12)} className="animate-fade-up">
                <blockquote className="font-display text-2xl italic leading-snug">“{r.text}”</blockquote>
                <p className="eyebrow mt-5 !text-[0.6rem] text-stone">{r.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
