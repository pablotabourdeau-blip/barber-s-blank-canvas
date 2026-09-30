import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BOOKING_HREF, BOOKING_IS_EXTERNAL } from "@/lib/business";

const ext = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};

/** CTA discreta y persistente sólo en móvil, aparece tras el hero. */
export function StickyBooking() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 200;
      setVisible(window.scrollY > window.innerHeight * 0.7 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-3 bottom-3 z-40 transition-all duration-500 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      ].join(" ")}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a href={BOOKING_HREF} {...ext} className="btn btn-solid w-full" tabIndex={visible ? 0 : -1}>
        Reservar cita <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
      </a>
    </div>
  );
}
