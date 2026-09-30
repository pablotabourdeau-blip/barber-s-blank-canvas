/**
 * BARBERIA JUS — datos reales y confirmados del negocio.
 * Edita aquí: todo el sitio lee de este archivo.
 * Los campos a `null` / arrays vacíos están pendientes de confirmar:
 * la web los oculta o usa una alternativa elegante hasta que se rellenen.
 */

export const BUSINESS = {
  name: "Barberia JUS",
  shortName: "JUS",
  tagline: "Barberia · Barcelona",
  address: "Carrer d'Argullós, 104",
  postalCode: "08016",
  city: "Barcelona",
  neighbourhood: "Nou Barris · La Prosperitat",
  phone: "933 53 08 16",
  phoneHref: "tel:+34933530816",
  email: "barberiajus@gmail.com",
  yearsLabel: "20+",
  siteUrl: "https://barber-blank-slate.lovable.app",

  /** Pendiente: URL real de reservas (Booksy u otra). Si es null, "Reservar" llama por teléfono. */
  bookingUrl: null as string | null,
  /** Pendiente: sólo rellenar si el número es realmente WhatsApp de la barbería. Formato: "34600000000". */
  whatsapp: null as string | null,
  /** Pendiente: URLs reales de redes sociales. */
  instagramUrl: null as string | null,
  facebookUrl: null as string | null,
  /** Pendiente: enlace a la ficha de Google con reseñas. */
  googleReviewsUrl: null as string | null,
};

export const MAPS_QUERY = encodeURIComponent(
  `Barberia JUS, ${BUSINESS.address}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
);
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

/** Enlace de reserva: la URL de reservas si existe; si no, llamada directa. */
export const BOOKING_HREF = BUSINESS.bookingUrl ?? BUSINESS.phoneHref;
export const BOOKING_IS_EXTERNAL = Boolean(BUSINESS.bookingUrl);

export const HOURS: { day: string; short: string; hours: string | null }[] = [
  { day: "Lunes", short: "Lun", hours: "09:00–13:30 · 16:00–20:00" },
  { day: "Martes", short: "Mar", hours: "09:00–13:30 · 16:00–20:00" },
  { day: "Miércoles", short: "Mié", hours: "09:00–13:30 · 16:00–20:00" },
  { day: "Jueves", short: "Jue", hours: "09:00–13:30 · 16:00–20:00" },
  { day: "Viernes", short: "Vie", hours: "09:00–13:30 · 16:00–20:00" },
  { day: "Sábado", short: "Sáb", hours: "08:30–14:00" },
  { day: "Domingo", short: "Dom", hours: null },
];

/**
 * Servicios. `price` y `duration` a null = no confirmados (se muestra "Consultar").
 */
export const SERVICES: {
  category: string;
  name: string;
  description: string;
  price: string | null;
  duration: string | null;
}[] = [
  {
    category: "01",
    name: "Corte",
    description: "Clásico o actual. Tijera, máquina y degradados adaptados a ti.",
    price: null,
    duration: null,
  },
  {
    category: "02",
    name: "Barba",
    description: "Arreglo, perfilado y definición para que la barba te acompañe.",
    price: null,
    duration: null,
  },
  {
    category: "03",
    name: "Afeitado",
    description: "Afeitado tradicional, con calma y el cuidado de siempre.",
    price: null,
    duration: null,
  },
  {
    category: "04",
    name: "Corte + Barba",
    description: "El servicio completo para salir impecable de arriba abajo.",
    price: null,
    duration: null,
  },
  {
    category: "05",
    name: "Otros servicios",
    description: "Pregúntanos en la barbería o por teléfono y te asesoramos.",
    price: null,
    duration: null,
  },
];

/**
 * Galería. Añade aquí las fotografías REALES de JUS (sube a /public/photos/).
 * `label` opcional: EL OFICIO, EL DETALLE, EL ESPACIO, EL RESULTADO.
 * `size`: "tall" | "wide" | "normal".
 */
export const GALLERY: {
  src: string;
  alt: string;
  label?: string;
  size?: "tall" | "wide" | "normal";
}[] = [];

/** Foto principal del hero (real de JUS). Vacío = composición tipográfica. */
export const HERO_PHOTO: { src: string; alt: string } | null = null;

/** Equipo. Añadir sólo personas y fotos confirmadas. */
export const TEAM: { name: string; role: string; photo?: string }[] = [];

/** Reseñas reales copiadas literalmente (autor + texto). Nunca inventar. */
export const REVIEWS: { author: string; text: string }[] = [];
