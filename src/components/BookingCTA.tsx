import { ArrowRight, Phone } from "lucide-react";
import { BOOKING_HREF, BOOKING_IS_EXTERNAL, BUSINESS, HERO_PHOTO } from "@/lib/business";

const ext = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};

export function BookingCTA() {
  return (
    <section id="reserva" className="relative overflow-hidden bg-wood text-cream">
      {HERO_PHOTO && (
        <img src={HERO_PHOTO.src} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-[-2rem] select-none font-display text-[16rem] leading-none text-cream/[0.06] sm:text-[24rem] lg:text-[30rem]"
      >
        JUS
      </span>
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <p className="eyebrow animate-fade-up text-cream/60">Reserva</p>
        <h2 className="animate-fade-up mt-6 text-6xl leading-[0.95] sm:text-7xl lg:text-[7.5rem]">
          Tu próximo corte
          <br />
          <em className="italic text-cream/70">empieza aquí.</em>
        </h2>
        <div className="animate-fade-up mt-12 flex flex-col gap-3 sm:flex-row">
          <a href={BOOKING_HREF} {...ext} className="btn btn-solid-light">
            Reservar cita <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a href={BUSINESS.phoneHref} className="btn btn-ghost-light">
            <Phone className="h-4 w-4" strokeWidth={1.5} /> Llamar a JUS
          </a>
        </div>
      </div>
    </section>
  );
}
