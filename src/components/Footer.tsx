import { Wordmark } from "./Wordmark";
import { NAV_ITEMS } from "./Header";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  const socials = [
    { label: "Instagram", href: BUSINESS.instagramUrl },
    { label: "Facebook", href: BUSINESS.facebookUrl },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href));

  return (
    <footer className="bg-ink pb-28 pt-20 text-cream lg:pb-12">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-5">
          <Wordmark size="lg" />
        </div>
        <address className="space-y-2 text-sm not-italic text-cream/70 md:col-span-3">
          <p>{BUSINESS.address}</p>
          <p>{BUSINESS.postalCode} {BUSINESS.city}</p>
          <p className="pt-3"><a href={BUSINESS.phoneHref} className="link-underline">{BUSINESS.phone}</a></p>
          <p><a href={`mailto:${BUSINESS.email}`} className="link-underline">{BUSINESS.email}</a></p>
        </address>
        <nav aria-label="Pie de página" className="md:col-span-2">
          <ul className="space-y-2 text-sm text-cream/70">
            {NAV_ITEMS.map((n) => (
              <li key={n.href}><a href={n.href} className="link-underline">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        {socials.length > 0 && (
          <ul className="space-y-2 text-sm text-cream/70 md:col-span-2">
            {socials.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline">{s.label}</a></li>
            ))}
          </ul>
        )}
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col justify-between gap-2 border-t border-cream/10 px-5 pt-6 text-xs text-cream/40 sm:flex-row sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} {BUSINESS.name}</p>
        <p>{BUSINESS.neighbourhood} · Barcelona</p>
      </div>
    </footer>
  );
}
