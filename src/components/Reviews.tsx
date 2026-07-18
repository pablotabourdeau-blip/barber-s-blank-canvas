import { Star } from "lucide-react";

const reviews = [
  {
    text: "El mejor servicio de barbería, siempre la mejor opción.",
    author: "Laura",
  },
  {
    text: "Trato profesional y resultado impecable como de costumbre.",
    author: "Joel",
  },
  {
    text: "Me dejaron el pelo exactamente como quería. 100% recomiendo.",
    author: "Luca",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 estrellas de 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-brass text-brass"
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({ text, author }: { text: string; author: string }) {
  return (
    <article className="card-glass flex flex-col gap-5 p-8">
      <StarRating />
      <p className="text-base leading-relaxed text-ink/80">&ldquo;{text}&rdquo;</p>
      <div className="mt-auto flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center border border-ink/12 font-serif text-sm">
          {author.charAt(0)}
        </span>
        <span className="text-sm font-medium tracking-wide">{author}</span>
      </div>
    </article>
  );
}

export function Reviews() {
  return (
    <section
      id="resenas"
      className="relative overflow-hidden bg-marble-light py-24 md:py-32 lg:py-40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 flex items-center gap-4">
              <span className="hairline max-w-[80px]" />
              <span className="label-luxury">Opiniones</span>
            </div>
            <h2 className="font-serif text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          {/* Booksy badge */}
          <div className="animate-fade-up flex items-center gap-3 border border-ink/12 bg-card px-5 py-3">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl">4.9</span>
            </div>
            <div className="h-8 w-px bg-ink/12" aria-hidden />
            <div className="flex flex-col">
              <span className="flex items-center gap-1 text-sm font-medium">
                <Star className="h-3.5 w-3.5 fill-brass text-brass" strokeWidth={0} />
                en Booksy
              </span>
              <span className="text-xs text-muted-foreground">474 reseñas verificadas</span>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 md:grid-cols-3 animate-fade-up">
          {reviews.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
