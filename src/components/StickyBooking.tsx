import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/es-es/77361_barberia-zappra_barberia_48863_barcelona";

export function StickyBooking() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop / tablet: floating pill bottom-right */}
      <a
        href={BOOKSY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar cita"
        className={[
          "hidden sm:inline-flex fixed bottom-6 right-6 z-[70] items-center gap-2 px-5 py-3.5",
          "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone",
          "bg-ink border border-ink rounded-full shadow-soft",
          "transition-all duration-500 hover:bg-brass hover:border-brass hover:-translate-y-0.5",
          visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <Calendar className="h-4 w-4" strokeWidth={2} />
        Reservar cita
      </a>

      {/* Mobile: full-width bottom bar */}
      <div
        className={[
          "sm:hidden fixed inset-x-0 bottom-0 z-[70] px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]",
          "bg-bone/95 backdrop-blur-md border-t border-ink/10",
          "transition-transform duration-500",
          visible ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
      >
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 bg-ink text-bone py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] rounded-full"
        >
          <Calendar className="h-4 w-4" strokeWidth={2} />
          Reservar cita
        </a>
      </div>
    </>
  );
}
